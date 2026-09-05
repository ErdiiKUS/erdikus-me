"""Idempotent schema + TMDB load + dummy ratings + model training for production."""

from __future__ import annotations

import os
import time

from src.db_connect import get_db_connection


SCHEMA_SQL = """
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    original_title VARCHAR(255),
    overview TEXT,
    release_date DATE,
    vote_average NUMERIC(3, 1),
    vote_count INTEGER,
    popularity NUMERIC(10, 3),
    poster_path VARCHAR(255),
    backdrop_path VARCHAR(255),
    adult BOOLEAN,
    original_language VARCHAR(255),
    video BOOLEAN,
    genre_ids INTEGER[],
    homepage VARCHAR(255),
    imdb_id VARCHAR(50),
    runtime INTEGER,
    tagline TEXT,
    director VARCHAR(255),
    writer VARCHAR(255),
    cast_list TEXT[],
    keywords TEXT[],
    trailer_url VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    profile_image VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    login_date_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_ratings (
    rating_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    movie_id INTEGER REFERENCES movies(id) ON DELETE CASCADE,
    rating NUMERIC(3, 1) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_movie_pair UNIQUE (user_id, movie_id)
);

CREATE TABLE IF NOT EXISTS log_types (
    log_type_id INTEGER PRIMARY KEY,
    log_type_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_logs (
    log_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE SET NULL,
    movie_id INTEGER REFERENCES movies(id) ON DELETE CASCADE,
    log_type INTEGER NOT NULL,
    platform_name VARCHAR(100) NOT NULL,
    description TEXT[],
    action_type VARCHAR(50) DEFAULT 'deeplink_click',
    clicked_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_movies_cast ON movies USING GIN (cast_list);
CREATE INDEX IF NOT EXISTS idx_movies_keyword ON movies USING GIN (keywords);

INSERT INTO log_types (log_type_id, log_type_name) VALUES
    (1, 'user_update'), (2, 'movie_rating'), (3, 'redirection')
ON CONFLICT (log_type_id) DO NOTHING;
"""


def wait_for_db(retries: int = 40) -> None:
    last = None
    for _ in range(retries):
        try:
            conn = get_db_connection()
            conn.close()
            return
        except Exception as exc:
            last = exc
            time.sleep(2)
    raise RuntimeError(f"Postgres hazır değil: {last}")


def table_count(table: str) -> int:
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f"SELECT COUNT(*) FROM {table};")
    n = cur.fetchone()[0]
    cur.close()
    conn.close()
    return int(n)


def ensure_schema() -> None:
    conn = get_db_connection()
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute(SCHEMA_SQL)
    for trigger, table in (
        ("update_movies_modtime", "movies"),
        ("update_user_modtime", "users"),
        ("update_user_ratings_modtime", "user_ratings"),
    ):
        cur.execute(f"DROP TRIGGER IF EXISTS {trigger} ON {table};")
        cur.execute(
            f"CREATE TRIGGER {trigger} BEFORE UPDATE ON {table} "
            "FOR EACH ROW EXECUTE FUNCTION update_modified_column();"
        )
    cur.close()
    conn.close()


def run() -> None:
    os.makedirs("models", exist_ok=True)
    wait_for_db()
    ensure_schema()

    pages = int(os.getenv("TMDB_PAGES", "10"))
    if table_count("movies") == 0:
        print(f"Film yok, TMDB'den {pages} sayfa çekiliyor...")
        from src.fetch_movies import popular_and_load_rich_movies

        popular_and_load_rich_movies(page_limit=pages)
    else:
        print(f"DB'de {table_count('movies')} film var, ETL atlandı.")

    if table_count("movies") == 0:
        print("Film yüklenemedi; uygulama boş katalogla açılacak.")
        return

    if table_count("user_ratings") == 0:
        print("Dummy rating üretiliyor...")
        from src import dummy_data

        dummy_data.USER_COUNT = int(os.getenv("DUMMY_USER_COUNT", "120"))
        dummy_data.generate_data()

    needed = [
        "models/cosine_sim.pkl",
        "models/indices.pkl",
        "models/movies_df.pkl",
        "models/item_similarity.pkl",
        "models/item_indices.pkl",
        "models/user_cosine_similarity_matrix.pkl",
        "models/user_indices.pkl",
    ]
    if any(not os.path.exists(path) for path in needed):
        print("Modeller eğitiliyor...")
        from src.content_based_filters import train_and_save_model
        from src.item_based_filters import train_and_save_item_based_model
        from src.user_based_filters import train_and_save_user_based_model

        train_and_save_model()
        train_and_save_item_based_model()
        train_and_save_user_based_model()
    print("Bootstrap tamam.")


if __name__ == "__main__":
    run()

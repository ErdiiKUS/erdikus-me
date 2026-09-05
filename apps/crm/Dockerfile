FROM python:3.11-slim

WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV STREAMLIT_BROWSER_GATHER_USAGE_STATS=false

RUN apt-get update && apt-get install -y --no-install-recommends git \
  && rm -rf /var/lib/apt/lists/* \
  && pip install --no-cache-dir streamlit pandas plotly openpyxl

RUN git clone --depth 1 --branch Cursor https://github.com/ErdiiKUS/CRM-Tahminleme-Panosu.git /data

COPY streamlit_app.py ./
COPY .streamlit ./.streamlit

EXPOSE 8501
CMD ["streamlit", "run", "streamlit_app.py", "--server.address=0.0.0.0", "--server.port=8501", "--server.headless=true"]

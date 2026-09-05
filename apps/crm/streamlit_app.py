import os
import re
from pathlib import Path

import pandas as pd
import plotly.express as px
import plotly.io as pio
import streamlit as st

DATA_DIR = Path(os.getenv("CRM_DATA_DIR", "/data"))
pio.templates.default = "plotly_dark"

st.set_page_config(
    page_title="CRM Tahminleme",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
    html, body, [data-testid="stAppViewContainer"], [data-testid="stHeader"],
    [data-testid="stToolbar"], .stApp, .stMain, [data-testid="stMain"] {
        background-color: #000000 !important;
        color: #f3f3f3 !important;
    }
    [data-testid="stHeader"] { background: #000000 !important; }
    [data-testid="stSidebar"] { display: none !important; }
    .block-container { padding-top: 1.4rem; max-width: 1200px; }
    .stMarkdown, p, h1, h2, h3, li { color: #f3f3f3 !important; }
    div[data-testid="stMetric"] {
        background: #111111;
        border: 1px solid #2a2a2a;
        border-radius: 12px;
        padding: 12px 14px;
    }
    img { border-radius: 10px; border: 1px solid #2a2a2a; }
    </style>
    """,
    unsafe_allow_html=True,
)


def load_excel(name: str) -> pd.DataFrame | None:
    path = DATA_DIR / name
    if not path.exists():
        return None
    return pd.read_excel(path)


def load_report() -> str:
    path = DATA_DIR / "Executive_Analysis_Report.md"
    if not path.exists():
        return ""
    text = path.read_text(encoding="utf-8")
    text = re.sub(r"\\#\S+\s*", "", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    return text


def show_dashboard(filename: str, caption: str) -> None:
    path = DATA_DIR / filename
    if path.exists():
        st.image(str(path), caption=caption, width="stretch")
    else:
        st.caption(f"{caption} görseli bulunamadı.")


cross = load_excel("CROSS_SELL.xlsx")
cltv = load_excel("CLTV.xlsx")
report = load_report()

st.title("CRM Tahminleme Panosu")
st.caption("Online Retail II · RFM · CLTV (BG/NBD + Gamma-Gamma) · Apriori çapraz satış")

tabs = st.tabs(["Özet", "Çapraz satış", "CLTV", "Yöntem"])

with tabs[0]:
    m1, m2, m3, m4 = st.columns(4)
    m1.metric("2009 ciro", "678.39K")
    m2.metric("2010 ciro", "8.23M", "+1113%")
    m3.metric("2011 ciro", "8.18M")
    m4.metric("Probability Alive", "0.95", "0.74 → 0.95")

    n1, n2, n3 = st.columns(3)
    n1.metric("3 aylık sipariş tahmini", "3.31M")
    n2.metric("CLTV A payı", "%95.28")
    n3.metric("Veri seti", "2009–2011")

    st.markdown("### Yönetici özeti")
    if report:
        st.markdown(report)
    else:
        st.markdown(
            """
Online Retail II (2009–2011) üzerinde RFM, CLTV, BG/NBD ve Gamma-Gamma ile
geçmiş performans ve 3 aylık projeksiyon modellendi; çıktılar Power BI’da görselleştirildi.
"""
        )

    st.markdown("### Power BI — Executive dashboard")
    show_dashboard("PowerBI-Total-A.png", "Toplam dönem (2009–2011)")

    y1, y2, y3 = st.columns(3)
    with y1:
        show_dashboard("PowerBI-2009-A.png", "2009")
    with y2:
        show_dashboard("PowerBI-2010-A.png", "2010")
    with y3:
        show_dashboard("PowerBI-2011-A.png", "2011")

with tabs[1]:
    if cross is None:
        st.warning("CROSS_SELL.xlsx bulunamadı.")
    else:
        st.dataframe(cross.head(50), width="stretch")
        numeric = [c for c in cross.columns if pd.api.types.is_numeric_dtype(cross[c])]
        if numeric:
            metric = st.selectbox("Grafik metriği", numeric, index=0)
            fig = px.histogram(cross, x=metric, nbins=40, title=f"{metric} dağılımı")
            fig.update_layout(paper_bgcolor="#000000", plot_bgcolor="#111111")
            st.plotly_chart(fig, width="stretch")

with tabs[2]:
    if cltv is None:
        st.warning("CLTV.xlsx bu imajda yok.")
    else:
        filter_col = st.selectbox("Sütun", list(cltv.columns), index=0)
        st.dataframe(cltv.head(200), width="stretch")
        if pd.api.types.is_numeric_dtype(cltv[filter_col]):
            fig = px.histogram(cltv, x=filter_col, nbins=40, title=str(filter_col))
            fig.update_layout(paper_bgcolor="#000000", plot_bgcolor="#111111")
            st.plotly_chart(fig, width="stretch")

with tabs[3]:
    st.markdown(
        """
- **RFM:** Recency, Frequency, Monetary ile davranışsal segmentler.
- **CLTV:** Lifetimes, BG/NBD sipariş sayısı, Gamma-Gamma ortalama sipariş değeri.
- **Churn:** `probability_alive` ile aktif kalma olasılığı.
- **Çapraz satış:** mlxtend Apriori birliktelik kuralları.
- Kaynak: [CRM-Tahminleme-Panosu](https://github.com/ErdiiKUS/CRM-Tahminleme-Panosu)
"""
    )

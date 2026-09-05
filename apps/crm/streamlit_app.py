import os
from pathlib import Path

import pandas as pd
import plotly.express as px
import streamlit as st

DATA_DIR = Path(os.getenv("CRM_DATA_DIR", "/data"))

st.set_page_config(
    page_title="CRM Tahminleme",
    page_icon="📊",
    layout="wide",
)

st.title("CRM Tahminleme Panosu")
st.caption(
    "Online Retail II • RFM • CLTV (BG/NBD + Gamma-Gamma) • Apriori çapraz satış"
)

st.markdown(
    """
Bu pano, e-ticaret geçmiş satışlarından müşteri değeri ve sepet birlikteliği üretir.
Kaynak analiz: [CRM-Tahminleme-Panosu](https://github.com/ErdiiKUS/CRM-Tahminleme-Panosu).
"""
)


def load_excel(name: str) -> pd.DataFrame | None:
    path = DATA_DIR / name
    if not path.exists():
        return None
    return pd.read_excel(path)


cross = load_excel("CROSS_SELL.xlsx")
cltv = load_excel("CLTV.xlsx")

tabs = st.tabs(["Özet", "Çapraz satış", "CLTV", "Yöntem"])

with tabs[0]:
    c1, c2, c3 = st.columns(3)
    c1.metric("Çapraz satış kuralı", "—" if cross is None else f"{len(cross):,}")
    c2.metric("CLTV satırı", "—" if cltv is None else f"{len(cltv):,}")
    c3.metric("Veri seti", "Online Retail II")
    st.info(
        "Power BI yönetim panosu GitHub deposundaki ekran görüntülerinde; "
        "burada Streamlit ile aynı çıktılara filtre uygulanır."
    )

with tabs[1]:
    if cross is None:
        st.warning("CROSS_SELL.xlsx bulunamadı.")
    else:
        st.dataframe(cross.head(50), use_container_width=True)
        numeric = [c for c in cross.columns if pd.api.types.is_numeric_dtype(cross[c])]
        if len(numeric) >= 1:
            metric = st.selectbox("Grafik metriği", numeric, index=0)
            fig = px.histogram(cross, x=metric, nbins=40, title=f"{metric} dağılımı")
            st.plotly_chart(fig, use_container_width=True)

with tabs[2]:
    if cltv is None:
        st.warning(
            "CLTV.xlsx bu imajda yok veya çok büyük olduğu için harici tutulmuş olabilir."
        )
    else:
        filter_col = st.selectbox("Sütun", list(cltv.columns), index=0)
        preview = cltv.head(200)
        st.dataframe(preview, use_container_width=True)
        if pd.api.types.is_numeric_dtype(cltv[filter_col]):
            fig = px.histogram(cltv, x=filter_col, nbins=40, title=f"{filter_col}")
            st.plotly_chart(fig, use_container_width=True)

with tabs[3]:
    st.markdown(
        """
- **RFM:** Recency, Frequency, Monetary ile davranışsal segmentler.
- **CLTV:** Lifetimes kütüphanesi, BG/NBD sipariş sayısı, Gamma-Gamma ortalama sipariş değeri.
- **Churn:** `probability_alive` ile aktif kalma olasılığı.
- **Çapraz satış:** mlxtend Apriori birliktelik kuralları.
"""
    )

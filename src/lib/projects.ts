import { Film, LineChart, Pill } from "lucide-react";

export const projects = [
  {
    title: "SelectYourMovie",
    badge: "Canlı",
    icon: Film,
    description:
      "İçerik, kullanıcı ve hibrit modellerle film öneren Streamlit uygulaması.",
    href: "https://movie.erdikus.me",
    secondary: {
      label: "GitHub",
      href: "https://github.com/ErdiiKUS/selectyourmovie",
    },
  },
  {
    title: "CRM Tahminleme",
    badge: "Canlı",
    icon: LineChart,
    description:
      "Online Retail II üzerinde RFM, CLTV, churn ve Apriori çapraz satış panosu.",
    href: "https://crm.erdikus.me",
    secondary: {
      label: "GitHub",
      href: "https://github.com/ErdiiKUS/CRM-Tahminleme-Panosu",
    },
  },
  {
    title: "PillTrack",
    badge: "App Store",
    icon: Pill,
    description:
      "İlaç hatırlatma uygulaması. App Store’da yayında; web: pilltrack.co.",
    href: "https://apps.apple.com/tr/app/pilltrack-medication-reminder/id6761114352?l=tr",
    secondary: { label: "pilltrack.co", href: "https://pilltrack.co/" },
  },
] as const;

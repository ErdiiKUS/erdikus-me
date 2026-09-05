import { Film, LineChart, Pill } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export function getProjects(locale: Locale) {
  const en = locale === "en";
  const t = (tr: string, english: string) => (en ? english : tr);

  return [
    {
      title: "SelectYourMovie",
      badgeKey: "live" as const,
      icon: Film,
      description: t(
        "İçerik, kullanıcı ve hibrit modellerle film öneren Streamlit uygulaması.",
        "A Streamlit app that recommends films with content, user and hybrid models.",
      ),
      href: "https://movie.erdikus.me",
      secondary: {
        label: "GitHub",
        href: "https://github.com/ErdiiKUS/selectyourmovie",
      },
    },
    {
      title: t("CRM Tahminleme", "CRM Forecasting"),
      badgeKey: "live" as const,
      icon: LineChart,
      description: t(
        "Online Retail II üzerinde RFM, CLTV, churn ve Apriori çapraz satış panosu.",
        "RFM, CLTV, churn and Apriori cross-sell dashboard on Online Retail II.",
      ),
      href: "https://crm.erdikus.me",
      secondary: {
        label: "GitHub",
        href: "https://github.com/ErdiiKUS/CRM-Tahminleme-Panosu",
      },
    },
    {
      title: "PillTrack",
      badgeKey: "appStore" as const,
      icon: Pill,
      description: t(
        "İlaç hatırlatma uygulaması. App Store’da yayında; web: pilltrack.co.",
        "Medication reminder app. Live on the App Store; web: pilltrack.co.",
      ),
      href: "https://apps.apple.com/tr/app/pilltrack-medication-reminder/id6761114352?l=tr",
      secondary: { label: "pilltrack.co", href: "https://pilltrack.co/" },
    },
  ];
}

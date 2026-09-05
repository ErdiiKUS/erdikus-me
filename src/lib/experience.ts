import type { Locale } from "@/lib/i18n";

export type ExperienceRole = {
  company: string;
  title: string;
  dates: string;
  points?: string[];
  tags?: string[];
};

export type ExperienceProject = {
  title: string;
  summary: string;
  href?: string;
};

export type ExperienceArea = {
  id: string;
  title: string;
  teaser: string;
  tags: string[];
  detailTitle: string;
  summary: string;
  skills: string[];
  technologies: string[];
  roles?: ExperienceRole[];
  projects?: ExperienceProject[];
  education?: { title: string; href?: string }[];
  certificates?: { title: string; href: string }[];
};

export function getExperienceAreas(locale: Locale): ExperienceArea[] {
  const en = locale === "en";
  const t = (tr: string, english: string) => (en ? english : tr);

  return [
    {
      id: "software-support",
      title: t("L2 Yazılım Destek & Test", "L2 Software Support & Test"),
      teaser: t(
        "Production sistemler, SQL, API testleri, log analizi ve hata çözüm süreçleri.",
        "Production systems, SQL, API testing, log analysis and issue resolution.",
      ),
      tags: ["SQL", "REST API", "Postman", "UAT", "RCA"],
      detailTitle: t("L2 Yazılım Destek & Test", "L2 Software Support & Test"),
      summary: t(
        "Kurumsal ve production ortamlarında uygulama desteği, hata analizi, API testleri ve veri doğrulama süreçlerinde görev aldım. SQL sorguları, log analizi ve REST API kontrolleri kullanarak uygulama ve entegrasyon kaynaklı sorunların kök nedenlerini analiz ettim; geliştirme ekipleriyle çözüm ve doğrulama süreçlerini yürüttüm.",
        "I have worked in enterprise and production environments on application support, defect analysis, API testing and data validation. Using SQL queries, log analysis and REST API checks I analysed root causes of application and integration issues, and ran resolution and verification with development teams.",
      ),
      skills: [
        "L2 Application Support",
        "Production Support",
        "Manual Testing",
        "UAT",
        "API Testing",
        "SQL Data Validation",
        "Root Cause Analysis",
        "Log Analysis",
        "Incident / Issue Analysis",
        "Integration Troubleshooting",
      ],
      technologies: [
        "SQL Server",
        "PostgreSQL",
        "MySQL",
        "Oracle SQL",
        "REST API",
        "Postman",
        "JSON",
        "XML",
        "SOAP",
        "Linux",
        "Docker",
        "Nginx",
        "Cloudflare",
        "Git",
      ],
      roles: [
        {
          company: "DTL IT LLC",
          title: "Software Support Engineer L2",
          dates: "2022–2025",
          tags: [
            "SQL",
            "REST API",
            "Postman",
            "UAT",
            "Manual Test",
            "Log Analysis",
            "RCA",
            "Production Support",
          ],
        },
        {
          company: "DNA Call Center",
          title: "IT Support Specialist",
          dates: "2014–2016",
          tags: [
            "MySQL",
            "PostgreSQL",
            "Windows Server",
            "Active Directory",
            "System Analysis",
            "Network",
          ],
        },
        {
          company: t("Özel Atakent Hastanesi", "Atakent Private Hospital"),
          title: t("IT Specialist / IT Responsible", "IT Specialist / IT Lead"),
          dates: "2013–2017",
          tags: [
            "Oracle SQL",
            "HBYS",
            "Windows Server",
            "Active Directory",
            "Network",
            "Technical Support",
          ],
        },
      ],
    },
    {
      id: "ecommerce",
      title: t("E-Ticaret ve Operasyon Uzmanı", "E-Commerce & Operations Specialist"),
      teaser: t(
        "E-ticaret altyapıları, operasyon, ödeme ve kargo entegrasyonları ile veri analitiği.",
        "E-commerce infrastructure, operations, payment and cargo integrations, and data analytics.",
      ),
      tags: ["Operations", "API", "Data"],
      detailTitle: t(
        "E-Ticaret ve Operasyon Uzmanı",
        "E-Commerce & Operations Specialist",
      ),
      summary: t(
        "E-ticaret altyapıları, operasyon yönetimi, ödeme ve kargo entegrasyonları ile veri analitiği süreçlerinde profesyonel deneyim.",
        "Professional experience in e-commerce infrastructure, operations management, payment and cargo integrations, and data analytics.",
      ),
      skills: [
        "E-Commerce Operations",
        "E-Commerce Infrastructure",
        "Payment Systems",
        "Cargo Integrations",
        "API Integrations",
        "Customer & Operations Management",
        "Sales Data Analysis",
        "Reporting",
        "System Continuity",
      ],
      technologies: [
        "SQL",
        "REST API",
        "Cloudflare",
        "Linux",
        "MySQL",
        "PostgreSQL",
        "E-Commerce Platforms",
        "Google Ads",
        "Meta Ads",
      ],
      roles: [
        {
          company: "Elektromarketim",
          title: t("E-Ticaret & Sistem Yöneticisi", "E-Commerce & Systems Manager"),
          dates: "2017 — 2022",
          points: [
            t("E-ticaret operasyonlarının yönetimi", "E-commerce operations management"),
            t(
              "Ödeme, kargo ve API entegrasyonları",
              "Payment, cargo and API integrations",
            ),
            t(
              "SQL ile satış ve operasyon raporlama",
              "Sales and operations reporting with SQL",
            ),
            t("7/24 sistem sürekliliği", "24/7 system continuity"),
          ],
        },
      ],
      certificates: [
        {
          title: t(
            "E-Ticaret Uzman Eğitmenlik Sertifikası",
            "E-Commerce Expert Trainer Certificate",
          ),
          href: "https://www.linkedin.com/in/erdi-kus/overlay/Certifications/488466647/treasury/?profileId=ACoAACbJ3wQBkdeU-r3hnyPhkhCMKXaR7IGDILU",
        },
        {
          title: t(
            "E-İhracat Uzman Eğitmen Sertifikası",
            "E-Export Expert Trainer Certificate",
          ),
          href: "https://www.linkedin.com/in/erdi-kus/overlay/Certifications/488378798/treasury/?profileId=ACoAACbJ3wQBkdeU-r3hnyPhkhCMKXaR7IGDILU",
        },
        {
          title: t("E-İhracat Uzmanlığı", "E-Export Specialization"),
          href: "https://www.linkedin.com/in/erdi-kus/overlay/Certifications/488215175/treasury/?profileId=ACoAACbJ3wQBkdeU-r3hnyPhkhCMKXaR7IGDILU",
        },
        {
          title: t("E-Ticaret Uzmanlığı", "E-Commerce Specialization"),
          href: "https://www.linkedin.com/in/erdi-kus/overlay/Certifications/488075456/treasury/?profileId=ACoAACbJ3wQBkdeU-r3hnyPhkhCMKXaR7IGDILU",
        },
      ],
      projects: [
        {
          title: t("CRM Tahminleme", "CRM Forecasting"),
          summary: t(
            "RFM • CLTV • churn • Apriori çapraz satış",
            "RFM • CLTV • churn • Apriori cross-sell",
          ),
          href: "https://crm.erdikus.me",
        },
      ],
    },
    {
      id: "data-science",
      title: t("Veri Analizi & Veri Bilimi", "Data Analytics & Data Science"),
      teaser: t(
        "Python, ML, CRM analytics, tahminleme ve öneri sistemleri.",
        "Python, ML, CRM analytics, forecasting and recommendation systems.",
      ),
      tags: ["Python", "ML", "SQL"],
      detailTitle: t("Veri Analizi & Veri Bilimi", "Data Analytics & Data Science"),
      summary: t(
        "Python ve SQL kullanarak veri analizi, müşteri analitiği, makine öğrenmesi ve tahminleme problemleri üzerinde çalışıyorum.",
        "I work on data analysis, customer analytics, machine learning and forecasting problems using Python and SQL.",
      ),
      skills: [
        "Exploratory Data Analysis",
        "Data Cleaning",
        "Feature Engineering",
        "Machine Learning",
        "Classification",
        "Regression",
        "Recommendation Systems",
        "CRM Analytics",
        "RFM",
        "CLTV",
        "BG/NBD",
        "Gamma-Gamma",
        "Association Rule Learning",
        "Data Visualization",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "SQL",
        "Power BI",
        "Jupyter",
        "Git",
      ],
      education: [
        {
          title: "Miuul Data Science Bootcamp",
          href: "https://miuul.com/bootcamps/data-scientist-bootcamp",
        },
        {
          title: "Miuul CRM Analytics",
          href: "https://learning.miuul.com/certificates/mbtwipg78t",
        },
        {
          title: "Business Analysis Fundamentals — Microsoft",
          href: "https://coursera.org/account/accomplishments/records/DO27MXSBB3YV",
        },
      ],
      certificates: [
        {
          title: "Machine Learning — Miuul",
          href: "https://learning.miuul.com/certificates/uv25hocikq",
        },
        {
          title: "Querying MS SQL — Miuul",
          href: "https://learning.miuul.com/certificates/xbz5h7swgj",
        },
        {
          title: "Feature Engineering — Miuul",
          href: "https://learning.miuul.com/certificates/tovfpqe0ak",
        },
        {
          title: "Recommendation Systems — Miuul",
          href: "https://learning.miuul.com/certificates/567iquizll",
        },
        {
          title: "Python Programming for Data Science — Miuul",
          href: "https://learning.miuul.com/certificates/loizpdi0pa",
        },
        {
          title: "CRM Analytics — Miuul",
          href: "https://learning.miuul.com/certificates/mbtwipg78t",
        },
      ],
      projects: [
        {
          title: "SelectYourMovie",
          summary: t(
            "Machine Learning Recommendation System",
            "Machine Learning Recommendation System",
          ),
          href: "https://movie.erdikus.me",
        },
        {
          title: t("CRM Analytics", "CRM Analytics"),
          summary: "RFM • CLTV • BG/NBD • Gamma-Gamma",
          href: "https://crm.erdikus.me",
        },
        {
          title: t("Fraud Detection", "Fraud Detection"),
          summary: t(
            "Classification • Precision/Recall • Imbalanced Data",
            "Classification • Precision/Recall • Imbalanced Data",
          ),
        },
        {
          title: "Association Rule Learning",
          summary: t("Apriori • Recommendation", "Apriori • Recommendation"),
          href: "https://crm.erdikus.me",
        },
      ],
    },
    {
      id: "ai-projects",
      title: "AI & Software Projects",
      teaser: t(
        "LLM, AI destekli geliştirme ve otomasyon ile uygulama ve prototipler.",
        "Applications and prototypes using LLMs, AI-assisted development and automation.",
      ),
      tags: ["LLM", "n8n", "AI"],
      detailTitle: "AI & Software Projects",
      summary: t(
        "LLM, AI destekli geliştirme ve otomasyon araçlarını kullanarak gerçek problemlere yönelik uygulamalar ve prototipler geliştiriyorum.",
        "I build applications and prototypes for real problems using LLMs, AI-assisted development and automation tools.",
      ),
      skills: [
        "LLM Applications",
        "Prompt Engineering",
        "AI-assisted Development",
        "AI Agents",
        "Workflow Automation",
        "API Integration",
        "Generative AI",
      ],
      technologies: [
        "OpenAI",
        "LLM",
        "n8n",
        "Cursor",
        "Python",
        "Node.js",
        "REST API",
        "Git",
        "Docker",
      ],
      projects: [
        {
          title: "SelectYourMovie",
          summary: "Machine Learning Recommendation System",
          href: "https://movie.erdikus.me",
        },
        {
          title: t("CRM Tahminleme", "CRM Forecasting"),
          summary: t(
            "RFM • CLTV • churn • Apriori çapraz satış",
            "RFM • CLTV • churn • Apriori cross-sell",
          ),
          href: "https://crm.erdikus.me",
        },
        {
          title: "PillTrack",
          summary: t(
            "AI-assisted application development • Cursor",
            "AI-assisted application development • Cursor",
          ),
          href: "https://pilltrack.co/",
        },
        {
          title: "E-Commerce AI/Data Platform",
          summary: "Analytics + Automation + AI",
        },
        {
          title: "AI Agent Experiments",
          summary: "LLM + n8n + APIs",
        },
      ],
    },
  ];
}

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

export const experienceIntro =
  "E-ticaret, yazılım destek ve test alanlarında edindiğim profesyonel deneyimi; veri analitiği, veri bilimi ve yapay zekâ alanlarında geliştirdiğim teknik yetkinliklerle birleştiriyorum. İş deneyimlerim ve projelerimde SQL, API entegrasyonları, Python, makine öğrenmesi, LLM ve modern yazılım araçlarını kullanarak veri odaklı çözümler üretmeye ve teknik süreçleri iyileştirmeye odaklanıyorum.";

export const experienceAreas: ExperienceArea[] = [
  {
    id: "software-support",
    title: "L2 Yazılım Destek & Test",
    teaser: "Production sistemler, SQL, API testleri, log analizi ve hata çözüm süreçleri.",
    tags: ["SQL", "REST API", "Postman", "UAT", "RCA"],
    detailTitle: "L2 Yazılım Destek & Test",
    summary:
      "Kurumsal ve production ortamlarında uygulama desteği, hata analizi, API testleri ve veri doğrulama süreçlerinde görev aldım. SQL sorguları, log analizi ve REST API kontrolleri kullanarak uygulama ve entegrasyon kaynaklı sorunların kök nedenlerini analiz ettim; geliştirme ekipleriyle çözüm ve doğrulama süreçlerini yürüttüm.",
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
        company: "Özel Atakent Hastanesi",
        title: "IT Specialist / IT Responsible",
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
    title: "E-Ticaret",
    teaser: "E-ticaret altyapıları, operasyon, ödeme ve kargo entegrasyonları ile veri analitiği.",
    tags: ["Operations", "API", "Data"],
    detailTitle: "E-Ticaret & Dijital Operasyonlar",
    summary:
      "E-ticaret altyapıları, operasyon yönetimi, ödeme ve kargo entegrasyonları ile veri analitiği süreçlerinde profesyonel deneyim.",
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
        title: "E-Ticaret & Sistem Yöneticisi",
        dates: "2017 — 2022",
        points: [
          "E-ticaret operasyonlarının yönetimi",
          "Ödeme, kargo ve API entegrasyonları",
          "SQL ile satış ve operasyon raporlama",
          "7/24 sistem sürekliliği",
        ],
      },
    ],
    certificates: [
      {
        title: "Sertifika 01",
        href: "https://www.linkedin.com/in/erdi-kus/overlay/Certifications/488466647/treasury/?profileId=ACoAACbJ3wQBkdeU-r3hnyPhkhCMKXaR7IGDILU",
      },
      {
        title: "Sertifika 02",
        href: "https://www.linkedin.com/in/erdi-kus/overlay/Certifications/488378798/treasury/?profileId=ACoAACbJ3wQBkdeU-r3hnyPhkhCMKXaR7IGDILU",
      },
      {
        title: "Sertifika 03",
        href: "https://www.linkedin.com/in/erdi-kus/overlay/Certifications/488215175/treasury/?profileId=ACoAACbJ3wQBkdeU-r3hnyPhkhCMKXaR7IGDILU",
      },
      {
        title: "Sertifika 04",
        href: "https://www.linkedin.com/in/erdi-kus/overlay/Certifications/488075456/treasury/?profileId=ACoAACbJ3wQBkdeU-r3hnyPhkhCMKXaR7IGDILU",
      },
    ],
    projects: [
      {
        title: "CRM Tahminleme",
        summary: "RFM • CLTV • churn • Apriori çapraz satış",
        href: "https://crm.erdikus.me",
      },
    ],
  },
  {
    id: "data-science",
    title: "Veri Analizi & Veri Bilimi",
    teaser: "Python, ML, CRM analytics, tahminleme ve öneri sistemleri.",
    tags: ["Python", "ML", "SQL"],
    detailTitle: "Veri Analizi & Veri Bilimi",
    summary:
      "Python ve SQL kullanarak veri analizi, müşteri analitiği, makine öğrenmesi ve tahminleme problemleri üzerinde çalışıyorum.",
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
        summary: "Machine Learning Recommendation System",
        href: "https://movie.erdikus.me",
      },
      {
        title: "CRM Analytics",
        summary: "RFM • CLTV • BG/NBD • Gamma-Gamma",
        href: "https://crm.erdikus.me",
      },
      {
        title: "Fraud Detection",
        summary: "Classification • Precision/Recall • Imbalanced Data",
      },
      {
        title: "Association Rule Learning",
        summary: "Apriori • Recommendation",
        href: "https://crm.erdikus.me",
      },
    ],
  },
  {
    id: "ai-projects",
    title: "AI & Software Projects",
    teaser: "LLM, AI destekli geliştirme ve otomasyon ile uygulama ve prototipler.",
    tags: ["LLM", "n8n", "AI"],
    detailTitle: "AI & Software Projects",
    summary:
      "LLM, AI destekli geliştirme ve otomasyon araçlarını kullanarak gerçek problemlere yönelik uygulamalar ve prototipler geliştiriyorum.",
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
        title: "CRM Tahminleme",
        summary: "RFM • CLTV • churn • Apriori çapraz satış",
        href: "https://crm.erdikus.me",
      },
      {
        title: "PillTrack",
        summary: "AI-assisted application development • Cursor",
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

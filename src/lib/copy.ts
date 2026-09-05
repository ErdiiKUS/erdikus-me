import type { Locale } from "@/lib/i18n";

export function getCopy(locale: Locale) {
  const en = locale === "en";

  return {
    htmlLang: en ? "en" : "tr",
    metaDescription: en
      ? "Combining e-commerce, software support and testing experience with data science (ML) and AI (LLM) skills to build AI- and data-driven digital solutions."
      : "E-ticaret, yazılım destek ve test deneyimini; veri bilimi (ML) ve AI (LLM) yetkinlikleriyle birleştirerek yapay zekâ ve veri odaklı dijital çözümler geliştiriyor.",
    homeBio: en
      ? "I combine my experience in e-commerce, software support and testing with data science (ML) and AI (LLM) skills to build AI- and data-driven digital solutions, improve technical processes and create operational value."
      : "E-ticaret, yazılım destek ve test deneyimimi; veri bilimi (ML) ve AI (LLM) yetkinliklerimle birleştirerek yapay zekâ ve veri odaklı dijital çözümler geliştiriyor, teknik süreçleri iyileştiriyor ve operasyonel değer oluşturuyorum.",
    nav: {
      experience: en ? "Experience" : "Deneyim",
      projects: en ? "Projects" : "Projeler",
    },
    experienceIntro: en
      ? "I combine professional experience in e-commerce, software support and testing with technical skills I have built in data analytics, data science and artificial intelligence. Across my roles and projects I focus on data-driven solutions and better technical processes using SQL, API integrations, Python, machine learning, LLMs and modern software tools."
      : "E-ticaret, yazılım destek ve test alanlarında edindiğim profesyonel deneyimi; veri analitiği, veri bilimi ve yapay zekâ alanlarında geliştirdiğim teknik yetkinliklerle birleştiriyorum. İş deneyimlerim ve projelerimde SQL, API entegrasyonları, Python, makine öğrenmesi, LLM ve modern yazılım araçlarını kullanarak veri odaklı çözümler üretmeye ve teknik süreçleri iyileştirmeye odaklanıyorum.",
    projectsIntro: en
      ? "I share projects I have built in data analytics, machine learning, artificial intelligence, e-commerce and software development. In every project I focus on analysing a real problem, building a solution with the right technologies and turning the outcome into a measurable, sustainable system."
      : "Veri analitiği, makine öğrenmesi, yapay zekâ, e-ticaret ve yazılım geliştirme alanlarında hazırladığım projeleri burada paylaşıyorum. Her projede gerçek bir problemi analiz etmeye, uygun teknolojileri kullanarak çözüm geliştirmeye ve ortaya çıkan sonucu ölçülebilir, sürdürülebilir bir yapıya dönüştürmeye odaklanıyorum.",
    open: en ? "Open" : "Aç",
    live: en ? "Live" : "Canlı",
    viewDetails: en ? "View details →" : "Detayları Gör →",
    openProject: en ? "Open project" : "Projeyi Aç",
    sections: {
      skills: en ? "Expertise" : "Yetkinlikler",
      technologies: en ? "Technologies" : "Teknolojiler",
      experience: en ? "Professional Experience" : "Profesyonel Deneyim",
      education: en ? "Education" : "Eğitim",
      certificates: en ? "Certificates" : "Sertifikalar",
      projects: en ? "Projects" : "Projeler",
    },
  };
}

export type Copy = ReturnType<typeof getCopy>;

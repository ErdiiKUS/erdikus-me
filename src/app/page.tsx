import { ArrowUpRight, Film, LineChart, Pill, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import { cn } from "cn";

const skills = [
  {
    title: "E-commerce",
    body: "WooCommerce, OpenCart, Shopify, pazaryeri ve performans reklamları. Operasyon, stok, dönüşüm ve otomasyon.",
  },
  {
    title: "IT altyapı",
    body: "Linux, Docker, Nginx, güvenlik ve izleme. Kurumsal sunucu ve ağ tarafında sahada geçmiş.",
  },
  {
    title: "Yazılım destek",
    body: "Hata analizi, log, API, Laravel/PHP, MySQL ve PostgreSQL. Ürünü ayakta tutan süreçler.",
  },
  {
    title: "Proje yönetimi",
    body: "IT, pazarlama, içerik ve lojistik ekiplerini aynı hedefe bağlayan operasyonel liderlik.",
  },
];

const experience = [
  {
    role: "Software Technical Support Specialist",
    company: "DTL IT LLC",
    dates: "Kasım 2022 – Haziran 2025",
    points: [
      "Yeni özellik testleri, kök neden analizi ve geliştirme ekibiyle çözüm süreçleri.",
      "Log, sistem izleme, API ve arka plan servis performansı.",
    ],
    tags: ["Nginx", "Docker", "Linux", "PostgreSQL", "Laravel", "API"],
  },
  {
    role: "E-Commerce Director",
    company: "Elektromarketim",
    dates: "Kasım 2017 – Ekim 2023",
    points: [
      "Çok kanallı satış, kategori/fiyat/stok yeniden yapılanması ve dönüşüm artışı.",
      "Google Ads, Meta Ads, Criteo ve mağaza entegrasyonları.",
    ],
    tags: ["OpenCart", "WooCommerce", "Shopify", "Cloudflare", "Ads"],
  },
  {
    role: "IT Manager",
    company: "Özel Atakent Hospital",
    dates: "Aralık 2016 – Kasım 2017",
    points: [
      "Hastane IT altyapısı, yedekleme, veri güvenliği ve kritik sağlık yazılımları.",
    ],
    tags: ["Oracle SQL", "Active Directory", "Windows Server"],
  },
  {
    role: "IT Support Specialist",
    company: "DNA Call Center",
    dates: "Kasım 2014 – Aralık 2016",
    points: [
      "Çağrı merkezi yazılım/donanım arızaları ve operasyon sürekliliği.",
    ],
    tags: ["Linux", "MySQL", "Fortinet", "VMware"],
  },
  {
    role: "IT Support",
    company: "Özel Atakent Hospital",
    dates: "Mart 2013 – Kasım 2014",
    points: ["Kullanıcı desteği, kurulum ve saha operasyonu."],
    tags: ["User Support"],
  },
];

const projects = [
  {
    title: "SelectYourMovie",
    badge: "Canlı",
    icon: Film,
    description:
      "İçerik, kullanıcı ve hibrit modellerle film öneren Streamlit uygulaması. Portföyde alt proje olarak yayında.",
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
      "Online Retail II üzerinde RFM, CLTV (BG/NBD + Gamma-Gamma), churn ve Apriori çapraz satış. Streamlit ile etkileşimli pano.",
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
      "İlaç hatırlatma uygulaması. App Store’da yayında; web sitesi pilltrack.co.",
    href: "https://apps.apple.com/tr/app/pilltrack-medication-reminder/id6761114352?l=tr",
    secondary: { label: "pilltrack.co", href: "https://pilltrack.co/" },
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-6 sm:py-24">
        <section className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
          <div className="space-y-6">
            <Badge variant="secondary">Antalya · Yalova</Badge>
            <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">
              Erdi Kuş
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              IT altyapısı, e-ticaret operasyonu ve yazılım destek süreçlerinde 10+ yıl.
              Ürünü ayakta tutan sistemleri kurar, ölçer ve ölçeklerim.
            </p>
            <div className="flex flex-wrap gap-2">
              <a className={cn(buttonVariants())} href="#projects">
                Projeler
              </a>
              <a className={cn(buttonVariants({ variant: "outline" }))} href="#contact">
                İletişim
              </a>
              <a
                className={cn(buttonVariants({ variant: "ghost" }))}
                href="https://github.com/ErdiiKUS"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRight />
              </a>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="size-4" />
                Şu an
              </CardTitle>
              <CardDescription>
                Kişisel altyapı: Netcup VPS, Docker, Caddy, GitHub üzerinden yayın.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>erdikus.me — bu site</p>
              <p>movie.erdikus.me — SelectYourMovie</p>
              <p>crm.erdikus.me — CRM panosu</p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-16" />

        <section id="about" className="scroll-mt-24 space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-medium">Hakkımda</h2>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              Kariyerim boyunca kurumsal IT altyapılarını yönettim; dijital ürünlerin
              geliştirilmesi, testi, optimizasyonu ve ölçeklenmesinde sahada durdum.
              E-ticaret operasyonu, reklam yönetimi ve otomasyonla performansa odaklı çalışırım.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <Card key={skill.title}>
                <CardHeader>
                  <CardTitle>{skill.title}</CardTitle>
                  <CardDescription>{skill.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section id="experience" className="scroll-mt-24 space-y-6">
          <h2 className="font-heading text-2xl font-medium">Deneyim</h2>
          <div className="space-y-4">
            {experience.map((job) => (
              <Card key={`${job.company}-${job.role}`}>
                <CardHeader>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <CardTitle>{job.role}</CardTitle>
                    <span className="text-xs text-muted-foreground">{job.dates}</span>
                  </div>
                  <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section id="projects" className="scroll-mt-24 space-y-6">
          <h2 className="font-heading text-2xl font-medium">Projeler</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="size-4" />
                      <Badge variant="secondary">{project.badge}</Badge>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto flex gap-2 border-t-0 bg-transparent">
                    <a
                      className={cn(buttonVariants({ size: "sm" }))}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Aç
                      <ArrowUpRight />
                    </a>
                    <a
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                      href={project.secondary.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.secondary.label}
                    </a>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator className="my-16" />

        <section id="contact" className="scroll-mt-24 space-y-6">
          <h2 className="font-heading text-2xl font-medium">İletişim</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>E-posta</CardTitle>
                <CardDescription>
                  <a className="underline-offset-4 hover:underline" href="mailto:erdii.kuss@gmail.com">
                    erdii.kuss@gmail.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Telefon</CardTitle>
                <CardDescription>
                  <a className="underline-offset-4 hover:underline" href="tel:+905365289360">
                    +90 536 528 93 60
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Konum</CardTitle>
                <CardDescription>Antalya — Yalova, Türkiye</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>GitHub</CardTitle>
                <CardDescription>
                  <a
                    className="underline-offset-4 hover:underline"
                    href="https://github.com/ErdiiKUS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/ErdiiKUS
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 text-xs text-muted-foreground sm:px-6">
          <span>© {new Date().getFullYear()} Erdi Kuş</span>
          <span>erdikus.me</span>
        </div>
      </footer>
    </>
  );
}

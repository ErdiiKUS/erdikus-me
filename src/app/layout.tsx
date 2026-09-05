import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erdikus.me"),
  title: "Erdi Kuş — IT, e-ticaret ve ürün geliştirme",
  description:
    "IT altyapısı, e-ticaret operasyonu ve yazılım destek süreçlerinde 10+ yıl deneyim. Projeler: PillTrack, SelectYourMovie, CRM Tahminleme.",
  openGraph: {
    title: "Erdi Kuş",
    description: "IT, e-ticaret ve ürün geliştirme",
    url: "https://erdikus.me",
    siteName: "erdikus.me",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}

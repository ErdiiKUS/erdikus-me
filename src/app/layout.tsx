import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
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
  title: "Erdi KUŞ",
  description:
    "E-ticaret, yazılım test ve destek deneyimini; veri bilimi (ML) ve AI (LLM) yetkinlikleriyle birleştirerek yapay zekâ ve veri odaklı dijital çözümler geliştiriyor.",
  openGraph: {
    title: "Erdi KUŞ",
    description: "Yapay zekâ ve veri odaklı dijital çözümler",
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-dvh overflow-hidden antialiased`}
    >
      <body className="flex h-dvh overflow-hidden flex-col bg-background font-sans text-foreground">
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

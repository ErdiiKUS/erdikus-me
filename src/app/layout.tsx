import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCopy } from "@/lib/copy";
import { getLocale } from "@/lib/get-locale";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getCopy(locale);

  return {
    metadataBase: new URL("https://erdikus.me"),
    title: "Erdi KUŞ",
    description: copy.metaDescription,
    openGraph: {
      title: "Erdi KUŞ",
      description: copy.metaDescription,
      url: "https://erdikus.me",
      siteName: "erdikus.me",
      locale: locale === "en" ? "en_US" : "tr_TR",
      type: "website",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const copy = getCopy(locale);

  return (
    <html
      lang={copy.htmlLang}
      className={`dark ${geistSans.variable} ${geistMono.variable} h-dvh overflow-hidden antialiased`}
    >
      <body className="relative flex h-dvh flex-col overflow-hidden bg-background font-sans text-foreground">
        <div className="site-atmosphere" aria-hidden />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          <SiteHeader locale={locale} />
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}

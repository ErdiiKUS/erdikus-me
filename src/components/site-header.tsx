"use client";

import { usePathname } from "next/navigation";
import { HomeLink } from "@/components/home-link";
import { LanguageSwitch } from "@/components/language-switch";
import { PageWidth } from "@/components/page-width";
import type { Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const showHomeLink = pathname !== "/";

  return (
    <header className="shrink-0 pt-4 pb-2">
      <PageWidth className="flex items-center justify-between gap-3">
        {showHomeLink ? <HomeLink /> : <span />}
        <LanguageSwitch locale={locale} />
      </PageWidth>
    </header>
  );
}

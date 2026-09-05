"use client";

import { usePathname } from "next/navigation";
import { HomeLink } from "@/components/home-link";
import { LanguageSwitch } from "@/components/language-switch";
import type { Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const showHomeLink = pathname !== "/";

  return (
    <header className="relative mx-auto w-[70%] pt-4">
      <div className="flex justify-center">
        {showHomeLink ? <HomeLink /> : <span className="h-8" />}
      </div>
      <div className="absolute top-4 right-0">
        <LanguageSwitch locale={locale} />
      </div>
    </header>
  );
}

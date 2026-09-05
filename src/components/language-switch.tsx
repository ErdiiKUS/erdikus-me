"use client";

import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { cn } from "cn";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const router = useRouter();

  async function setLocale(next: Locale) {
    if (next === locale) {
      return;
    }
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: next }),
    });
    router.refresh();
  }

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {(["tr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => void setLocale(code)}
          className={cn(
            buttonVariants({
              variant: locale === code ? "default" : "outline",
              size: "sm",
            }),
            "min-w-10 px-2",
          )}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

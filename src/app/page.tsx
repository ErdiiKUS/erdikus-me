import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { PageWidth } from "@/components/page-width";
import { getCopy } from "@/lib/copy";
import { getLocale } from "@/lib/get-locale";
import { cn } from "cn";

export default async function Home() {
  const locale = await getLocale();
  const copy = getCopy(locale);

  const actions = [
    { label: copy.nav.experience, href: "/deneyim", external: false },
    { label: copy.nav.projects, href: "/projeler", external: false },
    { label: "GitHub", href: "https://github.com/ErdiiKUS", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/erdi-kus/", external: true },
    { label: "Medium", href: "https://medium.com/@erdii.kuss", external: true },
  ];

  return (
    <main className="flex min-h-full flex-1 flex-col justify-center py-6">
      <PageWidth className="flex flex-col gap-8">
        <div className="w-full space-y-4 text-left sm:space-y-5">
          <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Erdi KUŞ
          </h1>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7 md:text-lg md:leading-8">
            {copy.homeBio}
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-2.5 sm:justify-end">
          {actions.map((action) =>
            action.external ? (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                {action.label}
                <ArrowUpRight />
              </a>
            ) : (
              <Link
                key={action.label}
                href={action.href}
                className={cn(
                  buttonVariants({
                    variant: action.href === "/deneyim" ? "default" : "outline",
                    size: "lg",
                  }),
                )}
              >
                {action.label}
              </Link>
            ),
          )}
        </div>
      </PageWidth>
    </main>
  );
}

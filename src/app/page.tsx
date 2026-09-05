import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
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
    <main className="flex min-h-0 flex-1 items-center overflow-hidden">
      <div className="mx-auto flex w-[70%] flex-col gap-8">
        <div className="w-full space-y-5 text-left">
          <h1 className="font-heading text-5xl font-medium tracking-tight sm:text-6xl">
            Erdi KUŞ
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {copy.homeBio}
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-2.5">
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
      </div>
    </main>
  );
}

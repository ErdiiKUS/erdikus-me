import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const actions = [
  { label: "Deneyim", href: "/deneyim", external: false },
  { label: "Projeler", href: "/projeler", external: false },
  { label: "GitHub", href: "https://github.com/ErdiiKUS", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/erdi-kus/", external: true },
  { label: "Medium", href: "https://medium.com/@erdii.kuss", external: true },
];

export default function Home() {
  return (
    <main className="flex h-dvh items-center justify-center overflow-hidden px-6">
      <div className="flex w-full max-w-xl flex-col gap-6">
        <div className="space-y-3">
          <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">
            Erdi KUŞ
          </h1>
          <p className="text-sm leading-6 text-muted-foreground sm:text-[0.925rem] sm:leading-7">
            E-ticaret, yazılım test ve destek deneyimimi; veri bilimi (ML) ve AI (LLM)
            yetkinliklerimle birleştirerek yapay zekâ ve veri odaklı dijital çözümler
            geliştiriyor, teknik süreçleri iyileştiriyor ve operasyonel değer oluşturuyorum.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {actions.map((action) =>
            action.external ? (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {action.label}
                <ArrowUpRight />
              </a>
            ) : (
              <Link
                key={action.label}
                href={action.href}
                className={cn(buttonVariants({ variant: action.label === "Deneyim" ? "default" : "outline" }))}
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

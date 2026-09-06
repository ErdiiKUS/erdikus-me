import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageWidth } from "@/components/page-width";
import { getCopy } from "@/lib/copy";
import { getLocale } from "@/lib/get-locale";
import { getProjects } from "@/lib/projects";
import { cn } from "cn";

export default async function ProjelerPage() {
  const locale = await getLocale();
  const copy = getCopy(locale);
  const projects = getProjects(locale);

  return (
    <main className="flex min-h-full flex-col justify-start py-6 lg:justify-center">
      <PageWidth className="flex flex-col gap-6 sm:gap-8">
        <div className="w-full space-y-4 text-left sm:space-y-5">
          <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            {copy.nav.projects}
          </h1>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7 md:text-lg md:leading-8">
            {copy.projectsIntro}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} size="sm" className="justify-between text-center">
                <CardHeader className="items-center">
                  <div className="flex w-full items-center justify-between">
                    <Icon className="size-4" />
                    <Badge variant="secondary">
                      {project.badgeKey === "live" ? copy.live : "App Store"}
                    </Badge>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center gap-2 border-t-0 bg-transparent">
                  <a
                    className={cn(buttonVariants({ size: "sm" }))}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.open}
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
      </PageWidth>
    </main>
  );
}

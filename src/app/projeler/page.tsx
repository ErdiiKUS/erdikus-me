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
import { getCopy } from "@/lib/copy";
import { getLocale } from "@/lib/get-locale";
import { getProjects } from "@/lib/projects";
import { cn } from "cn";

export default async function ProjelerPage() {
  const locale = await getLocale();
  const copy = getCopy(locale);
  const projects = getProjects(locale);

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="mx-auto flex min-h-0 w-[70%] flex-1 flex-col justify-center gap-8 overflow-hidden py-3">
        <div className="w-full space-y-5 text-left">
          <h1 className="font-heading text-5xl font-medium tracking-tight sm:text-6xl">
            {copy.nav.projects}
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
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
      </div>
    </main>
  );
}

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
import { HomeLink } from "@/components/home-link";
import { projects } from "@/lib/projects";
import { cn } from "cn";

export default function ProjelerPage() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden px-6 py-5">
      <div className="mx-auto flex h-full w-full max-w-5xl min-h-0 flex-col gap-5">
        <HomeLink />
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} size="sm" className="h-full justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className="size-4" />
                    <Badge variant="secondary">{project.badge}</Badge>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="gap-2 border-t-0 bg-transparent">
                  <a
                    className={cn(buttonVariants({ size: "sm" }))}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Aç
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

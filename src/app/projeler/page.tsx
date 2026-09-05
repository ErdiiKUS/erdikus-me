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
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="mx-auto flex w-[70%] justify-center pt-5">
        <HomeLink />
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <div className="mx-auto flex w-[70%] flex-col gap-5">
          <h1 className="font-heading text-left text-3xl font-medium tracking-tight sm:text-4xl">
            Projeler
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} size="sm" className="justify-between text-center">
                <CardHeader className="items-center">
                  <div className="flex w-full items-center justify-between">
                    <Icon className="size-4" />
                    <Badge variant="secondary">{project.badge}</Badge>
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
      </div>
    </main>
  );
}

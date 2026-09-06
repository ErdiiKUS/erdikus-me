"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ExperienceArea } from "@/lib/experience";
import type { Copy } from "@/lib/copy";
import { cn } from "cn";

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <p className="font-heading text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {index} — {label}
      </p>
      <span className="h-px flex-1 bg-foreground/10" />
    </div>
  );
}

function AreaDetail({
  area,
  labels,
}: {
  area: ExperienceArea;
  labels: Copy["sections"] & { viewDetails: string; openProject: string };
}) {
  let section = 1;
  const index = () => String(section++).padStart(2, "0");

  return (
    <div className="space-y-7">
      <section>
        <SectionLabel index={index()} label={labels.skills} />
        <div className="flex flex-wrap gap-1.5">
          {area.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel index={index()} label={labels.technologies} />
        <div className="flex flex-wrap gap-1.5">
          {area.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {area.roles?.length ? (
        <section>
          <SectionLabel index={index()} label={labels.experience} />
          <div className="grid gap-3">
            {area.roles.map((role) => (
              <div
                key={`${role.company}-${role.title}`}
                className="rounded-xl p-4 ring-1 ring-foreground/10"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-heading font-medium">{role.company}</p>
                  <p className="text-xs text-muted-foreground">{role.dates}</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{role.title}</p>
                {role.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : null}
                {role.points?.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {area.education?.length ? (
        <section>
          <SectionLabel index={index()} label={labels.education} />
          <ul className="grid gap-2 sm:grid-cols-2">
            {area.education.map((item) => (
              <li key={item.title}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm ring-1 ring-foreground/10 transition-colors hover:bg-muted/50"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground" />
                  </a>
                ) : (
                  <span className="block px-3 py-2 text-sm">{item.title}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {area.certificates?.length ? (
        <section>
          <SectionLabel index={index()} label={labels.certificates} />
          <ul className="grid gap-2 sm:grid-cols-2">
            {area.certificates.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm ring-1 ring-foreground/10 transition-colors hover:bg-muted/50"
                >
                  <span>{item.title}</span>
                  <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {area.projects?.length ? (
        <section>
          <SectionLabel index={index()} label={labels.projects} />
          <div className="grid gap-3 sm:grid-cols-2">
            {area.projects.map((project) => (
              <Card key={project.title} size="sm" className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.summary}</CardDescription>
                </CardHeader>
                {project.href ? (
                  <CardFooter className="border-t-0 bg-transparent">
                    <a
                      className={cn(buttonVariants({ size: "sm" }))}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {labels.openProject}
                      <ArrowUpRight />
                    </a>
                  </CardFooter>
                ) : null}
              </Card>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export function ExperienceBoard({
  areas,
  labels,
}: {
  areas: ExperienceArea[];
  labels: Copy["sections"] & { viewDetails: string; openProject: string };
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = areas.find((area) => area.id === activeId) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {areas.map((area) => (
          <Card
            key={area.id}
            size="sm"
            role="button"
            tabIndex={0}
            onClick={() => setActiveId(area.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveId(area.id);
              }
            }}
            className="h-full min-h-0 cursor-pointer text-left transition-colors hover:bg-muted/40"
          >
            <CardHeader>
              <CardTitle className="text-base leading-snug">{area.title}</CardTitle>
              <CardDescription className="leading-5">{area.teaser}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-row flex-wrap items-start gap-1">
              {area.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="border-t-0 bg-transparent">
              <span className="text-xs text-muted-foreground">{labels.viewDetails}</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent className="flex max-h-[90dvh] w-[min(48rem,calc(100%-1rem))] max-w-none flex-col gap-0 overflow-hidden bg-background p-0 shadow-2xl sm:max-h-[min(85dvh,44rem)] sm:max-w-3xl">
          {active ? (
            <>
              <DialogHeader className="shrink-0 border-b px-4 py-4 pr-12 text-left sm:px-6 sm:py-5">
                <DialogTitle className="text-xl leading-tight">
                  {active.detailTitle}
                </DialogTitle>
                <DialogDescription className="text-sm leading-6">
                  {active.summary}
                </DialogDescription>
              </DialogHeader>
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-5">
                <AreaDetail area={active} labels={labels} />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

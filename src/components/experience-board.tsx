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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { experienceAreas, type ExperienceArea } from "@/lib/experience";
import { cn } from "cn";

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="mb-3 font-heading text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
      {index} — {label}
    </p>
  );
}

function AreaDetail({ area }: { area: ExperienceArea }) {
  let section = 1;
  const index = () => String(section++).padStart(2, "0");

  return (
    <div className="space-y-8 pb-8">
      <section>
        <SectionLabel index={index()} label="Yetkinlikler" />
        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {area.skills.map((skill) => (
            <li key={skill} className="text-sm text-muted-foreground">
              ○ {skill}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionLabel index={index()} label="Teknolojiler" />
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
          <SectionLabel index={index()} label="Profesyonel Deneyim" />
          <div className="space-y-5">
            {area.roles.map((role) => (
              <div key={`${role.company}-${role.title}`} className="space-y-2">
                <p className="font-heading font-medium">{role.company}</p>
                <p className="text-sm text-muted-foreground">{role.title}</p>
                <p className="text-sm text-muted-foreground">{role.dates}</p>
                {role.tags?.length ? (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : null}
                {role.points?.length ? (
                  <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
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
          <SectionLabel index={index()} label="Eğitim" />
          <ul className="space-y-2">
            {area.education.map((item) => (
              <li key={item.title} className="text-sm">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:underline"
                  >
                    {item.title}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {area.certificates?.length ? (
        <section>
          <SectionLabel index={index()} label="Sertifikalar" />
          <ul className="space-y-2">
            {area.certificates.map((item) => (
              <li key={item.href} className="text-sm">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:underline"
                >
                  {item.title}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {area.projects?.length ? (
        <section>
          <SectionLabel index={index()} label="Projeler" />
          <div className="grid gap-3">
            {area.projects.map((project) => (
              <Card key={project.title} size="sm">
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
                      View Project
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

export function ExperienceBoard() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = experienceAreas.find((area) => area.id === activeId) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        {experienceAreas.map((area) => (
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
            <CardContent className="flex flex-1 flex-col items-start gap-1">
              {area.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="border-t-0 bg-transparent">
              <span className="text-xs text-muted-foreground">Detayları Gör →</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Sheet open={Boolean(active)} onOpenChange={(open) => !open && setActiveId(null)}>
        <SheetContent
          side="right"
          className="w-full gap-0 overflow-y-auto data-[side=right]:sm:max-w-2xl"
        >
          {active ? (
            <>
              <SheetHeader className="border-b pb-4">
                <SheetTitle className="text-xl">{active.detailTitle}</SheetTitle>
                <SheetDescription className="text-sm leading-6">
                  {active.summary}
                </SheetDescription>
              </SheetHeader>
              <div className="px-4">
                <AreaDetail area={active} />
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
}

import { HomeLink } from "@/components/home-link";
import { ExperienceBoard } from "@/components/experience-board";
import { experienceIntro } from "@/lib/experience";

export default function DeneyimPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="mx-auto flex w-[70%] justify-center pt-4">
        <HomeLink />
      </div>
      <div className="mx-auto flex min-h-0 w-[70%] flex-1 flex-col justify-center gap-5 overflow-hidden py-3">
        <div className="space-y-2 text-left">
          <p className="font-heading text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Experience & Expertise
          </p>
          <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            Deneyim
          </h1>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-[0.95rem] sm:leading-7">
            {experienceIntro}
          </p>
        </div>
        <ExperienceBoard />
      </div>
    </main>
  );
}

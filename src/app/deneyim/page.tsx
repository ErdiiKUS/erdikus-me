import { HomeLink } from "@/components/home-link";
import { ExperienceBoard } from "@/components/experience-board";
import { experienceIntro } from "@/lib/experience";

export default function DeneyimPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="mx-auto flex w-[70%] justify-center pt-4">
        <HomeLink />
      </div>
      <div className="mx-auto flex min-h-0 w-[70%] flex-1 flex-col justify-center gap-8 overflow-hidden py-3">
        <div className="w-full space-y-5 text-left">
          <h1 className="font-heading text-5xl font-medium tracking-tight sm:text-6xl">
            Deneyim
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {experienceIntro}
          </p>
        </div>
        <ExperienceBoard />
      </div>
    </main>
  );
}

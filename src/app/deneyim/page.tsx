import { ExperienceBoard } from "@/components/experience-board";
import { getCopy } from "@/lib/copy";
import { getExperienceAreas } from "@/lib/experience";
import { getLocale } from "@/lib/get-locale";

export default async function DeneyimPage() {
  const locale = await getLocale();
  const copy = getCopy(locale);

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="mx-auto flex min-h-0 w-[70%] flex-1 flex-col justify-center gap-8 overflow-hidden py-3">
        <div className="w-full space-y-5 text-left">
          <h1 className="font-heading text-5xl font-medium tracking-tight sm:text-6xl">
            {copy.nav.experience}
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {copy.experienceIntro}
          </p>
        </div>
        <ExperienceBoard
          areas={getExperienceAreas(locale)}
          labels={{
            ...copy.sections,
            viewDetails: copy.viewDetails,
            openProject: copy.openProject,
          }}
        />
      </div>
    </main>
  );
}

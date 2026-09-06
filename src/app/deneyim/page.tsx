import { ExperienceBoard } from "@/components/experience-board";
import { PageWidth } from "@/components/page-width";
import { getCopy } from "@/lib/copy";
import { getExperienceAreas } from "@/lib/experience";
import { getLocale } from "@/lib/get-locale";

export default async function DeneyimPage() {
  const locale = await getLocale();
  const copy = getCopy(locale);

  return (
    <main className="flex min-h-full flex-1 flex-col justify-center py-6">
      <PageWidth className="flex flex-col gap-6 sm:gap-8">
        <div className="w-full space-y-4 text-left sm:space-y-5">
          <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            {copy.nav.experience}
          </h1>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-7 md:text-lg md:leading-8">
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
      </PageWidth>
    </main>
  );
}

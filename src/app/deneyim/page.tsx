import { HomeLink } from "@/components/home-link";

export default function DeneyimPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden px-8 py-5 sm:px-12">
      <div className="mx-auto flex h-full w-full max-w-4xl min-h-0 flex-col gap-5">
        <HomeLink />
        <div className="flex flex-1 flex-col justify-center gap-3">
          <h1 className="font-heading text-3xl font-medium tracking-tight">Deneyim</h1>
          <p className="text-sm leading-6 text-muted-foreground">
            Bu sayfanın içeriği bir sonraki adımda detaylandırılacak.
          </p>
        </div>
      </div>
    </main>
  );
}

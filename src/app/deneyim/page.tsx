import { HomeLink } from "@/components/home-link";

export default function DeneyimPage() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden px-6 py-5">
      <div className="mx-auto flex h-full w-full max-w-xl min-h-0 flex-col gap-5">
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

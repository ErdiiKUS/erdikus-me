import { HomeLink } from "@/components/home-link";

export default function DeneyimPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="mx-auto flex w-[70%] justify-center pt-5">
        <HomeLink />
      </div>
      <div className="mx-auto flex w-[70%] flex-1 flex-col items-center justify-center gap-3 text-center">
        <h1 className="font-heading text-3xl font-medium tracking-tight">Deneyim</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          Bu sayfanın içeriği bir sonraki adımda detaylandırılacak.
        </p>
      </div>
    </main>
  );
}

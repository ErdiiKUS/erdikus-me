import { PageWidth } from "@/components/page-width";

export function SiteFooter() {
  return (
    <footer className="shrink-0 py-4">
      <PageWidth>
        <p className="text-right text-xs text-muted-foreground">
          erdikus.me · {new Date().getFullYear()}
        </p>
      </PageWidth>
    </footer>
  );
}

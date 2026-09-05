export function SiteFooter() {
  return (
    <footer className="shrink-0 px-8 py-4 text-left sm:px-12">
      <p className="text-xs text-muted-foreground">
        erdikus.me · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

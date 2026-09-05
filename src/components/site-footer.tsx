export function SiteFooter() {
  return (
    <footer className="shrink-0 px-8 py-4 sm:px-12">
      <p className="mx-auto w-full max-w-4xl text-xs text-muted-foreground">
        erdikus.me · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

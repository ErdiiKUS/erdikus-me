export function SiteFooter() {
  return (
    <footer className="shrink-0 py-4">
      <p className="mx-auto w-[70%] text-right text-xs text-muted-foreground">
        erdikus.me · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

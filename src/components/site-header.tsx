"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "Hakkımda" },
  { href: "#experience", label: "Deneyim" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-heading text-sm font-medium tracking-tight">
          Erdi Kuş
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" nativeButton={false} render={<a href={link.href} />}>
              {link.label}
            </Button>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" size="icon-sm" className="md:hidden" />}>
            <Menu />
            <span className="sr-only">Menü</span>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menü</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start"
                  nativeButton={false}
                  render={<a href={link.href} />}
                >
                  {link.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export function HomeLink() {
  return (
    <Link href="/" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
      Erdi KUŞ
    </Link>
  );
}

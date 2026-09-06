import * as React from "react";
import { cn } from "cn";

export function PageWidth({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 md:w-[70%] md:max-w-none md:px-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

import { ReactNode } from "react";

import { cn } from "../components/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
        <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center  px-6 py-2 text-sm font-medium transition-shadow duration-500 ease-out [--bg-size:400%] ",
        className,
      )}
    >
      {children}
    </div>
  );
}

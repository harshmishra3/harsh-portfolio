import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 flex flex-col gap-4", className)}>
      <span className="mono-label flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {label}
      </span>
      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-fog">
          {description}
        </p>
      )}
    </div>
  );
}
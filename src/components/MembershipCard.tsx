"use client";

import { cn } from "@/lib/utils";

interface MembershipCardProps {
  className?: string;
  name?: string;
}

/** Crisp CSS membership card — sharper than the soft source PNG. */
export function MembershipCard({
  className,
  name = "Your Name",
}: MembershipCardProps) {
  return (
    <div
      className={cn(
        "relative w-full aspect-[1.586/1] rounded-[1.35rem] overflow-hidden",
        "shadow-[0_30px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(109,221,235,0.22)]",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(125deg, #c4f6fc 0%, #7ee8f2 26%, #4fc8d8 55%, #8aedf5 78%, #5fd4e4 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, transparent 28%, rgba(255,255,255,0.65) 40%, rgba(255,255,255,0.18) 46%, transparent 58%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 6px rgba(0,70,90,0.12), inset 1px 0 0 rgba(255,255,255,0.28)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7 md:p-8">
        <p className="text-[1.05rem] sm:text-lg md:text-xl font-semibold tracking-tight text-[#0a1a22]">
          {name}
        </p>

        <div className="flex justify-end">
          <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight leading-none">
            <span className="text-[#0a1a22]">On</span>
            <span className="text-[#02a8c2]">Q</span>
          </p>
        </div>
      </div>
    </div>
  );
}

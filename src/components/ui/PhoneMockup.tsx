import { cn } from "@/lib/utils";

export type ScreenType =
  | "discover"
  | "tickets"
  | "vip"
  | "membership"
  | "entry"
  | "rewards"
  | "splash";

const screenImages: Record<
  ScreenType,
  { src: string; alt: string }
> = {
  discover: {
    src: "/screenshots/home.png",
    alt: "OnQ app home screen showing featured venues in New York",
  },
  tickets: {
    src: "/screenshots/ticketing.png",
    alt: "OnQ app event ticketing screen with VIP booth selection",
  },
  vip: {
    src: "/screenshots/events.png",
    alt: "OnQ app events screen with VIP access",
  },
  membership: {
    src: "/screenshots/access-pass.png",
    alt: "OnQ VIP member access pass for Onyx Skybar",
  },
  entry: {
    src: "/screenshots/access-pass.png",
    alt: "OnQ access pass with QR code for instant venue entry",
  },
  rewards: {
    src: "/screenshots/home.png",
    alt: "OnQ app featuring promotions and member perks",
  },
  splash: {
    src: "/screenshots/splash.png",
    alt: "OnQ app splash screen — VIP Nightlife, Access the Night",
  },
};

const sizes = {
  sm: "w-[150px]",
  md: "w-[200px]",
  lg: "w-[260px]",
};

interface PhoneMockupProps {
  screen: ScreenType;
  size?: "sm" | "md" | "lg";
  className?: string;
  eager?: boolean;
  glow?: boolean;
}

export function PhoneMockup({
  screen,
  size = "md",
  className,
  eager = false,
  glow = false,
}: PhoneMockupProps) {
  const { src, alt } = screenImages[screen];

  return (
    <div
      className={cn(
        "relative transition-transform duration-500",
        glow
          ? "drop-shadow-[0_0_40px_rgba(126,226,240,0.25),0_30px_60px_rgba(0,0,0,0.6)]"
          : "drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]",
        sizes[size],
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={390}
        height={844}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-auto rounded-[2rem]"
      />
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
    </div>
  );
}

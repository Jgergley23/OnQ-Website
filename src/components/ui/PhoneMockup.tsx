"use client";

import { cn } from "@/lib/utils";

export type ScreenType =
  | "discover"
  | "tickets"
  | "vip"
  | "membership"
  | "entry"
  | "rewards"
  | "splash";

const screenImages: Record<ScreenType, { src: string; alt: string }> = {
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
  xl: "w-[300px]",
};

interface PhoneMockupProps {
  screen: ScreenType;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  eager?: boolean;
  glow?: boolean;
  /** Extra 3D tilt — default angled presentation */
  tilted?: boolean;
}

export function PhoneMockup({
  screen,
  size = "md",
  className,
  eager = false,
  glow = false,
  tilted = true,
}: PhoneMockupProps) {
  const { src, alt } = screenImages[screen];

  return (
    <div
      className={cn(
        "relative transition-transform duration-500",
        sizes[size],
        className
      )}
      style={{ perspective: "1400px" }}
    >
      <div
        className={cn(
          "relative phone-3d",
          tilted && "phone-3d-tilted",
          glow && "phone-3d-glow"
        )}
      >
        {/* Depth / floor shadow */}
        <div className="phone-3d-shadow" aria-hidden="true" />

        {/* Device body */}
        <div className="phone-3d-body">
          {/* Side thickness edge */}
          <div className="phone-3d-edge" aria-hidden="true" />

          {/* Outer bezel */}
          <div className="phone-3d-bezel">
            {/* Dynamic Island */}
            <div className="phone-3d-island" aria-hidden="true" />

            {/* Screen */}
            <div className="phone-3d-screen">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                width={390}
                height={844}
                loading={eager ? "eager" : "lazy"}
                decoding="async"
                className="block w-full h-auto"
              />
              {/* Glass specular */}
              <div className="phone-3d-glass" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

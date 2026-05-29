"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-black hover:bg-accent/90 neon-glow hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "glass text-white hover:bg-white/10 border border-white/20 hover:border-accent/50",
    ghost: "text-muted hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as HTMLMotionProps<"a">)}
      >
        {children}
      </motion.a>
    );
  }

  const motionProps = props as HTMLMotionProps<"button">;

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}

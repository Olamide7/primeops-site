"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type AnimatedButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = ""
}: AnimatedButtonProps) {
  const classes =
    variant === "primary"
      ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan px-5 py-3 text-sm font-bold text-ink shadow-glow transition-colors hover:bg-acid"
      : "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan/70 hover:bg-cyan/10";

  const motionProps = {
    whileHover: { scale: 1.035, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 420, damping: 26 }
  };

  if (href) {
    const external = href.startsWith("http");
    return (
      <motion.span {...motionProps} className={`inline-flex ${className}`}>
        <Link className={classes} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
          {children}
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} className={`${classes} ${className}`}>
      {children}
      <ArrowRight aria-hidden="true" size={16} />
    </motion.button>
  );
}

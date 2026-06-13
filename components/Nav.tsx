"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { AnimatedButton } from "./AnimatedButton";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = navItems.map((item) => {
    const active = pathname === item.href || (item.href === "/blog" && pathname.startsWith("/blog"));
    return (
      <motion.div key={item.href} whileHover={{ y: -1, scale: 1.04 }} whileTap={{ scale: 0.96 }}>
        <Link
          href={item.href}
          onClick={() => setOpen(false)}
          className={`text-sm transition-colors ${active ? "text-cyan" : "text-mist hover:text-white"}`}
        >
          {item.label}
        </Link>
      </motion.div>
    );
  });

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/images/logo.webp" alt="PrimeOps" width={142} height={36} priority className="h-9 w-auto" />
          </Link>
        </motion.div>
        <div className="hidden items-center gap-7 lg:flex">
          {links}
          <AnimatedButton href="/audit">Free Audit</AnimatedButton>
        </div>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            {links}
            <AnimatedButton href="/audit" className="w-full">Free Audit</AnimatedButton>
          </div>
        </motion.div>
      )}
    </header>
  );
}

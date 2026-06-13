"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";
import { stats } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">
            B2B Technical Growth Agency
          </motion.p>
          <motion.h1 variants={item} className="mt-5 max-w-4xl text-5xl font-black leading-[0.96] text-white md:text-7xl lg:text-8xl">
            Scale. Automate. <span className="text-cyan">Engineer Growth.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            PrimeOps builds the digital infrastructure ambitious companies need to turn demand into booked calls, clean workflows, and measurable operational advantage.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AnimatedButton href="/audit">Book Your Free Audit</AnimatedButton>
            <AnimatedButton href="/services" variant="ghost">Explore Services</AnimatedButton>
          </motion.div>
          <motion.div variants={item} className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-mist">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="rounded-md border border-cyan/25 bg-black/60 p-4 shadow-glow">
            <div className="rounded-md border border-white/10 bg-panel p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Ops Console</p>
                  <p className="mt-1 text-sm text-mist">Live lead routing</p>
                </div>
                <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">Online</span>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  ["Inbound call answered", "AI receptionist qualified the prospect in 71 seconds."],
                  ["Sales handoff created", "Summary, budget, and next step pushed to CRM."],
                  ["WhatsApp follow-up sent", "Booking link delivered with context-aware message."]
                ].map(([title, body], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.16 }}
                    className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-mist">{body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

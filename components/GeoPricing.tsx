"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { pricing, type Region } from "@/lib/content";
import { AnimatedButton } from "./AnimatedButton";

export function GeoPricing() {
  const [region, setRegion] = useState<Region>("intl");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = window.sessionStorage.getItem("primeops-region") as Region | null;
    if (saved === "ng" || saved === "intl") {
      setRegion(saved);
      setLoading(false);
      return;
    }

    fetch("/api/geo")
      .then((res) => res.json())
      .then((data: { region?: Region }) => {
        const next = data.region === "ng" ? "ng" : "intl";
        setRegion(next);
        window.sessionStorage.setItem("primeops-region", next);
      })
      .catch(() => setRegion("intl"))
      .finally(() => setLoading(false));
  }, []);

  const toggle = (next: Region) => {
    setRegion(next);
    window.sessionStorage.setItem("primeops-region", next);
  };

  return (
    <div>
      <div className="mx-auto flex max-w-md rounded-md border border-white/10 bg-black p-1">
        {[
          { id: "ng" as Region, label: "Nigeria SME", detail: "₦" },
          { id: "intl" as Region, label: "International", detail: "$" }
        ].map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => toggle(option.id)}
            className={`relative min-h-12 flex-1 rounded px-3 text-sm font-semibold transition-colors ${region === option.id ? "text-ink" : "text-mist hover:text-white"}`}
          >
            {region === option.id && <motion.span layoutId="pricing-pill" className="absolute inset-0 rounded bg-cyan" />}
            <span className="relative">{option.label} <span className="font-mono">{option.detail}</span></span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={region}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.28 }}
          className="mt-10 grid gap-5 lg:grid-cols-3"
        >
          {pricing[region].map((plan) => (
            <motion.article
              key={plan.name}
              whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(34,211,238,0.72)" }}
              whileTap={{ scale: 0.99 }}
              className="rounded-md border border-white/10 bg-panel p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">{plan.currency}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{plan.description}</p>
              <p className="mt-6 text-4xl font-black text-white">{loading ? "..." : plan.price}</p>
              <div className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <span key={feature} className="flex items-center gap-2 text-sm text-white/85">
                    <Check size={16} className="text-cyan" /> {feature}
                  </span>
                ))}
              </div>
              <AnimatedButton href="/audit" className="mt-7 w-full">{plan.cta}</AnimatedButton>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

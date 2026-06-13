"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-md border border-white/10 bg-panel">
      {faqs.map((faq, index) => (
        <div key={faq.question}>
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.035)" }}
            whileTap={{ scale: 0.995 }}
            onClick={() => setActive(active === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left"
          >
            <span className="font-semibold text-white">{faq.question}</span>
            <motion.span animate={{ rotate: active === index ? 45 : 0 }} className="text-cyan">
              <Plus size={20} />
            </motion.span>
          </motion.button>
          <AnimatePresence initial={false}>
            {active === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.24 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-6 text-mist">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

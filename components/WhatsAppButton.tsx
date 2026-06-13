"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/message/2NMBN3NUSGMJE1."
      target="_blank"
      rel="noreferrer"
      aria-label="Contact PrimeOps on WhatsApp"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-ink shadow-glow"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

const initial = {
  source: "contact",
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceInterest: "",
  bottleneck: "",
  budgetRange: "",
  market: "intl",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = (field: keyof typeof initial, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() })
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} className="rounded-md border border-white/10 bg-panel p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" className="field" />
        <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Work email" className="field" />
        <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Phone or WhatsApp" className="field" />
        <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company" className="field" />
      </div>
      <select value={form.serviceInterest} onChange={(e) => update("serviceInterest", e.target.value)} className="field mt-4">
        <option value="">Service interest</option>
        <option>Technical Growth System</option>
        <option>AI Receptionist</option>
        <option>Workflow Automation</option>
        <option>Infrastructure Audit</option>
      </select>
      <textarea required value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="What should we help you engineer?" rows={5} className="field mt-4" />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <AnimatedButton type="submit">{status === "submitting" ? "Sending..." : "Send Message"}</AnimatedButton>
        {status === "success" && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-cyan">Message sent. We will respond within 24 hours.</motion.p>}
        {status === "error" && <p className="text-sm text-red-300">Something failed. Please try WhatsApp if urgent.</p>}
      </div>
    </form>
  );
}

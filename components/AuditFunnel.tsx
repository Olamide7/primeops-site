"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

const initial = {
  source: "audit",
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

const steps = [
  {
    id: "foundation",
    eyebrow: "Step 1",
    title: "Who are we auditing?",
    fields: ["name", "email", "phone", "company"]
  },
  {
    id: "bottleneck",
    eyebrow: "Step 2",
    title: "Where is growth leaking?",
    fields: ["bottleneck", "serviceInterest"]
  },
  {
    id: "commercials",
    eyebrow: "Step 3",
    title: "What market and budget should we model?",
    fields: ["market", "budgetRange"]
  },
  {
    id: "booking",
    eyebrow: "Step 4",
    title: "What should happen after the audit?",
    fields: ["message"]
  }
] satisfies Array<{ id: string; eyebrow: string; title: string; fields: Array<keyof typeof initial> }>;

export function AuditFunnel() {
  const [form, setForm] = useState(initial);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;
  const hasField = (field: keyof typeof initial) => current.fields.some((item) => item === field);

  const update = (field: keyof typeof initial, value: string) => setForm((data) => ({ ...data, [field]: value }));

  const next = () => {
    setDirection(1);
    setStep((value) => Math.min(value + 1, steps.length - 1));
  };

  const back = () => {
    setDirection(-1);
    setStep((value) => Math.max(value - 1, 0));
  };

  const submit = async () => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() })
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-3xl rounded-md border border-cyan/30 bg-cyan/10 p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Audit queued</p>
        <h2 className="mt-4 text-3xl font-black text-white">Your operational audit request is in.</h2>
        <p className="mt-4 text-mist">PrimeOps will review your bottleneck signals and respond with the next best booking path.</p>
        <AnimatedButton href="/contact" className="mt-8">Contact PrimeOps</AnimatedButton>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl rounded-md border border-white/10 bg-panel p-5 md:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-mist">
          <span>{current.eyebrow}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-cyan" animate={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="relative min-h-[390px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">{current.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">{current.title}</h2>
            <div className="mt-8 grid gap-4">
              {hasField("name") && <input required className="field" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />}
              {hasField("email") && <input required type="email" className="field" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Work email" />}
              {hasField("phone") && <input className="field" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Phone or WhatsApp" />}
              {hasField("company") && <input className="field" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name" />}
              {hasField("bottleneck") && (
                <textarea required className="field" rows={5} value={form.bottleneck} onChange={(e) => update("bottleneck", e.target.value)} placeholder="Describe the operational bottleneck: missed calls, slow follow-up, manual reporting, poor conversion, disconnected tools..." />
              )}
              {hasField("serviceInterest") && (
                <select required className="field" value={form.serviceInterest} onChange={(e) => update("serviceInterest", e.target.value)}>
                  <option value="">Primary service interest</option>
                  <option>Website and conversion system</option>
                  <option>AI receptionist and lead routing</option>
                  <option>Workflow automation</option>
                  <option>Full technical growth system</option>
                </select>
              )}
              {hasField("market") && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["ng", "Local Market", "Nigerian SME package in Naira"],
                    ["intl", "International", "Premium infrastructure package in USD"]
                  ].map(([value, label, detail]) => (
                    <motion.button
                      key={value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => update("market", value)}
                      className={`rounded-md border p-5 text-left ${form.market === value ? "border-cyan bg-cyan/10" : "border-white/10 bg-black/20"}`}
                    >
                      <span className="font-semibold text-white">{label}</span>
                      <span className="mt-2 block text-sm text-mist">{detail}</span>
                    </motion.button>
                  ))}
                </div>
              )}
              {hasField("budgetRange") && (
                <select required className="field" value={form.budgetRange} onChange={(e) => update("budgetRange", e.target.value)}>
                  <option value="">Budget range</option>
                  <option>{form.market === "ng" ? "Under ₦850k" : "Under $3.5k"}</option>
                  <option>{form.market === "ng" ? "₦850k - ₦1.8m" : "$3.5k - $8k"}</option>
                  <option>{form.market === "ng" ? "₦1.8m - ₦3.5m" : "$8k - $15k"}</option>
                  <option>{form.market === "ng" ? "₦3.5m+" : "$15k+"}</option>
                </select>
              )}
              {hasField("message") && (
                <textarea className="field" rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Anything else we should know before we review your system?" />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
        <button onClick={back} disabled={step === 0} className="min-h-12 rounded-md border border-white/10 px-5 text-sm font-semibold text-mist disabled:cursor-not-allowed disabled:opacity-40">
          Back
        </button>
        {step < steps.length - 1 ? (
          <AnimatedButton onClick={next}>Continue</AnimatedButton>
        ) : (
          <AnimatedButton onClick={submit}>{status === "submitting" ? "Submitting..." : "Submit Audit"}</AnimatedButton>
        )}
      </div>
      {status === "error" && <p className="mt-4 text-sm text-red-300">The submission did not complete. Please try again or contact us on WhatsApp.</p>}
    </div>
  );
}

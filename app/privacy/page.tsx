import { readFileSync } from "node:fs";
import path from "node:path";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Privacy Policy",
  description: "PrimeOps privacy policy."
};

export default function PrivacyPage() {
  const policyHtml = readFileSync(path.join(process.cwd(), "app/privacy/privacy-policy.html"), "utf8");

  return (
    <section className="page-section">
      <Reveal className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">Legal</p>
        <h1 className="mt-5 text-5xl font-black text-white">Privacy Policy</h1>
        <div
          className="mt-8 overflow-hidden rounded-md border border-white/10 bg-white p-6 shadow-glow md:p-10 [&_a]:underline [&_h1]:text-3xl [&_h1]:font-black [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_li]:ml-5 [&_ol]:list-decimal [&_p]:leading-7 [&_ul]:list-square"
          dangerouslySetInnerHTML={{ __html: policyHtml }}
        />
      </Reveal>
    </section>
  );
}

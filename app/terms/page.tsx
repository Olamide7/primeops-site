import { readFileSync } from "node:fs";
import path from "node:path";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Terms and Conditions",
  description: "PrimeOps terms and conditions."
};

export default function TermsPage() {
  const termsHtml = readFileSync(path.join(process.cwd(), "app/terms/terms-and-conditions.html"), "utf8");

  return (
    <section className="page-section">
      <Reveal className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">Legal</p>
        <h1 className="mt-5 text-5xl font-black text-white">Terms and Conditions</h1>
        <div
          className="mt-8 overflow-hidden rounded-md border border-white/10 bg-white p-6 shadow-glow md:p-10 [&_a]:underline [&_h1]:text-3xl [&_h1]:font-black [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_li]:ml-5 [&_ol]:list-decimal [&_p]:leading-7 [&_ul]:list-square"
          dangerouslySetInnerHTML={{ __html: termsHtml }}
        />
      </Reveal>
    </section>
  );
}

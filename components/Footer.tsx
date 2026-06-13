import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">PrimeOps</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-mist">
            Premium technical growth infrastructure for B2B teams that need sharper systems, faster response, and cleaner operations.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <div className="mt-4 grid gap-3">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-mist hover:text-cyan">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <div className="mt-4 grid gap-3">
            <Link href="/privacy" className="text-sm text-mist hover:text-cyan">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-mist hover:text-cyan">Terms and Conditions</Link>
            <Link href="/audit" className="text-sm text-mist hover:text-cyan">Free Operational Audit</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5">
        <p className="mx-auto max-w-7xl text-xs text-mist">© {new Date().getFullYear()} PrimeOps. Engineered for intelligent growth.</p>
      </div>
    </footer>
  );
}

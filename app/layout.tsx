import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PageTransition } from "@/components/PageTransition";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "PrimeOps | Technical Growth Agency",
    template: "%s | PrimeOps"
  },
  description: "PrimeOps engineers B2B growth infrastructure: high-performance websites, AI reception, workflow automation, and operational systems.",
  metadataBase: new URL("https://primeops.example"),
  openGraph: {
    title: "PrimeOps | Scale. Automate. Engineer Growth.",
    description: "Premium technical growth infrastructure for ambitious B2B teams.",
    images: ["/assets/images/og-image.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <Nav />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

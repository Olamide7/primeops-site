export type Region = "ng" | "intl";

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Proof" },
  { href: "/blog", label: "News" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Technical Growth Systems",
    description: "Conversion-focused web infrastructure, analytics, CRM paths, and automation logic built as one revenue system.",
    icon: "network",
    outcomes: ["Launch faster", "Track every lead", "Route demand automatically"]
  },
  {
    title: "AI Reception & Lead Capture",
    description: "Always-on intake systems that answer, qualify, summarize, and route prospects before your team loses momentum.",
    icon: "bot",
    outcomes: ["24/7 response", "Lower missed calls", "Cleaner sales handoff"]
  },
  {
    title: "Workflow Automation",
    description: "Operational workflows that remove repetitive admin from sales, support, hiring, reporting, and delivery.",
    icon: "workflow",
    outcomes: ["Fewer manual tasks", "Consistent follow-up", "Better visibility"]
  },
  {
    title: "Infrastructure Advisory",
    description: "Technical audits, rebuild roadmaps, vendor reviews, and implementation support for teams that need systems to scale.",
    icon: "cpu",
    outcomes: ["Find bottlenecks", "Prioritize rebuilds", "Reduce tech debt"]
  }
];

export const pricing = {
  ng: [
    {
      name: "SME Launch System",
      description: "For local operators replacing scattered tools with one credible web and lead engine.",
      price: "₦850k",
      currency: "NGN",
      cta: "Start Local Audit",
      features: ["Conversion website", "Lead capture forms", "WhatsApp routing", "Analytics baseline"]
    },
    {
      name: "Automation Growth Stack",
      description: "For teams ready to remove repetitive sales and operations work.",
      price: "₦1.8m",
      currency: "NGN",
      cta: "Map My Stack",
      features: ["CRM pipeline", "AI intake assistant", "Workflow automations", "Team handoff playbooks"]
    },
    {
      name: "Market Expansion Build",
      description: "For established companies upgrading infrastructure before scaling demand.",
      price: "₦3.5m+",
      currency: "NGN",
      cta: "Plan Expansion",
      features: ["Custom system design", "Multi-channel routing", "Performance dashboards", "Launch support"]
    }
  ],
  intl: [
    {
      name: "Premium Growth Site",
      description: "For B2B companies that need an enterprise-grade digital front door.",
      price: "$3.5k",
      currency: "USD",
      cta: "Request Scope",
      features: ["Next.js website", "SEO foundation", "Conversion architecture", "Analytics instrumentation"]
    },
    {
      name: "Enterprise Automation Layer",
      description: "For growth teams integrating AI intake, workflow automations, and reporting.",
      price: "$8k",
      currency: "USD",
      cta: "Design System",
      features: ["AI receptionist", "CRM automation", "Ops dashboards", "Secure API integrations"]
    },
    {
      name: "Infrastructure Partnership",
      description: "For leadership teams that need a technical partner across roadmap and delivery.",
      price: "$15k+",
      currency: "USD",
      cta: "Book Strategy Call",
      features: ["Architecture review", "Implementation squad", "Growth experiments", "Executive reporting"]
    }
  ]
};

export const projects = [
  {
    title: "Missed-call recovery for a service group",
    metric: "98% answer coverage",
    description: "PrimeOps replaced manual call handling with an AI receptionist, lead scoring, and WhatsApp follow-up.",
    tags: ["AI Voice", "CRM", "WhatsApp"]
  },
  {
    title: "Operations rebuild for a logistics firm",
    metric: "41 hours saved monthly",
    description: "A fragmented spreadsheet process became a controlled workflow with status alerts and performance reporting.",
    tags: ["Automation", "Reporting", "Process"]
  },
  {
    title: "B2B acquisition engine for SaaS consulting",
    metric: "3.2x qualified enquiries",
    description: "A slow brochure site became a high-signal sales path with segmented offers, lead magnets, and analytics.",
    tags: ["Next.js", "SEO", "Funnels"]
  }
];

export const blogPosts = [
  {
    slug: "why-growth-teams-need-operational-infrastructure",
    title: "Why growth teams need operational infrastructure before more ads",
    excerpt: "Demand generation breaks when response, qualification, and reporting are not engineered as a system.",
    date: "2026-05-28",
    category: "Growth Systems"
  },
  {
    slug: "ai-receptionists-for-b2b-lead-routing",
    title: "AI receptionists are becoming the new lead routing layer",
    excerpt: "The best AI intake systems do more than answer calls. They qualify, summarize, and trigger the next action.",
    date: "2026-05-10",
    category: "Automation"
  },
  {
    slug: "geo-pricing-for-technical-services",
    title: "How geo-pricing helps agencies serve local and international markets",
    excerpt: "Premium infrastructure can be packaged differently without diluting positioning or confusing buyers.",
    date: "2026-04-22",
    category: "Strategy"
  }
];

export const testimonials = [
  {
    quote: "PrimeOps helped us understand where growth was leaking. The system they built paid for itself in the first quarter.",
    name: "Amina Bello",
    role: "Managing Director, Atlas Clinics",
    metric: "2.6x booking lift"
  },
  {
    quote: "They think like operators, not just developers. Our handoffs are cleaner and leadership finally has real visibility.",
    name: "Daniel Okoro",
    role: "COO, FreightGrid",
    metric: "41 hours saved"
  },
  {
    quote: "The audit exposed issues we had normalized for years. The rebuild made our sales team faster immediately.",
    name: "Maya Chen",
    role: "Founder, Northstar Labs",
    metric: "31% faster response"
  }
];

export const faqs = [
  {
    question: "What does PrimeOps actually build?",
    answer: "We build technical growth infrastructure: high-performance websites, AI intake systems, workflow automation, CRM routing, analytics, and the connective tissue between them."
  },
  {
    question: "Is the free operational audit really free?",
    answer: "Yes. The audit is a short discovery path that helps us identify your highest-friction bottleneck and recommend whether PrimeOps is the right implementation partner."
  },
  {
    question: "Do you work with companies outside Nigeria?",
    answer: "Yes. PrimeOps serves Nigerian SMEs and international B2B teams. Pricing can switch between local SME packages in Naira and premium enterprise packages in USD."
  },
  {
    question: "Can you integrate with our existing tools?",
    answer: "Usually. We review your stack first, then design integrations around your CRM, calendars, forms, WhatsApp, email, analytics, and internal workflows."
  },
  {
    question: "How long does a project take?",
    answer: "Focused builds can ship in two to four weeks. Larger infrastructure projects usually run four to eight weeks depending on integrations, approvals, and data readiness."
  }
];

export const stats = [
  { value: "98%", label: "AI answer coverage" },
  { value: "3.2x", label: "qualified enquiry lift" },
  { value: "41h", label: "monthly admin removed" },
  { value: "<2s", label: "lead response target" }
];

export const processSteps = [
  { title: "Audit the leaks", description: "We map the buyer journey, workflow debt, missed leads, and reporting gaps.", icon: "shield" },
  { title: "Engineer the system", description: "We design the web, AI, automation, and routing layers as one operating model.", icon: "building" },
  { title: "Launch and optimize", description: "We ship, measure, refine, and leave the team with dashboards and playbooks.", icon: "chart" }
];

export const contactRoutes = [
  { label: "Book a free audit", href: "/audit", icon: "zap" },
  { label: "Message on WhatsApp", href: "https://wa.me/2340000000000?text=Hi%20PrimeOps%2C%20I%27d%20like%20to%20discuss%20a%20growth%20system.", icon: "messages" }
];

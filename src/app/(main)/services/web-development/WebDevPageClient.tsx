"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Monitor,
  LayoutGrid,
  Mail,
  FileText,
  MapPin,
  BarChart2,
  Settings,
  ShieldCheck,
  Code2,
  Check,
} from "lucide-react";
import SectionCTA from "@/components/shared/SectionCTA";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingPlan {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  href: string;
  highlight: boolean;
}

const FEATURES: Feature[] = [
  {
    icon: <Monitor size={20} strokeWidth={1.75} />,
    title: "Responsive Design",
    description: "Flawless performance across all devices and screen sizes.",
  },
  {
    icon: <LayoutGrid size={20} strokeWidth={1.75} />,
    title: "Modern Layouts",
    description: "Clean, professional architecture that builds trust.",
  },
  {
    icon: <Mail size={20} strokeWidth={1.75} />,
    title: "Lead Capture",
    description: "Integrated forms to convert visitors into clients.",
  },
  {
    icon: <FileText size={20} strokeWidth={1.75} />,
    title: "Content Strategy",
    description: "Structured copy layouts optimised for your services.",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.75} />,
    title: "Local SEO Ready",
    description: "Built to help your agency rank in your specific region.",
  },
  {
    icon: <BarChart2 size={20} strokeWidth={1.75} />,
    title: "Analytics Setup",
    description: "Track visitor behaviour and campaign performance.",
  },
  {
    icon: <Settings size={20} strokeWidth={1.75} />,
    title: "Easy Management",
    description: "Intuitive CMS for updates without any coding knowledge.",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.75} />,
    title: "Secure Hosting",
    description: "Enterprise-grade security and automated backups.",
  },
];

const PLANS: PricingPlan[] = [
  {
    title: "Starter",
    subtitle: "Essential presence for new agencies.",
    features: ["5 Core Pages", "Basic Contact Form", "Mobile Responsive"],
    cta: "Select Starter",
    href: "/contact?plan=starter",
    highlight: false,
  },
  {
    title: "Standard",
    subtitle: "Comprehensive suite for growing teams.",
    features: [
      "Up to 10 Pages",
      "Advanced Lead Capture",
      "CMS Integration",
      "Basic SEO Setup",
    ],
    cta: "Select Standard",
    href: "/contact?plan=standard",
    highlight: true,
  },
  {
    title: "Premium",
    subtitle: "Custom solutions for established firms.",
    features: [
      "Unlimited Pages",
      "Custom Integrations",
      "Advanced Analytics",
      "Priority Support",
    ],
    cta: "Select Premium",
    href: "/contact?plan=premium",
    highlight: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const gridStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function InView({
  children,
  className,
  delay = 0,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: typeof fadeUp;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="webdev-hero-heading"
      className="relative overflow-hidden bg-navy px-6 py-20 lg:py-24"
    >
      {/* Decorative diagonal lines */}
      <div
        className="pointer-events-none absolute right-0 top-0 opacity-[0.07]"
        aria-hidden="true"
      >
        <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
          <line
            x1="420"
            y1="-60"
            x2="820"
            y2="540"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="340"
            y1="-60"
            x2="740"
            y2="540"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="260"
            y1="-60"
            x2="660"
            y2="540"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="180"
            y1="-60"
            x2="580"
            y2="540"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left — text */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={fadeIn}
            className="text-xs font-semibold uppercase tracking-widest text-teal-600"
          >
            Agency Website Development
          </motion.p>

          <motion.h1
            id="webdev-hero-heading"
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl"
          >
            A professional website built for your agency — fast, credible, ready
            to accept clients.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
          >
            After we handle your documentation and licensing, your agency needs
            a website that instills the same level of trust in your own clients.
            We build that too.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact?service=web-development"
              className={[
                "inline-flex items-center justify-center rounded-md",
                "bg-white px-7 py-3.5 text-base font-semibold text-navy",
                "transition-all duration-150 hover:bg-white/90 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
              ].join(" ")}
            >
              Start your build
            </Link>
            <Link
              href="#process"
              className={[
                "inline-flex items-center justify-center rounded-md",
                "border border-white/30 bg-transparent px-7 py-3.5 text-base font-semibold text-white",
                "transition-all duration-150 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
              ].join(" ")}
            >
              View our process
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — laptop illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="hidden lg:block animate-pulse transition-all duration-300"
          aria-hidden="true"
        >
          <div className="relative mx-auto max-w-115 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <div className="mx-2 h-5 flex-1 rounded bg-white/10" />
            </div>
            {/* Mock site content */}
            <div className="p-5">
              {/* Nav mock */}
              <div className="mb-4 flex items-center justify-between">
                <div className="h-3 w-20 rounded-full bg-white/30" />
                <div className="flex gap-2">
                  {[40, 32, 36].map((w, i) => (
                    <div
                      key={i}
                      className={`h-2 w-${w / 4} rounded-full bg-white/15`}
                      style={{ width: w }}
                    />
                  ))}
                </div>
              </div>
              {/* Hero mock */}
              <div className="mb-4 rounded-lg bg-white/10 p-4">
                <div className="mb-2 h-4 w-3/4 rounded-full bg-white/30" />
                <div className="mb-1 h-2.5 w-full rounded-full bg-white/15" />
                <div className="mb-3 h-2.5 w-5/6 rounded-full bg-white/15" />
                <div className="h-7 w-28 rounded-full bg-teal/50" />
              </div>
              {/* Stats row */}
              <div className="mb-3 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg bg-white/10 p-3">
                    <div className="mb-1 h-3 w-8 rounded-full bg-white/30" />
                    <div className="h-2 w-full rounded-full bg-white/15" />
                  </div>
                ))}
              </div>
              {/* Card row */}
              <div className="grid grid-cols-2 gap-2">
                {[1, 2].map((i) => (
                  <div key={i} className="rounded-lg bg-white/10 p-3">
                    <div className="mb-2 h-5 w-5 rounded bg-teal/40" />
                    <div className="mb-1 h-2.5 w-full rounded-full bg-white/25" />
                    <div className="h-2 w-4/5 rounded-full bg-white/15" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="features-heading"
      className="bg-white px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 max-w-xl"
        >
          <motion.p
            variants={fadeIn}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal"
          >
            What&apos;s included
          </motion.p>
          <motion.h2
            id="features-heading"
            variants={fadeUp}
            className="text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl"
          >
            Everything your agency website needs
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className={[
                "flex flex-col gap-3 rounded-2xl border border-border",
                "bg-off-white p-6 transition-colors duration-150 hover:border-teal/40",
              ].join(" ")}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-light text-teal"
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechCallout() {
  return (
    <section
      aria-label="Technology note"
      className="bg-white px-6 pb-16 sm:pb-20"
    >
      <InView className="mx-auto max-w-4xl">
        <div
          className={[
            "flex flex-col sm:flex-row items-start gap-4 rounded-r-2xl border-l-3 border-teal",
            "bg-teal-light px-6 py-5 sm:items-center sm:px-10 sm:py-6",
          ].join(" ")}
        >
          <div className="shrink-0 text-teal" aria-hidden="true">
            <Code2 size={20} strokeWidth={1.75} />
          </div>
          <p className="text-sm leading-relaxed text-charcoal font-semibold sm:text-base">
            Built with modern, reliable technology. Fast-loading, mobile-first,
            and easy for your team to update —{" "}
            <span className="font-semibold italic text-teal">
              no coding required.
            </span>
          </p>
        </div>
      </InView>
    </section>
  );
}

function PricingSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="pricing-heading"
      className="bg-off-white px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 text-center"
        >
          <motion.h2
            id="pricing-heading"
            variants={fadeUp}
            className="mb-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Clear, predictable pricing
          </motion.h2>
          <motion.p variants={fadeIn} className="text-base text-slate">
            Select the tier that matches your agency&apos;s current growth stage.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.title}
              variants={fadeUp}
              className={[
                "relative flex flex-col rounded-2xl bg-white p-8",
                plan.highlight
                  ? "border-2 border-teal shadow-lg shadow-teal/10 md:-mt-3 md:mb-3"
                  : "border border-border shadow-sm",
              ].join(" ")}
            >
              {/* Most popular badge */}
              {plan.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2"
                  aria-label="Most popular plan"
                >
                  <span className="rounded-full bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name + subtitle */}
              <div className="mb-6 border-b border-border pb-6">
                <h3 className="mb-1.5 text-xl font-semibold text-navy">
                  {plan.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate">
                  {plan.subtitle}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex grow flex-col gap-3" role="list">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-sm text-charcoal"
                  >
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-teal"
                      aria-hidden="true"
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={[
                  "inline-flex w-full items-center justify-center rounded-full py-3",
                  "text-sm font-semibold transition-all duration-150 active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  plan.highlight
                    ? [
                        "bg-navy text-white hover:bg-navy-hover",
                        "focus-visible:ring-navy",
                      ].join(" ")
                    : [
                        "border border-border text-navy hover:border-navy hover:bg-navy/5",
                        "focus-visible:ring-navy",
                      ].join(" "),
                ].join(" ")}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <InView delay={0.3}>
          <p className="mt-6 text-center text-xs text-slate">
            All packages include 30-day post-launch support. Monthly maintenance
            plans available.
          </p>
        </InView>
      </div>
    </section>
  );
}

export default function WebDevPageClient() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturesSection />
      <TechCallout />
      <PricingSection />
      <SectionCTA
        headline="Let's build your agency's online presence."
        subCopy="A fast, credible website that works as hard as you do — ready when your agency is."
        primary={{ label: "Book a free call", href: "/contact" }}
        secondary={{ label: "View all services", href: "/services" }}
      />
    </main>
  );
}

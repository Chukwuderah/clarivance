"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ClipboardCheck, Globe, Check, ArrowRight } from "lucide-react";
import SectionCTA from "@/components/shared/SectionCTA";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  title: string;
  description: string;
  inclusions: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: ServiceItem[] = [
  {
    icon: <FileText size={20} strokeWidth={1.75} />,
    label: "Documentation",
    href: "/services/documentation",
    title: "Technical Writing & Documentation",
    description:
      "Professional policy manuals and operational documents tailored to your specific state and sector requirements. We ensure your documentation is surveyor-ready from day one.",
    inclusions: [
      "Policy & Procedure Manuals",
      "Employee Handbooks",
      "Job Descriptions",
      "Org Charts",
      "Infection Control Plans",
      "Emergency Preparedness Plans",
    ],
  },
  {
    icon: <ClipboardCheck size={20} strokeWidth={1.75} />,
    label: "Consulting",
    href: "/services/consulting",
    title: "Licensing & Application Consulting",
    description:
      "Strategic guidance through the complex landscape of healthcare licensing and accreditation. We navigate the bureaucracy so you can focus on patient care.",
    inclusions: [
      "State license applications",
      "Accreditation prep (CHAP, ACHC)",
      "Surveyor-ready checklists",
      "Gap analysis",
    ],
  },
  {
    icon: <Globe size={20} strokeWidth={1.75} />,
    label: "Web Development",
    href: "/services/web-development",
    title: "Agency Website Development",
    description:
      "Establish instant credibility with a professional digital presence. We build websites that don't just look good, but function as a business tool for client intake.",
    inclusions: [
      "Responsive agency website",
      "Service & contact pages",
      "Intake form integration",
      "CMS for self-editing",
    ],
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

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

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ─── Animated section wrapper ─────────────────────────────────────────────────
// Triggers once when the wrapped content scrolls into view

interface InViewSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function InViewSection({ children, className, delay = 0 }: InViewSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Service card ─────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Split inclusions into two columns
  const mid = Math.ceil(service.inclusions.length / 2);
  const col1 = service.inclusions.slice(0, mid);
  const col2 = service.inclusions.slice(mid);

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      aria-labelledby={`service-${service.label.toLowerCase().replace(/\s+/g, "-")}`}
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      className="rounded-2xl border border-border bg-white transition-colors duration-300 hover:border-teal-200 p-6 sm:p-8"
    >
      {/* Top row — icon + learn more */}
      <div className="mb-5 flex items-start justify-between">
        {/* Icon chip */}
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light text-teal"
          aria-hidden="true"
        >
          {service.icon}
        </div>

        {/* Learn more link */}
        <Link
          href={service.href}
          className={[
            "group flex items-center gap-1 text-base font-medium text-slate",
            "transition-colors duration-150 hover:text-navy",
            "focus-visible:outline-none focus-visible:underline",
          ].join(" ")}
          aria-label={`Learn more about ${service.title}`}
        >
          Learn more
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Title */}
      <h2
        id={`service-${service.label.toLowerCase().replace(/\s+/g, "-")}`}
        className="mb-3 text-xl font-semibold text-navy sm:text-2xl"
      >
        {service.title}
      </h2>

      {/* Description */}
      <p className="mb-6 max-w-lg text-sm leading-relaxed text-slate sm:text-base">
        {service.description}
      </p>

      {/* Inclusions — two-column checklist */}
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2"
      >
        {[col1, col2].map((col, colIdx) => (
          <ul key={colIdx} className="flex flex-col gap-2.5" role="list">
            {col.map((item) => (
              <motion.li
                key={item}
                variants={listItemVariants}
                className="flex items-center gap-2 text-sm text-charcoal"
              >
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="shrink-0 text-teal"
                  aria-hidden="true"
                />
                {item}
              </motion.li>
            ))}
          </ul>
        ))}
      </motion.div>
    </motion.article>
  );
}

function BundleCallout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={[
        "flex flex-col gap-4 rounded-r-2xl border-l-4 border-teal",
        "bg-teal-light px-6 py-5 sm:flex-row sm:items-center sm:justify-between",
      ].join(" ")}
    >
      <p className="text-sm leading-relaxed text-charcoal sm:text-base">
        <strong className="font-semibold text-navy">Need all three?</strong>{" "}
        Most of our clients do. Ask us about bundled packages that cover
        documentation, consulting, and your agency website in one engagement.
      </p>

      <Link
        href="/contact?inquiry=bundle"
        className={[
          "group shrink-0 text-sm font-semibold text-teal",
          "transition-colors duration-150 hover:text-navy",
          "focus-visible:outline-none focus-visible:underline",
          "flex items-center gap-1 whitespace-nowrap",
        ].join(" ")}
      >
        Ask about bundles
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}

function PageHero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className="bg-off-white px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeIn}
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal"
          >
            Our Services
          </motion.p>

          {/* H1 */}
          <motion.h1
            id="services-hero-heading"
            variants={fadeUp}
            className="mb-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl"
          >
            Everything your agency needs to open its doors
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-slate sm:text-lg"
          >
            From the first document to your first client — we handle the
            documentation, the licensing guidance, and the website.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services list ────────────────────────────────────────────────────────────

function ServicesList() {
  return (
    <section
      aria-label="Service offerings"
      className="px-6 py-14 sm:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.href} service={service} index={i} />
        ))}

        {/* Bundle callout sits inside the services section */}
        <InViewSection>
          <BundleCallout />
        </InViewSection>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPageClient() {
  return (
    <main id="main-content">
      {/* Skip link target */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <PageHero />
      <ServicesList />

      <SectionCTA
        headline="Not sure where to start?"
        subCopy="Book a free 20-minute call and we'll tell you exactly what your agency needs."
        primary={{ label: "Book a free call", href: "/contact" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </main>
  );
}

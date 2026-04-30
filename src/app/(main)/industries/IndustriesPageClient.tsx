"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Home,
  LayoutList,
  Users,
  Sun,
  Heart,
  Building2,
  ArrowRight,
} from "lucide-react";
import SectionCTA from "@/components/shared/SectionCTA";

interface Industry {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  hasPage: boolean;
}

const INDUSTRIES: Industry[] = [
  {
    icon: <Home size={22} strokeWidth={1.75} />,
    title: "Home Health",
    description:
      "Precision documentation for skilled nursing and therapy services delivered in the patient's residence.",
    href: "/industries/home-health",
    hasPage: true,
  },
  {
    icon: <LayoutList size={22} strokeWidth={1.75} />,
    title: "Assisted Living",
    description:
      "Navigating state-specific regulations while maintaining resident-centered care narratives.",
    href: "/industries/assisted-living",
    hasPage: true,
  },
  {
    icon: <Users size={22} strokeWidth={1.75} />,
    title: "DDA/IDD Services",
    description:
      "Ensuring compliance for developmental disability administration and support services.",
    href: "/industries/dda",
    hasPage: true,
  },
  {
    icon: <Sun size={22} strokeWidth={1.75} />,
    title: "Adult Day Care",
    description:
      "Structuring daily activity and therapeutic intervention logs for community-based care centers.",
    href: "/contact?sector=adult-day-care",
    hasPage: false,
  },
  {
    icon: <Heart size={22} strokeWidth={1.75} />,
    title: "Hospice",
    description:
      "Sensitive, compliant documentation covering end-of-life care, pain management, and family support.",
    href: "/contact?sector=hospice",
    hasPage: false,
  },
  {
    icon: <Building2 size={22} strokeWidth={1.75} />,
    title: "Group Homes",
    description:
      "Standardizing incident reporting and daily living logs across multiple residential facilities.",
    href: "/contact?sector=group-homes",
    hasPage: false,
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
  visible: { transition: { staggerChildren: 0.08 } },
};

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <motion.article
      variants={fadeUp}
      aria-labelledby={`industry-${industry.title.toLowerCase().replace(/[\s/]+/g, "-")}`}
      className={[
        "group flex flex-col gap-5 rounded-2xl border border-border bg-white p-6",
        "transition-all duration-200",
        "hover:border-teal/40 hover:shadow-md hover:shadow-teal/8",
      ].join(" ")}
    >
      {/* Icon chip */}
      <div
        className={[
          "flex h-11 w-11 items-center justify-center rounded-xl",
          "bg-teal-light text-teal",
          "transition-colors duration-200 group-hover:bg-teal group-hover:text-white",
        ].join(" ")}
        aria-hidden="true"
      >
        {industry.icon}
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col gap-2">
        <h2
          id={`industry-${industry.title.toLowerCase().replace(/[\s/]+/g, "-")}`}
          className="text-lg font-semibold text-navy"
        >
          {industry.title}
        </h2>
        <p className="text-sm leading-relaxed text-slate">
          {industry.description}
        </p>
      </div>

      {/* CTA link */}
      <Link
        href={industry.href}
        className={[
          "group/link inline-flex items-center gap-1.5",
          "text-sm font-semibold text-teal",
          "transition-colors duration-150 hover:text-navy",
          "focus-visible:outline-none focus-visible:underline",
        ].join(" ")}
        aria-label={
          industry.hasPage
            ? `See our work in ${industry.title}`
            : `Get in touch about ${industry.title}`
        }
      >
        {industry.hasPage ? "See our work" : "Get in touch"}
        <ArrowRight
          size={14}
          strokeWidth={2.5}
          className="transition-transform duration-150 group-hover/link:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </motion.article>
  );
}

function PageHero() {
  return (
    <section
      aria-labelledby="industries-hero-heading"
      className="bg-off-white px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeIn}
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal"
          >
            Industries
          </motion.p>

          {/* H1 */}
          <motion.h1
            id="industries-hero-heading"
            variants={fadeUp}
            className="mb-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl"
          >
            Deep expertise in the sectors that need it most.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-slate sm:text-lg"
          >
            Healthcare compliance documentation isn't one-size-fits-all. Each
            sector has its own regulatory language. We know yours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Cards grid ───────────────────────────────────────────────────────────────

function IndustriesGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Industry specialisations"
      className="bg-white px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndustriesPageClient() {
  return (
    <main id="main-content">
      <PageHero />
      <IndustriesGrid />
      <SectionCTA
        headline="Ready to build better documentation?"
        subCopy="Partner with Clarivance to ensure structural integrity across your organisation's compliance narrative."
        primary={{ label: "Book a free call", href: "/contact" }}
        secondary={{ label: "View our work", href: "/work" }}
      />
    </main>
  );
}

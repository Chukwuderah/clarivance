"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence, LayoutGroup } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Testimonials, { type Testimonial } from "@/components/shared/Testimonials";
import SectionCTA from "@/components/shared/SectionCTA";

type FilterKey = "all" | "documentation" | "consulting" | "web-development";

interface CaseStudy {
  id: string;
  service: Exclude<FilterKey, "all">;
  serviceLabel: string;
  region: string;
  challenge: string;
  delivered: string[];
  outcome: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    service: "documentation",
    serviceLabel: "Documentation",
    region: "North America",
    challenge:
      "A mid-sized home health organization struggled with unstructured legacy policies, causing significant delays in state survey preparation.",
    delivered: [
      "Full policy & procedure manual rebuild across 12 care domains.",
      "Surveyor-ready QAPI and infection control documentation.",
    ],
    outcome:
      "Passed state survey on first attempt, reducing pre-survey prep time by 64%.",
  },
  {
    id: "cs-2",
    service: "consulting",
    serviceLabel: "Consulting",
    region: "Europe",
    challenge:
      "An established assisted living provider needed to transition operational protocols to align with new CQC regulatory directives without service interruption.",
    delivered: [
      "Comprehensive operational audit and gap analysis.",
      "Phased rollout strategy for protocol adoption.",
    ],
    outcome:
      "Zero downtime during transition with 100% adherence to new compliance standards.",
  },
  {
    id: "cs-3",
    service: "web-development",
    serviceLabel: "Web Development",
    region: "Global",
    challenge:
      "A DDA services startup required an enterprise-grade web presence to support high-volume client intake and referral management.",
    delivered: [
      "Custom, high-performance agency website with CMS.",
      "Secure intake form and referral portal implementation.",
    ],
    outcome:
      "Platform scalability increased 300%, enabling onboarding of three major referral networks.",
  },
  {
    id: "cs-4",
    service: "documentation",
    serviceLabel: "Documentation",
    region: "APAC",
    challenge:
      "Post-merger integration left a major hospice group with disparate documentation standards, creating critical compliance blind spots.",
    delivered: [
      "Unified corporate documentation framework across 5 facilities.",
      "Executive risk-visibility dashboard mapping.",
    ],
    outcome:
      "Standardised 10,000+ critical documents, eliminating identified compliance blind spots.",
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "documentation", label: "Documentation" },
  { key: "consulting", label: "Consulting" },
  { key: "web-development", label: "Web Development" },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    rating: 5,
    description:
      "The structural clarity they brought to our documentation process was nothing short of architectural. They didn't just fix the files — they rebuilt the foundation.",
    name: 'Director of Operations',
    agencyName: 'Tier-1 Healthcare Provider',
  },
  {
    id: 't-2',
    rating: 5,
    description:
      "Their team operates with the precision of a top-tier law firm, combined with the agility of a leading tech company. The outcome exceeded our board's expectations.",
    name: 'Chief Compliance Officer',
    agencyName: 'Global Biotech Firm',
  },
  {
    id: 't-3',
    rating: 5,
    description:
      "We had struggled with integration for months. Clarivance stepped in and mapped a secure, scalable solution in weeks. Exceptional professionalism.",
    name: 'VP of Engineering',
    agencyName: 'Medical SaaS Startup',
  },
  {
    id: 't-4',
    rating: 5,
    description:
      "A rare combination of strategic foresight and meticulous execution. They don't just advise — they architect solutions that last.",
    name: 'Managing Partner',
    agencyName: 'European Clinical Network',
  },
  {
    id: 't-5',
    rating: 5,
    description:
      "The interface they developed for our compliance portal transformed how our teams interact with regulatory data. Clean, intuitive, and highly secure.",
    name: 'Head of Product',
    agencyName: 'HealthTech Innovations',
  },
  {
    id: 't-6',
    rating: 5,
    description:
      "Reliable, discrete, and incredibly effective. Clarivance is the definitive partner for navigating complex clinical administration.",
    name: 'Executive Director',
    agencyName: 'Research Consortium APAC',
  },
]

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

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const SERVICE_COLORS: Record<Exclude<FilterKey, "all">, string> = {
  documentation: "bg-teal-light text-teal border-teal/20",
  consulting: "bg-navy/8 text-navy border-navy/15",
  "web-development": "bg-gold/10 text-[#8a6420] border-gold/25",
};

function Badge({
  label,
  service,
}: {
  label: string;
  service: Exclude<FilterKey, "all">;
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
        SERVICE_COLORS[service],
      ].join(" ")}
    >
      {label}
    </span>
  );
}

function RegionBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-off-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate">
      {label}
    </span>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby={`cs-outcome-${cs.id}`}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-white shadow-md p-6 sm:p-7"
    >
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <Badge label={cs.serviceLabel} service={cs.service} />
        <RegionBadge label={cs.region} />
      </div>

      {/* Challenge */}
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate">
          The Challenge
        </p>
        <p className="text-sm leading-relaxed text-charcoal">{cs.challenge}</p>
      </div>

      {/* Delivered */}
      <div>
        <p className="mb-2.5 text-[10px] font-bold uppercase tracking-widest text-slate">
          What We Delivered
        </p>
        <ul className="flex flex-col gap-2" role="list">
          {cs.delivered.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-charcoal"
            >
              <CheckCircle2
                size={15}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-teal"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Outcome */}
      <div className="mt-auto border-t border-border-light pt-4">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate">
          The Outcome
        </p>
        <p
          id={`cs-outcome-${cs.id}`}
          className="text-sm font-semibold leading-snug text-navy sm:text-base"
        >
          {cs.outcome}
        </p>
      </div>
    </motion.article>
  );
}

function FilterTabs({
  active,
  onChange,
}: {
  active: FilterKey;
  onChange: (key: FilterKey) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter case studies by service"
      className="grid grid-cols-2 md:flex justify-center gap-2"
    >
      {FILTERS.map((f) => {
        const isActive = f.key === active;
        return (
          <button
            key={f.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(f.key)}
            className={[
              "text-nowrap relative rounded-md md:rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
              isActive
                ? "bg-teal-light text-teal shadow-sm shadow-teal/20"
                : "border border-border bg-white text-slate hover:border-teal/40 hover:text-navy",
            ].join(" ")}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}

function PageHero() {
  return (
    <section
      aria-labelledby="work-hero-heading"
      className="bg-[#dde4fe] px-6 pb-16 pt-16 text-center sm:pb-20 sm:pt-20"
    >
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-2xl"
      >
        <motion.h1
          id="work-hero-heading"
          variants={fadeUp}
          className="mb-5 text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl"
        >
          Real work. <br className="hidden sm:block" />
          Real outcomes.
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-base leading-relaxed text-charcoal text-center sm:text-lg max-w-xl"
        >
          We don't publish client names without permission — but here's what
          we've helped agencies achieve.
        </motion.p>
      </motion.div>
    </section>
  );
}

function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? CASE_STUDIES
        : CASE_STUDIES.filter((cs) => cs.service === activeFilter),
    [activeFilter],
  );

  return (
    <section
      ref={ref}
      aria-label="Case studies"
      className="bg-white px-6 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Filter row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10"
        >
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        </motion.div>

        {/* Cards grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((cs) => (
                <CaseStudyCard key={cs.id} cs={cs} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-sm text-slate"
            >
              No case studies in this category yet — check back soon.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function TestimonialsWall() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      aria-labelledby="testimonials-heading"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-[#dde4fe] py-16 sm:py-20"
    >
      <Testimonials
        subtitle="WHAT CLIENTS SAY"
        title="Trusted across 3 continents"
        testimonials={TESTIMONIALS}
      />
    </motion.section>
  );
}

export default function WorkPageClient() {
  return (
    <main id="main-content">
      <PageHero />
      <CaseStudiesSection />
      <TestimonialsWall />
      <SectionCTA
        headline="Want results like these? Let's talk."
        subCopy="Book a free 20-minute call and we'll walk you through exactly how we can help your agency."
        primary={{ label: "Book a free call", href: "/contact" }}
        secondary={{ label: "Explore our services", href: "/services" }}
      />
    </main>
  );
}

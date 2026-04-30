"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SocialProof from "@/components/homepage/SocialProof";
import Services from "@/components/homepage/Services";
import OurSpecialties from "@/components/homepage/OurSpecialties";
import Testimonials from "@/components/shared/Testimonials";
import SectionCTA from "@/components/shared/SectionCTA";
import HowItWorks from "@/components/homepage/HowItWorks";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    description:
      "They delivered our entire policy and procedure manual in under 2 weeks. We passed our state survey on the first attempt.",
    name: "Sarah K.",
    agencyName: "Home Health Agency, Texas",
  },
  {
    id: 2,
    rating: 5,
    description:
      "Clarivance walked us through the entire CHAP accreditation process. We wouldn't have known where to start without them.",
    name: "Marcus O.",
    agencyName: "Assisted Living Facility, Georgia",
  },
  {
    id: 3,
    rating: 5,
    description:
      "Professional, thorough, and fast. Our DDA licensing documents were exactly what the state required.",
    name: "Jennifer M.",
    agencyName: "DDA Provider, Pennsylvania",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

const illustrationVariants = {
  hidden: { opacity: 0, x: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
  },
};

function DocumentIllustration() {
  return (
    <motion.div
      variants={illustrationVariants}
      className="relative w-full max-w-120 mx-auto lg:mx-0"
      aria-hidden="true"
    >
      {/* Outer card */}
      <div className="relative rounded-2xl border border-border bg-white p-8 shadow-sm">
        {/* ── Badge chip (top-left) ── */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy">
            {/* Verified / seal icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 2L12.09 7.26L17.66 7.27L13.5 10.74L15.18 16.02L10 12.9L4.82 16.02L6.5 10.74L2.34 7.27L7.91 7.26L10 2Z"
                fill="white"
                fillOpacity="0.9"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="h-2.5 w-28 rounded-full bg-teal/40" />
            <div className="h-2 w-20 rounded-full bg-slate/20" />
          </div>
        </div>

        {/* ── Document lines ── */}
        <div className="flex flex-col gap-3">
          {/* Full-width line */}
          <div className="h-2.5 w-full rounded-full bg-slate/15" />
          {/* Three-quarter line */}
          <div className="h-2.5 w-3/4 rounded-full bg-slate/12" />
          {/* Full-width line */}
          <div className="h-2.5 w-full rounded-full bg-slate/15" />
          {/* Two-third line */}
          <div className="h-2.5 w-2/3 rounded-full bg-slate/10" />
          {/* Gap + short paragraph lines */}
          <div className="mt-2 h-2 w-full rounded-full bg-slate/10" />
          <div className="h-2 w-5/6 rounded-full bg-slate/8" />
          <div className="h-2 w-4/5 rounded-full bg-slate/8" />
        </div>

        {/* ── Bottom-right orbital element ── */}
        <div className="mt-8 flex justify-end">
          <div className="relative flex h-16 w-16 items-center justify-center">
            {/* Dashed orbit ring */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              className="absolute inset-0"
              aria-hidden="true"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#1A7A8A"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
            {/* Centre dot */}
            <div className="h-7 w-7 rounded-full bg-teal/25 ring-4 ring-teal/10" />
            <div className="absolute h-3.5 w-3.5 rounded-full bg-teal/60" />
          </div>
        </div>

        {/* ── Floating accent dot (top-right corner) ── */}
        <motion.div
          className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-teal/20 ring-4 ring-teal/10"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Subtle bottom-left accent ── */}
        <motion.div
          className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-navy/10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <>
      <section
        aria-label="Hero — Clarivance healthcare agency documentation"
        className="bg-off-white px-3 sm:px-6 py-20 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
            {/* ── Left: Text content ── */}
            <motion.div
              className="flex flex-col gap-6 md:w-[50%]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Eyebrow */}
              <motion.p
                variants={fadeIn}
                className="text-xs font-semibold uppercase tracking-widest text-teal"
              >
                Specialists in healthcare agency documentation
              </motion.p>

              {/* H1 */}
              <motion.h1
                variants={fadeUp}
                className="text-3xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-5xl"
              >
                We help home health, assisted living and DDA agencies get
                licensed, compliant and operational{" "}
                <span className="text-teal">— faster.</span>
              </motion.h1>

              {/* Body copy */}
              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base leading-relaxed text-slate sm:text-lg"
              >
                We handle the documentation and licensing paperwork so you can
                focus on building the agency you&apos;ve worked for.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 sm:flex-row"
              >
                {/* Primary */}
                <Link
                  href="/contact"
                  className={[
                    "inline-flex items-center justify-center rounded-lg sm:rounded-full",
                    "bg-navy px-7 py-3.5 text-sm font-semibold text-white",
                    "transition-all duration-150 hover:bg-navy-hover active:scale-[0.98]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
                  ].join(" ")}
                >
                  Book a free call
                </Link>

                {/* Secondary */}
                <Link
                  href="/work"
                  className={[
                    "inline-flex items-center justify-center rounded-lg sm:rounded-full",
                    "border border-navy/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-navy",
                    "transition-all duration-150 hover:border-navy hover:bg-navy/5 active:scale-[0.98]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
                  ].join(" ")}
                >
                  See our work
                </Link>
              </motion.div>
            </motion.div>

            {/* ── Right: Illustration ── */}
            <motion.div
              className="w-full md:w-[50%] animate-pulse hover:scale-105 transition-transform duration-300 ease-in-out"
              initial="hidden"
              animate="visible"
            >
              <DocumentIllustration />
            </motion.div>
          </div>
        </div>
      </section>
      <SocialProof />
      <Services />
      <OurSpecialties />
      <Testimonials
        subtitle="WHAT CLIENTS SAY"
        title="Results agencies count on"
        testimonials={testimonialsData}
        className="bg-white py-16"
      />
      <HowItWorks />
      <SectionCTA
        headline="Ready to get your agency off the ground?"
        subCopy="Book a free 20-minute call. No commitment, no pressure — just clarity on exactly what you need."
        primary={{ label: "Book a free call", href: "/contact" }}
        secondary={null}
      />
    </>
  );
}

"use client";

import Link from "next/link";
import { useId, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CTAButton {
  label: string;
  href: string;
}

interface SectionCTAProps {
  headline?: string;
  subCopy?: string;
  primary?: CTAButton;
  secondary?: CTAButton | null;
}

const DEFAULT_HEADLINE = "Ready to get your agency off the ground?";
const DEFAULT_SUBCOPY =
  "Book a free 20-minute call. No commitment, no pressure — just clarity on exactly what you need.";
const DEFAULT_PRIMARY: CTAButton = {
  label: "Book a free call",
  href: "/contact",
};
const DEFAULT_SECONDARY: CTAButton = { label: "Contact us", href: "/contact" };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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

export default function SectionCTA({
  headline = DEFAULT_HEADLINE,
  subCopy = DEFAULT_SUBCOPY,
  primary = DEFAULT_PRIMARY,
  secondary = DEFAULT_SECONDARY,
}: SectionCTAProps) {
  const headingId = useId();

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const resolvedSecondary =
    secondary === undefined ? DEFAULT_SECONDARY : secondary;

  return (
    <section
      ref={ref}
      aria-labelledby={headingId}
      className="w-full bg-navy px-6 py-20 sm:py-24"
    >
      <motion.div
        className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Headline */}
        <motion.h2
          id={headingId}
          variants={fadeUp}
          className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
        >
          {headline}
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          variants={fadeIn}
          className="max-w-lg text-base leading-relaxed text-white/70"
        >
          {subCopy}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {/* Primary — white filled */}
          <Link
            href={primary.href}
            className={[
              "inline-flex w-full items-center justify-center sm:w-auto",
              "rounded-lg bg-white px-7 py-3",
              "text-sm font-semibold text-navy",
              "transition-all duration-150 hover:bg-white/90 active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
            ].join(" ")}
          >
            {primary.label}
          </Link>

          {/* Secondary — teal outline, only rendered when not suppressed */}
          {resolvedSecondary !== null && (
            <Link
              href={resolvedSecondary.href}
              className={[
                "inline-flex w-full items-center justify-center sm:w-auto",
                "rounded-lg border border-teal px-7 py-3",
                "bg-transparent text-sm font-semibold text-teal",
                "transition-all duration-150 hover:bg-teal/10 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
              ].join(" ")}
            >
              {resolvedSecondary.label}
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

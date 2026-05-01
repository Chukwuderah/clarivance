"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import SectionCTA from "@/components/shared/SectionCTA";
import Testimonials, { Testimonial } from "@/components/shared/Testimonials";

export interface IndustryPageData {
  eyebrow: string;
  headline: string;
  subCopy: string;
  documentsEyebrow: string;
  documentsHeadline: string;
  documents: string[];
  statNumber: string;
  statLabel: string;
  statSubLabel: string;
  testimonials: Testimonial[];
  ctaHeadline: string;
}

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

const listStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function InView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
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

function Hero({ data }: { data: IndustryPageData }) {
  return (
    <section
      aria-labelledby="industry-hero-heading"
      className="relative overflow-hidden bg-navy px-6 py-20 sm:py-24"
    >
      {/* Subtle diagonal lines */}
      <div
        className="pointer-events-none absolute right-0 top-0 opacity-[0.06]"
        aria-hidden="true"
      >
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
          <line
            x1="380"
            y1="-40"
            x2="700"
            y2="500"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="300"
            y1="-40"
            x2="620"
            y2="500"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="220"
            y1="-40"
            x2="540"
            y2="500"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeIn}
            className="mb-5 text-xs font-semibold uppercase tracking-widest text-teal-600"
          >
            {data.eyebrow}
          </motion.p>

          <motion.h1
            id="industry-hero-heading"
            variants={fadeUp}
            className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {data.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {data.subCopy}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function DocumentsSection({ data }: { data: IndustryPageData }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const mid = Math.ceil(data.documents.length / 2);
  const col1 = data.documents.slice(0, mid);
  const col2 = data.documents.slice(mid);

  return (
    <section
      ref={ref}
      aria-labelledby="documents-heading"
      className="bg-white px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 max-w-xl"
        >
          <motion.p
            variants={fadeIn}
            className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal"
          >
            {data.documentsEyebrow}
          </motion.p>
          <motion.h2
            id="documents-heading"
            variants={fadeUp}
            className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            {data.documentsHeadline}
          </motion.h2>
        </motion.div>

        {/* Checklist — two columns */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-0 sm:grid-cols-2">
          {[col1, col2].map((col, colIdx) => (
            <motion.ul
              key={colIdx}
              variants={listStagger}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col"
              role="list"
            >
              {col.map((doc) => (
                <motion.li
                  key={doc}
                  variants={listItem}
                  className="flex items-start gap-3 border-b border-border-light py-4 last:border-b-0"
                >
                  <Check
                    size={15}
                    strokeWidth={2.5}
                    className="mt-0.5 shrink-0 text-teal"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-charcoal sm:text-base">
                    {doc}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackRecordSection({ data }: { data: IndustryPageData }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="track-record-heading"
      className="bg-cloud px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Stat block */}
        <InView className="mb-12 text-center">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal"
          >
            Our track record
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              id="track-record-heading"
              className="relative flex flex-col items-start justify-center bg-white w-full h-40 sm:max-w-fit px-6 py-4 rounded-md shadow-2xl"
            >
              <span className="z-10 text-4xl font-bold tabular-nums tracking-tight text-navy sm:text-5xl mb-2">
                {data.statNumber}
              </span>
              <span className="text-base font-medium text-charcoal z-10">
                {data.statLabel}
              </span>
              <span className="text-base font-medium text-charcoal z-10">
                {data.statSubLabel}
              </span>

              <div className="absolute top-0 left-0 bg-[#e5f1f1] w-15 h-15 rounded-br-full" />
              <div className="absolute bottom-0 right-0 bg-[#e5f1f1] w-15 h-15 rounded-tl-full" />
            </motion.div>

            {/* Testimonials */}
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-full overflow-hidden lg:w-[calc(100%-24rem)] bg-transparent"
            >
              <Testimonials testimonials={data.testimonials} />
            </motion.div>
          </div>
        </InView>
      </div>
    </section>
  );
}

export default function IndustryDetailTemplate({
  data,
}: {
  data: IndustryPageData;
}) {
  return (
    <main id="main-content">
      <Hero data={data} />
      <DocumentsSection data={data} />
      <TrackRecordSection data={data} />
      <SectionCTA
        headline={data.ctaHeadline}
        subCopy="Book a free 20-minute call and we'll tell you exactly what your agency needs."
        primary={{ label: "Book a free call", href: "/contact" }}
        secondary={{ label: "See our work", href: "/work" }}
      />
    </main>
  );
}

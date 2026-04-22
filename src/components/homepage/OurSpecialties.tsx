"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const specialties = [
  "Home health",
  "Assisted living",
  "DDA/IDD services",
  "Adult day care",
  "Hospice",
  "Group home",
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  } as const,
};

export default function OurSpecialties() {
  return (
    <section className="bg-[#E5EDF5] px-6 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Text Content - Slides in from the left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600">
            industries we specialize in
          </p>
          <h2 className="text-4xl sm:text-6xl text-left text-navy font-semibold">
            We know your sector
          </h2>
          <p className="max-w-2xl text-charcoal text-lg leading-relaxed">
            Healthcare compliance documentation isn&apos;t generic — every
            sector has its own regulatory language, survey expectations, and
            licensing requirements. We&apos;ve worked across all of them.
          </p>
        </motion.div>

        {/* Specialties Tags - Staggered entrance */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center gap-3 flex-wrap justify-center md:justify-start"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                variants={tagVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1e293b",
                  transition: { duration: 0.2 },
                }}
                className="bg-navy px-5 py-2.5 rounded-full cursor-default shadow-sm"
              >
                <p className="text-sm font-bold text-white whitespace-nowrap">
                  {specialty}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Link with Arrow Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-teal"
            >
              <p className="text-base text-teal font-semibold group-hover:underline underline-offset-4 transition-all">
                Don&apos;t see your sector? We likely cover it.
              </p>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

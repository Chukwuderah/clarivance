"use client";

import { motion } from "framer-motion";

const process = [
  {
    id: 1,
    title: "Discovery Call",
    description:
      "We learn about your agency, your state and exactly what's needed.",
  },
  {
    id: 2,
    title: "We Build Your Package",
    description: "Custom documentation and guidance, delivered with precision.",
  },
  {
    id: 3,
    title: "You Launch with Confidence",
    description: "Fully compliant, ready for survey, ready to serve clients.",
  },
];

// Animation Variants for the staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Delay between each card's animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
  return (
    <section className="max-w-7xl px-6 py-16 sm:py-24 mx-auto overflow-hidden">
      {/* Header Animations */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
          the process
        </p>
        <h2 className="text-4xl text-left text-navy font-bold max-w-3xl leading-tight">
          From First Call To Fully Licensed
        </h2>
      </motion.div>

      {/* Steps Container (Triggers staggering) */}
      <motion.div
        className="flex flex-col sm:flex-row items-stretch justify-center gap-8 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        {process.map((step) => (
          <motion.div
            key={step.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 15px 30px -5px rgba(0,0,0,0.05)",
              transition: { duration: 0.3 },
            }}
            className="group flex flex-1 flex-col items-start gap-4 bg-white p-8 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.02)] border border-slate-100 transition-colors duration-300 hover:border-teal-100"
          >
            {/* Animated Number Circle */}
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-navy text-white font-extrabold text-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-teal-600">
              {step.id}
            </div>

            <div className="space-y-3 mt-4 flex-1">
              <h3 className="text-xl font-bold text-navy leading-tight">
                {step.title}
              </h3>
              <p className="max-w-sm text-slate-600 leading-relaxed text-base">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

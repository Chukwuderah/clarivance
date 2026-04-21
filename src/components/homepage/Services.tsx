"use client";

import Link from "next/link";
import { FileText, ListCheck, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Technical Writing & Documentation",
    description:
      "Policy manuals, handbooks & regulatory documents built to your state's exact requirements.",
    icon: FileText,
    href: "/services/documentation",
  },
  {
    title: "Licensing & Applications Consulting",
    description:
      "We guide you through every step of the licensing and accreditation process.",
    icon: ListCheck,
    href: "/services/consulting",
  },
  {
    title: "Agency Website Development",
    description:
      "A professional, client-ready website built with modern tools - fast and credible.",
    icon: Globe,
    href: "/services/website-development",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card's entrance
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section className="px-6 sm:px-20 py-16 overflow-hidden">
      {/* Header Animations */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-4">
          Our Services
        </p>
        <h2 className="text-4xl sm:text-6xl text-left text-navy font-semibold max-w-3xl">
          Three ways we help your agency succeed
        </h2>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
            className="group flex flex-col gap-4 border border-slate-200 rounded-xl p-8 bg-white transition-colors duration-300 hover:border-teal-200"
          >
            {/* Icon Animation */}
            <div className="bg-teal-50 w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-teal-600">
              <service.icon className="w-6 h-6 text-teal-600 transition-colors duration-300 group-hover:text-white" />
            </div>

            <h3 className="text-xl font-bold text-navy">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              {service.description}
            </p>

            <Link
              href={service.href}
              className="text-teal-600 font-semibold flex items-center gap-2 mt-4 group/link"
            >
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

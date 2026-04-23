"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Lock, ArrowRight, ChevronDown } from "lucide-react";
import SectionCTA from "@/components/shared/SectionCTA";

// --- Data Constants ---

const deliverables = [
  "Policy & Procedure Manuals",
  "Job Descriptions",
  "Infection Control Plans",
  "QAPI Documentation",
  "Medicare/Medicaid Enrollment Support",
  "Employee Handbooks",
  "Organizational Charts",
  "Emergency Preparedness Plans",
  "Intake Forms & Consent Packets",
  "Conditions of Participation (CoP) Policies",
];

const processSteps = [
  {
    id: 1,
    title: "Intake call",
    description: "understand license type, state, and care model",
  },
  {
    id: 2,
    title: "Regulatory research",
    description: "we identify every applicable requirement",
  },
  {
    id: 3,
    title: "Drafting & revisions",
    description: "first draft + up to 2 revision rounds",
  },
  {
    id: 4,
    title: "Final delivery",
    description: "Word-editable (.docx) + PDF",
  },
];

const pricingPlans = [
  {
    title: "Starter",
    price: "Starting from $X",
    features: [
      "Policy & Procedure Manual",
      "Employee Handbook",
      "1 Revision Round",
      "Standard Delivery (4 weeks)",
    ],
    buttonText: "Choose Starter",
    isPopular: false,
  },
  {
    title: "Standard",
    price: "Starting from $X",
    features: [
      "Everything in Starter",
      "Job Descriptions",
      "Infection Control Plans",
      "2 Revision Rounds",
      "Priority Support",
    ],
    buttonText: "Choose Standard",
    isPopular: true,
  },
  {
    title: "Comprehensive",
    price: "Contact for pricing",
    features: [
      "Everything in Standard",
      "Emergency Preparedness Plans",
      "QAPI Documentation",
      "Intake Forms & Consent Packets",
      "Unlimited Revisions",
      "Expedited Delivery Available",
    ],
    buttonText: "Contact Us",
    isPopular: false,
  },
];

const faqs = [
  {
    question: "Do you cover my state or country?",
    answer:
      "Yes, we provide customized documentation tailored to the specific regulatory requirements of your state or country.",
  },
  {
    question: "Can you update documents I already have?",
    answer:
      "Absolutely. We can review your existing documentation, identify gaps against current regulations, and bring everything up to standard.",
  },
  {
    question: "What format will I receive?",
    answer:
      "All documents are delivered in both PDF format for immediate use and editable Word (.docx) formats so you can make future updates.",
  },
  {
    question: "How long does it take?",
    answer:
      "Standard turnaround is typically 4 weeks, depending on the complexity of your care model and state regulations. Expedited options are available.",
  },
];

// --- Animation Variants ---

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// --- Sub-components ---

interface FAQ {
  question: string;
  answer: string;
}

function FAQAccordion({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-lg bg-white overflow-hidden mb-4 transition-colors hover:border-teal">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-3 text-left cursor-pointer"
      >
        <span className="font-semibold text-navy">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-navy transition-transform duration-300 ${
            isOpen ? "rotate-180 transition-transform duration-300" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-3 text-charcoal border-t border-slate-100">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main Page Component ---

export default function DocumentationServicePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20 sm:py-32 overflow-hidden px-6">
        {/* Abstract background lines */}
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <svg
            width="600"
            height="800"
            viewBox="0 0 600 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400 -100 L800 600" stroke="white" strokeWidth="2" />
            <path d="M300 -100 L700 600" stroke="white" strokeWidth="2" />
            <path d="M200 -100 L600 600" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-6"
          >
            TECHNICAL WRITING & DOCUMENTATION
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl text-off-white font-bold max-w-3xl leading-tight mb-6"
          >
            Policy manuals and procedure handbooks that satisfy regulators — the
            first time.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white max-w-2xl mb-10 leading-relaxed"
          >
            We write the documents your state requires, customized to your
            license type, your accreditation body, and your specific care model.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-block border border-teal hover:border-off-white hover:bg-white/10 transition-all text-center text-teal hover:text-off-white px-8 py-3 rounded-md font-medium"
            >
              Book a free call
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3"
          >
            DELIVERABLES
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-12"
          >
            What you receive
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <div className="mt-1 bg-teal-50 rounded-full p-1">
                  <Check className="w-4 h-4 text-teal-600" strokeWidth={3} />
                </div>
                <p className="text-charcoal">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-sm text-slate-500 italic"
          >
            All documents customized to your state or country&apos;s regulatory
            requirements.
          </motion.p>
        </motion.div>
      </section>

      {/* Sample Work Section */}
      <section className="bg-slate-50 py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3"
          >
            SAMPLE WORK
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-10"
          >
            What our documents look like
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="relative w-full max-w-7xl bg-white border border-slate-200 rounded-xl shadow-sm backdrop-blur-lg h-80 flex flex-col items-center justify-center mb-8 overflow-hidden group"
          >
            {/* Faux document lines */}
            <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-30 pointer-events-none">
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
            </div>
            {/* Lock Icon */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <Lock className="w-6 h-6 text-charcoal" />
              <p className="font-medium text-charcoal">
                Sample available on request
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 group"
            >
              Download our free Home Health Startup Documentation Checklist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold"
          >
            Our documentation process
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.id}
              variants={fadeInUp}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-navy text-white font-bold text-lg shrink-0">
                {step.id}
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="bg-slate-50 py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.p
              variants={fadeInUp}
              className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3"
            >
              PRICING
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold"
            >
              Simple, transparent packages
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative bg-white rounded-2xl p-8 flex flex-col h-full ${
                  plan.isPopular
                    ? "border-2 border-[#0d1b2a] shadow-xl md:-mt-4 md:mb-4"
                    : "border border-slate-200 shadow-sm mt-0"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-slate-900 pb-6 border-b border-slate-100 mb-6">
                  {plan.price}
                </p>

                <ul className="flex flex-col gap-4 mb-8 grow">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 text-sm"
                    >
                      <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    plan.isPopular
                      ? "bg-[#0d1b2a] text-white hover:bg-slate-800"
                      : "bg-white text-slate-900 border border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3"
          >
            COMMON QUESTIONS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold"
          >
            Frequently asked
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <FAQAccordion
                faq={faq}
                isOpen={openFaqIndex === index}
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Reused Section CTA */}
      <SectionCTA
        headline="Ready to get your documentation done right?"
        primary={{ label: "Get Started", href: "/contact" }}
        secondary={{ label: "View All Services", href: "/services" }}
      />
    </section>
  );
}

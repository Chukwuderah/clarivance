"use client";

import { motion } from "framer-motion";
import SectionCTA from "@/components/shared/SectionCTA";
import Testimonials from "@/components/shared/Testimonials";
import {
  ListChecks,
  MapPin,
  MessageSquareText,
  Search,
  ShieldPlus,
  Trophy,
  Check,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: MapPin,
    title: "State & country license applications",
    desc: "Comprehensive support for regulatory bodies across multiple jurisdictions.",
  },
  {
    icon: Trophy,
    title: "Accreditation prep",
    desc: "Preparation for CHAP, ACHC, and Joint Commission standards.",
  },
  {
    icon: ListChecks,
    title: "Survey-ready compliance checklists",
    desc: "Detailed audit tools to ensure readiness before the survey begins.",
  },
  {
    icon: Search,
    title: "Application gap analysis",
    desc: "Identify missing documentation or structural flaws pre-submission.",
  },
  {
    icon: MessageSquareText,
    title: "Post-submission follow-up support",
    desc: "Liaising with agencies to resolve RFIs quickly.",
  },
  {
    icon: ShieldPlus,
    title: "Compliance program reviews",
    desc: "Ongoing structural analysis to maintain good standing.",
  },
];

const locations: LocationData[] = [
  {
    country: "United States",
    states: [
      "Texas",
      "Florida",
      "Georgia",
      "New York",
      "California",
      "Ohio",
      "Illinois",
      "Pennsylvania",
      "North Carolina",
      "Michigan",
    ],
  },
  {
    country: "United Kingdom",
    states: ["England", "Scotland", "Wales", "Northern Ireland"],
  },
  {
    country: "International",
    note: "Other countries served on request",
  },
];

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    description:
      "The Clinical Architect provided invaluable clarity during our Joint Commission accreditation. Their surveyor-ready checklists ensured we had no surprises. A truly premium consulting experience.",
    name: "Dr. Eleanor Vance",
    agencyName: "Medical Director, Apex Health Group",
  },
  {
    id: 2,
    rating: 5,
    description:
      "Expanding our agency into three new states felt daunting until we partnered with them. Their gap analysis caught critical documentation flaws that would have delayed us by months.",
    name: "Sarah K.",
    agencyName: "Home Health Agency, Texas",
  },
];

const pricingPlans = [
  {
    title: "Basic",
    price: "Document review and high-level guidance.",
    features: [
      "Application template access",
      "One-time gap analysis",
      "2 hours consultation",
    ],
    buttonText: "Inquire",
    isPopular: false,
  },
  {
    title: "Standard",
    price: "Full application support and survey preparation.",
    features: [
      "Everything in Basic",
      "Surveyor-ready checklists",
      "Submission support",
      "Pre-survey mock audit",
    ],
    buttonText: "Get Started",
    isPopular: true,
  },
  {
    title: "Premium",
    price: "End-to-end engagement with dedicated account manager.",
    features: [
      "Everything in Standard",
      "Dedicated compliance officer",
      "Post-submission RFI resolution",
      "Ongoing quarterly reviews",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

interface LocationData {
  country: string;
  states?: string[];
  note?: string;
}

const LocationBlock = ({ data }: { data: LocationData }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl sm:text-2xl mb-2">{data.country}</h3>

      {data.states ? (
        <div className="flex flex-wrap gap-2">
          {data.states.map((state: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-[#A3EEFF] text-teal"
            >
              {state}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm italic text-charcoal">{data.note}</p>
      )}
    </div>
  );
};

export default function ConsultingPage() {
  const [us, uk, intl] = locations;

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-navy text-white py-24 px-6 text-center">
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
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto flex flex-col items-center justify-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-6"
          >
            Licensing & Application Consulting
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-3xl text-off-white md:text-6xl font-bold mt-4 leading-tight"
          >
            Navigate the licensing process without the guesswork.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-base text-center md:text-lg text-blue-100"
          >
            We&apos;ve guided agencies through state licensing, CHAP
            accreditation, ACHC certification, and Joint Commission surveys. We
            know the process — and we walk through it with you.
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3"
          >
            services included
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold mb-10"
          >
            What we do for you
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((item, i) => (
              <div className="flex items-start gap-3" key={i}>
                <motion.div
                  variants={fadeUp}
                  className="shrink-0 bg-[#f7f3f0] p-3 rounded-lg"
                >
                  <item.icon className="w-8 h-8 text-teal" />
                </motion.div>
                <motion.div variants={fadeUp} className="">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm sm:text-base text-charcoal">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3"
          >
            coverage
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold mb-14"
          >
            We operate wherever you are
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT SIDE (US) */}
            <div>{us && <LocationBlock data={us} />}</div>

            {/* RIGHT SIDE (UK + INTERNATIONAL STACKED) */}
            <div className="flex flex-col gap-10">
              {uk && <LocationBlock data={uk} />}
              {intl && <LocationBlock data={intl} />}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-4"
          >
            our methodology
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold mb-12"
          >
            A structured approach to accreditation
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Discovery",
              "Gap Analysis",
              "Documentation",
              "Submission Support",
              "Post-submission Q&A",
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="w-10 h-10 mx-auto rounded-full bg-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="mt-3 text-sm font-semibold text-charcoal">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonialsData} />

      {/* PRICING */}
      <section className="py-20 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`relative bg-white rounded-2xl p-8 flex flex-col h-full ${
                  plan.isPopular
                    ? "border-2 border-teal shadow-xl md:-mt-4 md:mb-4"
                    : "border border-slate-200 shadow-sm mt-0"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    recommended
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-sm md:text-base font-medium text-charcoal pb-6 border-b border-slate-100 mb-6">
                  {plan.price}
                </p>

                <ul className="flex flex-col gap-4 mb-8 grow">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 text-sm"
                    >
                      <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-md font-medium transition-colors cursor-pointer ${
                    plan.isPopular
                      ? "bg-navy text-white hover:bg-slate-800"
                      : "bg-white text-slate-900 border border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        headline="Ready to get licensed without the confusion?"
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "View All Services", href: "/services" }}
      />
    </main>
  );
}

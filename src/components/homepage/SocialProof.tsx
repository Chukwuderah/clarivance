"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  { label: "Agencies Helped", value: 50, suffix: "+" },
  { label: "Documents Delivered", value: 200, suffix: "+" },
  { label: "Continents Served", value: 3, suffix: "" },
];

const states = [
  "Texas",
  "Florida",
  "Maryland",
  "New Jersey",
  "Ohio",
  "United Kingdom",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Intl.NumberFormat("en-US").format(Math.round(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <h1 ref={ref} className="text-4xl font-bold">
      0{suffix}
    </h1>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-[#D8E2FF] px-3 sm:px-6 py-16 w-full overflow-hidden">
      <div className="mx-auto mt-12 max-w-7xl">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 sm:border-r-2 sm:border-slate-400 last:border-0"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-navy font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee Section */}
        <div className="mt-16 relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex shrink-0 gap-4 pr-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20, // Adjust this to make it faster/slower
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* We duplicate the array to create a seamless infinite loop */}
            {[...states, ...states].map((state, index) => (
              <div
                key={index}
                className="bg-[#A3EEFF] px-6 py-2.5 rounded-full hover:bg-[#8adef0] transition-colors cursor-default"
              >
                <p className="text-sm font-semibold text-teal whitespace-nowrap">
                  {state}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

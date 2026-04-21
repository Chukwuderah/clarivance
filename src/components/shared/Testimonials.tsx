"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export interface Testimonial {
  id: string | number;
  rating: number;
  description: string;
  name: string;
  agencyName: string;
}

export interface TestimonialsProps {
  subtitle?: string;
  title: string;
  testimonials: Testimonial[];
}

export default function Testimonials({
  subtitle = "WHAT CLIENTS SAY",
  title,
  testimonials,
}: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll events to update the active dot on mobile
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newActiveIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newActiveIndex);
    }
  };

  // Allow clicking a dot to scroll to the specific card
  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Framer motion variants for stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {subtitle && (
            <h3 className="text-xs md:text-sm font-bold text-teal-600 uppercase tracking-wider mb-3">
              {subtitle}
            </h3>
          )}
          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight">
            {title}
          </h2>
        </div>

        {/* Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="shrink-0 w-[90%] sm:w-100 md:w-full md:flex-1 snap-center bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between h-auto min-h-70"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "fill-gold text-gold"
                            : "fill-slate-200 text-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-charcoal italic text-lg leading-relaxed mb-8">
                    &quot;{testimonial.description}&quot;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-auto">
                  <p className="font-bold text-navy flex items-center gap-2">
                    <span className="font-bold">—</span> {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    {testimonial.agencyName}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex justify-center gap-2 mt-2 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-slate-800 w-6"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FileSearch, ArrowLeft, Phone } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
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

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const QUICK_LINKS = [
  { label: "Documentation", href: "/services/documentation" },
  { label: "Consulting", href: "/services/consulting" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Home Health", href: "/industries/home-health" },
  { label: "Assisted Living", href: "/industries/assisted-living" },
  { label: "DDA Services", href: "/industries/dda" },
  { label: "Our Work", href: "/work" },
  { label: "About Us", href: "/about" },
];

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        pathname,
      );
    }
  }, [pathname]);

  return (
    <div
      id="main-content"
      className="flex min-h-[calc(100vh-57px)] flex-col bg-off-white"
    >
      {/* ── Hero block ── */}
      <section
        aria-labelledby="not-found-heading"
        className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center"
      >
        <motion.div
          className="flex max-w-lg flex-col items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Icon */}
          <motion.div
            variants={iconVariants}
            className="relative flex h-20 w-20 items-center justify-center"
            aria-hidden="true"
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-teal/10"
              animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-teal-light">
              <FileSearch size={28} strokeWidth={1.75} className="text-teal" />
            </div>
          </motion.div>

          {/* 404 badge */}
          <motion.p
            variants={fadeIn}
            className="text-xs font-semibold uppercase tracking-widest text-teal"
          >
            404 — Page not found
          </motion.p>

          {/* Heading */}
          <motion.h1
            id="not-found-heading"
            variants={fadeUp}
            className="text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl"
          >
            This page doesn&apos;t exist
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-slate sm:text-lg"
          >
            The page you&apos;re looking for{" "}
            <code className="bg-teal px-2 py-1 rounded text-sm text-gray-900 dark:text-white">
              {pathname || "unknown"}
            </code>{" "}
            might have been moved, renamed, or never existed. Let&apos;s get you
            back on track.
          </motion.p>

          {/* Primary actions */}
          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Link
              href="/"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-md group",
                "bg-navy px-7 py-3.5 text-sm font-semibold text-white",
                "transition-all duration-150 hover:bg-navy-hover active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
              ].join(" ")}
            >
              <ArrowLeft size={15} strokeWidth={2.5} className="group-hover:-translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
              Back to home
            </Link>

            <Link
              href="/contact"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-md",
                "border border-navy/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-navy",
                "transition-all duration-150 hover:border-navy hover:bg-navy/5 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
              ].join(" ")}
            >
              <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
              Book a free call
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Quick links ── */}
      <section
        aria-labelledby="quick-links-heading"
        className="border-t border-border-light bg-[#E5EDF5] px-6 py-12"
      >
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <p
              id="quick-links-heading"
              className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate"
            >
              Or jump to a page
            </p>

            <nav
              aria-label="Quick links to site pages"
              className="max-w-3xl mx-auto"
            >
              <ul
                className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-2.5"
                role="list"
              >
                {QUICK_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.55 + i * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      className={[
                        "inline-flex items-center rounded-xl px-4 py-2",
                        "border border-border bg-off-white text-sm font-medium text-charcoal",
                        "transition-all duration-150",
                        "hover:border-teal hover:bg-teal-light hover:text-navy",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-1",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

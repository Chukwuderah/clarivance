import Link from "next/link";

const SERVICES = [
  { label: "Documentation", href: "/services/documentation" },
  { label: "Consulting", href: "/services/consulting" },
  { label: "Web Development", href: "/services/web-development" },
];

const INDUSTRIES = [
  { label: "Home Health", href: "/industries/home-health" },
  { label: "Assisted Living", href: "/industries/assisted-living" },
  { label: "DDA Services", href: "/industries/dda" },
  { label: "Adult Day Care", href: "/industries/adult-day-care" },
  { label: "Hospice", href: "/industries/hospice" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const CURRENT_YEAR = new Date().getFullYear();

interface FooterColumnProps {
  heading: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ heading, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-white">{heading}</h3>
      <ul className="flex flex-col gap-3" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={[
                "text-sm text-white/60 transition-colors duration-150",
                "hover:text-white hover:underline focus-visible:outline-none focus-visible:underline focus-visible:text-white",
              ].join(" ")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t border-white/10 bg-[#001A42]"
    >
      {/* ── Main columns ── */}
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="w-fit text-lg font-semibold text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:underline"
              aria-label="Clarivance — go to homepage"
            >
              Clarivance
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Specialist documentation, licensing consulting, and agency
              websites for home health, assisted living, and DDA providers.
            </p>
            <p className="text-sm text-white/40">
              Serving clients across the US, UK, and beyond.
            </p>
          </div>

          {/* Col 2 — Services */}
          <FooterColumn heading="Services" links={SERVICES} />

          {/* Col 3 — Industries */}
          <FooterColumn heading="Industries" links={INDUSTRIES} />

          {/* Col 4 — Company + CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="flex flex-col gap-3" role="list">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "text-sm text-white/60 transition-colors duration-150",
                      "hover:text-white hover:underline focus-visible:outline-none focus-visible:underline focus-visible:text-white",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Inline CTA */}
            <Link
              href="/contact"
              className={[
                "mt-2 inline-flex items-center justify-center w-full sm:w-fit rounded-lg sm:rounded-full",
                "border border-teal px-5 py-2 text-sm font-semibold text-teal",
                "transition-all duration-150 hover:bg-teal/10 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
              ].join(" ")}
            >
              Book a free call
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          {/* Copyright */}
          <p className="text-xs text-white/40">
            &copy; {CURRENT_YEAR} Clarivance. All rights reserved.
          </p>

          {/* Legal links */}
          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-5" role="list">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "text-xs text-white/40 transition-colors duration-150",
                      "hover:text-white hover:underline focus-visible:outline-none focus-visible:underline focus-visible:text-white/70",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

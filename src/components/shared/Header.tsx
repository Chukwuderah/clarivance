"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type NavChild = { label: string; href: string; description?: string };
type NavItem =
  | { label: string; href: string; children: NavChild[] }
  | { label: string; href: string; children?: never };

const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Documentation",
        href: "/services/documentation",
        description: "Policy manuals, handbooks & regulatory docs",
      },
      {
        label: "Consulting",
        href: "/services/consulting",
        description: "Licensing applications & accreditation prep",
      },
      {
        label: "Web Development",
        href: "/services/web-development",
        description: "Professional websites for healthcare agencies",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Home Health",
        href: "/industries/home-health",
        description: "CoPs, OASIS, Medicare/Medicaid enrollment",
      },
      {
        label: "Assisted Living",
        href: "/industries/assisted-living",
        description: "ALF regulations, resident rights & policies",
      },
      {
        label: "DDA Services",
        href: "/industries/dda",
        description: "Person-centered plans, behavior support docs",
      },
    ],
  },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

function useIsActive(item: NavItem): boolean {
  const pathname = usePathname();
  if (pathname === item.href) return true;
  if (item.children) {
    return item.children.some((child) => pathname.startsWith(child.href));
  }
  return pathname.startsWith(item.href) && item.href !== "/";
}

interface DropdownChildProps {
  child: NavChild;
  onClose: () => void;
}

function DropdownChild({ child, onClose }: DropdownChildProps) {
  const pathname = usePathname();
  const isActive =
    pathname === child.href || pathname.startsWith(child.href + "/");

  return (
    <li role="none">
      <Link
        href={child.href}
        role="menuitem"
        onClick={onClose}
        className={[
          "group flex flex-col gap-0.5 rounded-lg px-3 py-2.5",
          "outline-none transition-colors duration-150",
          "focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-1",
          isActive
            ? "bg-teal-light text-navy"
            : "text-charcoal hover:bg-teal-light hover:text-navy",
        ].join(" ")}
      >
        <span className="text-sm font-semibold leading-tight">
          {child.label}
        </span>
        {child.description && (
          <span className="text-xs leading-snug text-slate group-hover:text-slate">
            {child.description}
          </span>
        )}
      </Link>
    </li>
  );
}

interface DropdownProps {
  item: NavItem & { children: NavChild[] };
  isActive: boolean;
}

function DropdownItem({ item, isActive }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={[
          "flex items-center gap-1 text-xs font-semibold uppercase tracking-widest",
          "p-1 outline-none transition-colors duration-150 cursor-pointer",
          "focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
          isActive
            ? "border-b-2 border-teal text-navy"
            : "text-slate hover:text-navy",
        ].join(" ")}
      >
        {item.label}
        <ChevronDown
          size={13}
          strokeWidth={2.5}
          className={[
            "transition-transform duration-200",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown panel */}
      <div
        role="menu"
        aria-label={`${item.label} submenu`}
        className={[
          "absolute left-1/2 top-full z-50 mt-2 w-64",
          "-translate-x-1/2 rounded-xl border border-border bg-white",
          "origin-top shadow-lg shadow-navy/8 transition-all duration-200",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        ].join(" ")}
      >
        {/* Triangle notch */}
        <div
          aria-hidden="true"
          className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-border bg-white"
        />

        <ul className="p-2" role="none">
          {item.children.map((child) => (
            <DropdownChild key={child.href} child={child} onClose={close} />
          ))}
        </ul>

        {/* Footer — view all link */}
        <div className="border-t border-border-light px-4 py-2.5">
          <Link
            href={item.href}
            role="menuitem"
            onClick={close}
            className="text-xs font-semibold uppercase tracking-wider text-teal transition-colors hover:text-navy focus-visible:outline-none focus-visible:underline"
          >
            View all {item.label.toLowerCase()} →
          </Link>
        </div>
      </div>
    </li>
  );
}

interface NavLinkProps {
  item: NavItem & { children?: never };
  isActive: boolean;
}

function NavLink({ item, isActive }: NavLinkProps) {
  return (
    <li>
      <Link
        href={item.href}
        className={[
          "inline-block p-1 text-xs font-semibold uppercase tracking-widest",
          "outline-none transition-colors duration-150",
          "focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
          isActive
            ? "border-b-2 border-teal text-navy"
            : "text-slate hover:text-navy",
        ].join(" ")}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </Link>
    </li>
  );
}

function NavItemRenderer({ item }: { item: NavItem }) {
  const isActive = useIsActive(item);
  if (item.children) {
    return (
      <DropdownItem
        item={item as NavItem & { children: NavChild[] }}
        isActive={isActive}
      />
    );
  }
  return (
    <NavLink
      item={item as NavItem & { children?: never }}
      isActive={isActive}
    />
  );
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // FIX: removed useEffect(() => { onClose() }, [pathname]) — same rule.
  // Drawer closes on navigation via onClick handlers on every Link below.

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white",
          "shadow-2xl transition-transform duration-300 ease-in-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-border-light px-6 py-5">
          <Link
            href="/"
            onClick={onClose}
            className="text-xl font-semibold tracking-tight text-navy focus-visible:outline-none focus-visible:underline"
            aria-label="Clarivance home"
          >
            Clarivance
          </Link>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-md p-1.5 text-slate transition-colors hover:bg-teal-light hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto px-4 py-4"
        >
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isParentActive =
                pathname === item.href ||
                item.children?.some((c) => pathname.startsWith(c.href));

              if (item.children) {
                const isExpanded = expandedItem === item.label;
                return (
                  <li key={item.label}>
                    <button
                      onClick={() =>
                        setExpandedItem(isExpanded ? null : item.label)
                      }
                      aria-expanded={isExpanded}
                      className={[
                        "flex w-full items-center justify-between rounded-lg px-4 py-3",
                        "text-sm font-semibold uppercase tracking-widest transition-colors duration-150",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
                        isParentActive
                          ? "bg-teal-light text-navy"
                          : "text-slate hover:bg-teal-light hover:text-navy",
                      ].join(" ")}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        strokeWidth={2.5}
                        className={[
                          "transition-transform duration-200",
                          isExpanded ? "rotate-180" : "rotate-0",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </button>

                    <ul
                      className={[
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isExpanded
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0",
                      ].join(" ")}
                      aria-hidden={!isExpanded}
                    >
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className={[
                                "flex flex-col gap-0.5 rounded-lg px-6 py-2.5 transition-colors duration-150",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
                                childActive
                                  ? "text-navy"
                                  : "text-charcoal hover:text-navy",
                              ].join(" ")}
                              aria-current={childActive ? "page" : undefined}
                            >
                              <span className="text-sm font-medium leading-tight">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="text-xs text-slate">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                      <li>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center gap-1 rounded-lg px-6 py-2 text-xs font-semibold uppercase tracking-wider text-teal transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                        >
                          View all {item.label.toLowerCase()} →
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              }

              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={[
                      "block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-widest",
                      "transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
                      isActive
                        ? "bg-teal-light text-navy"
                        : "text-slate hover:bg-teal-light hover:text-navy",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer CTA */}
        <div className="border-t border-border-light px-6 py-6">
          <Link
            href="/contact"
            onClick={onClose}
            className={[
              "flex w-full items-center justify-center rounded-full",
              "bg-navy px-6 py-3.5 text-sm font-semibold text-white",
              "transition-colors duration-150 hover:bg-navy-hover",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Book a free call
          </Link>
          <p className="mt-3 text-center text-xs text-slate">
            No commitment · Free 20-minute discovery call
          </p>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-40 bg-white transition-shadow duration-200",
          scrolled ? "shadow-md shadow-navy/8" : "border-b border-border-light",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-navy transition-opacity hover:opacity-80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            aria-label="Clarivance — go to homepage"
          >
            Clarivance
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1" role="list">
              {NAV_ITEMS.map((item) => (
                <NavItemRenderer key={item.label} item={item} />
              ))}
            </ul>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={[
                "hidden items-center justify-center lg:inline-flex",
                "rounded-lg bg-navy px-5 py-2.5",
                "text-sm font-semibold text-white",
                "transition-colors duration-150 hover:bg-navy-hover",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
              ].join(" ")}
            >
              Book a free call
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className={[
                "inline-flex items-center justify-center rounded-md p-2",
                "text-slate transition-colors hover:bg-teal-light hover:text-navy",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
                "lg:hidden",
              ].join(" ")}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={closeMobile} />
    </>
  );
}

import type { Metadata } from "next";
import ServicesPageClient from "@/app/services/ServicesPageClient";

export const metadata: Metadata = {
  title: "Services — Clarivance",
  description:
    "Documentation, licensing consulting, and agency website development for home health, assisted living, and DDA providers.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}

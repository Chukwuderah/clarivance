import type { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata: Metadata = {
  title: "Industries — Clarivance",
  description:
    "Deep expertise in home health, assisted living, DDA/IDD services, adult day care, hospice, and group homes. Sector-specific documentation and compliance consulting.",
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}

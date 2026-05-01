import { Metadata } from "next";
import WorkPageClient from "./Workpageclient";

export const metadata: Metadata = {
  title: "Our Work — Clarivance",
  description:
    "Real outcomes for home health, assisted living, and DDA agencies across the US, UK, and beyond. Case studies and client testimonials.",
};

export default function OurWorkPage() {
  return <WorkPageClient />;
}

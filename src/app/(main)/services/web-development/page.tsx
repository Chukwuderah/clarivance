import type { Metadata } from "next";
import WebDevPageClient from "./WebDevPageClient";

export const metadata: Metadata = {
  title: "Agency Website Development — Clarivance",
  description:
    "Professional, fast-loading websites built for home health, assisted living, and DDA agencies. Modern tech, CMS, intake forms, and SEO included.",
};

export default function WebDevPage() {
  return <WebDevPageClient />;
}

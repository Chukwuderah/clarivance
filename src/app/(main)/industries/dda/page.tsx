import Industrydetailtemplate, {
  IndustryPageData,
} from "@/components/industry/Industrydetailtemplate";

const ddaData: IndustryPageData = {
  eyebrow: "DDA & IDD Providers",
  headline: "Compliance for Developmental Disability Services.",
  subCopy:
    "Navigate the complexities of DDA / IDD state requirements with custom policies that prioritize person-centered care and meet HCBS Settings Rule standards.",
  documentsEyebrow: "Quality Standards",
  documentsHeadline: "Pass your quality assurance and provider reviews",
  documents: [
    "Person-Centered Planning (PCP) Framework",
    "HCBS Settings Rule Compliance Manual",
    "Individual Rights & Advocacy Policies",
    "Critical Incident Reporting (CIR) Procedures",
    "Staff Competency & Sensitivity Training",
    "Behavioral Support & Intervention Plans",
    "Financial Management & Personal Funds Protocols",
    "Quality Improvement & Outcome Tracking",
  ],
  statNumber: "40+",
  statLabel: "DDA agencies supported",
  statSubLabel: "100% audit pass rate",
  testimonials: [
    {
      id: 1,
      rating: 5,
      description:
        "They truly understand the HCBS Settings Rule. Our auditor was impressed by the person-centered language throughout our entire manual.",
      name: "Linda T.",
      agencyName: "Community Pathways, Maryland",
    },
    {
      id: 2,
      rating: 5,
      description:
        "The behavior support templates saved us weeks of work. Comprehensive, compliant, and easy for our staff to implement.",
      name: "James C.",
      agencyName: "Inclusive Living Services, Washington",
    },
  ],
  ctaHeadline: "Need help with your DDA provider application?",
};

export default function DDA() {
  return (
    <section>
      <Industrydetailtemplate data={ddaData} />
    </section>
  );
}

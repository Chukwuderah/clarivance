import Industrydetailtemplate, {
  IndustryPageData,
} from "@/components/industry/Industrydetailtemplate";

const homeHealthData: IndustryPageData = {
  eyebrow: "Home Health Agencies",
  headline: "Compliance documentation built for Home Health.",
  subCopy:
    "We write the exact policies, procedures, and forms required by your state health department and accreditation bodies like CHAP or ACHC.",
  documentsEyebrow: "Required Deliverables",
  documentsHeadline: "Everything you need to pass your state survey",
  documents: [
    "Comprehensive Policy & Procedure Manual",
    "Infection Control & Exposure Plan",
    "Emergency Preparedness Plan (EPP)",
    "Quality Assurance (QAPI) Program",
    "Patient Admission & Consent Packets",
    "Employee Handbook & Job Descriptions",
    "Home Health Aide (HHA) Competency Checklists",
    "HIPAA Compliance & Privacy Manual",
  ],
  statNumber: "75+",
  statLabel: "home health agencies helped",
  statSubLabel: "across 12 states",
  testimonials: [
    {
      id: 1,
      rating: 5,
      description:
        "They delivered our entire policy and procedure manual in under 2 weeks. We passed our state survey on the first attempt with zero deficiencies.",
      name: "Sarah K.",
      agencyName: "Home Health Agency, Texas",
    },
    {
      id: 2,
      rating: 5,
      description:
        "Clarivance walked us through the entire CHAP accreditation process. We wouldn't have known where to start without their custom documentation.",
      name: "Marcus O.",
      agencyName: "Medicare-Certified Agency, Florida",
    },
  ],
  ctaHeadline: "Ready to get your home health agency licensed?",
};

export default function HomeHealth() {
  return (
    <section>
      <Industrydetailtemplate data={homeHealthData} />
    </section>
  );
}

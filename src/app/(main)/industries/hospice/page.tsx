import Industrydetailtemplate, {
  IndustryPageData,
} from "@/components/industry/Industrydetailtemplate";

const hospiceData: IndustryPageData = {
  eyebrow: "Hospice Agencies",
  headline: "Medicare-compliant hospice policy manuals.",
  subCopy:
    "We provide the high-level clinical and administrative documentation necessary to meet Medicare Conditions of Participation (CoPs) and accreditation by ACHC or Joint Commission.",
  documentsEyebrow: "Compliance Deliverables",
  documentsHeadline: "Comprehensive documentation for CoP compliance",
  documents: [
    "Medicare Conditions of Participation (CoPs) Manual",
    "Interdisciplinary Group (IDG) Protocols",
    "Bereavement & Spiritual Care Programs",
    "Hospice Aide & Volunteer Supervision Policies",
    "Pharmaceutical & Pain Management Protocols",
    "Inpatient & Respite Care Agreements",
    "Quality Assessment & Performance Improvement (QAPI)",
    "Patient Election & Consent Documentation",
  ],
  statNumber: "25+",
  statLabel: "hospice agencies accredited",
  statSubLabel: "Medicare & Medicaid ready",
  testimonials: [
    {
      id: 1,
      rating: 5,
      description:
        "Our ACHC surveyor specifically commented on how well-organized our IDG and QAPI documentation was. Highly recommend.",
      name: "Dr. Aris T.",
      agencyName: "Compassion Hospice, Arizona",
    },
    {
      id: 2,
      rating: 5,
      description:
        "Navigating the Medicare CoPs was daunting. Clarivance provided a roadmap that made our initial survey a success.",
      name: "Jennifer S.",
      agencyName: "Peaceful Transitions, Illinois",
    },
  ],
  ctaHeadline: "Is your hospice agency survey-ready?",
};

export default function Hospice() {
  return (
    <section>
      <Industrydetailtemplate data={hospiceData} />
    </section>
  );
}

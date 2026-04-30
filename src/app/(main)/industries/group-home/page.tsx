import Industrydetailtemplate, {
  IndustryPageData,
} from "@/components/industry/Industrydetailtemplate";

const groupHomeData: IndustryPageData = {
  eyebrow: "Group Homes & SIL",
  headline: "Residential care policies that meet Life Safety Codes.",
  subCopy:
    "Specialized documentation for community-based residential settings, focusing on resident safety, staff accountability, and state-specific residential care standards.",
  documentsEyebrow: "Facility Deliverables",
  documentsHeadline: "State-specific residential care manuals",
  documents: [
    "Residential House Rules & Resident Rights",
    "Life Safety & Fire Prevention Protocols",
    "Staff On-Call & Supervision Schedules",
    "Medication Storage & Administration Records",
    "Financial Management for Residents",
    "Incident & Grievance Reporting Systems",
    "Individualized Service Plan (ISP) Templates",
    "Community Integration & Transportation Policies",
  ],
  statNumber: "110+",
  statLabel: "residential homes licensed",
  statSubLabel: "across the US and Canada",
  testimonials: [
    {
      id: 1,
      rating: 5,
      description:
        "The life safety and fire drill protocols were life-savers. We had our residential license within weeks of applying.",
      name: "Kevin B.",
      agencyName: "Unity Residential Homes, Michigan",
    },
    {
      id: 2,
      rating: 5,
      description:
        "As a first-time owner, I didn't know the level of detail required for ISP tracking. Clarivance made it easy to understand.",
      name: "Michelle P.",
      agencyName: "New Beginnings Group Living, Ontario",
    },
  ],
  ctaHeadline: "Get your group home licensed today.",
};
export default function GroupHome() {
  return (
    <section>
      <Industrydetailtemplate data={groupHomeData} />
    </section>
  );
}

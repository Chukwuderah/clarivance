import Industrydetailtemplate, {
  IndustryPageData,
} from "@/components/industry/Industrydetailtemplate";

const assistedLivingData: IndustryPageData = {
  eyebrow: "Assisted Living Facilities",
  headline: "Custom ALF policies designed for state licensure.",
  subCopy:
    "From resident agreements to medication management protocols, we provide the specific documentation required by state regulatory boards to open and operate your facility.",
  documentsEyebrow: "Licensure Deliverables",
  documentsHeadline: "Everything you need for your initial inspection",
  documents: [
    "Resident Rights & Facility Rules Manual",
    "Medication Administration Records (MAR) Policies",
    "Staff Training & Background Check Protocols",
    "Emergency Intervention & Evacuation Plans",
    "Resident Admission & Care Agreement Packets",
    "Dining & Dietary Service Guidelines",
    "Housekeeping & Infection Control Manual",
    "Incident Reporting & Investigation Procedures",
  ],
  statNumber: "50+",
  statLabel: "assisted living facilities launched",
  statSubLabel: "nationwide compliance",
  testimonials: [
    {
      id: 1,
      rating: 5,
      description:
        "The medication management policies were exactly what the state inspector was looking for. We were licensed in record time.",
      name: "Elena R.",
      agencyName: "Golden Oaks Residential, Georgia",
    },
    {
      id: 2,
      rating: 5,
      description:
        "Setting up an ALF is a paperwork nightmare. Clarivance handled the manual so I could focus on hiring the right care staff.",
      name: "David W.",
      agencyName: "Sunrise Manor, Ohio",
    },
  ],
  ctaHeadline: "Ready to launch your assisted living facility?",
};

export default function AssistedLiving() {
  return (
    <section>
      <Industrydetailtemplate data={assistedLivingData} />
    </section>
  );
}

import Industrydetailtemplate, {
  IndustryPageData,
} from "@/components/industry/Industrydetailtemplate";

const adultDayCareData: IndustryPageData = {
  eyebrow: "Adult Day Care Centers",
  headline: "Customized manuals for Adult Day Health services.",
  subCopy:
    "Whether you follow a social or medical model, we provide the operational policies and activity programming documentation required for state certification and HCBS compliance.",
  documentsEyebrow: "Operational Deliverables",
  documentsHeadline: "Everything required for center certification",
  documents: [
    "Program Operational & Service Manual",
    "Participant Rights & Advocacy Handbook",
    "Activity Programming & Monthly Calendars",
    "Nutrition & Food Service Safety Policies",
    "Transportation & Outing Safety Protocols",
    "Participant Enrollment & Assessment Forms",
    "Staff Training & Volunteer Guidelines",
    "Emergency Drill & Disaster Response Plans",
  ],
  statNumber: "30+",
  statLabel: "adult day centers opened",
  statSubLabel: "100% certification success",
  testimonials: [
    {
      id: 1,
      rating: 5,
      description:
        "The activity and nutritional guidelines were so thorough. It made the state certification walkthrough incredibly smooth.",
      name: "Sonia L.",
      agencyName: "Evergreen Day Haven, New Jersey",
    },
    {
      id: 2,
      rating: 5,
      description:
        "We needed help transitioning to an integrated medical model. Clarivance updated our policies to meet the new clinical standards perfectly.",
      name: "Robert M.",
      agencyName: "Active Seniors Center, California",
    },
  ],
  ctaHeadline: "Ready to open your Adult Day Care center?",
};

export default function AdultDayCare() {
  return (
    <section>
      <Industrydetailtemplate data={adultDayCareData} />
    </section>
  );
}

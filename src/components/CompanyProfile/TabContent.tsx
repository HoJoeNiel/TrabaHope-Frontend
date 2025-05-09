import { Company } from "@/types";
import AboutTab from "./AboutTab";
import JobsTab from "./JobsTab";
import ReviewsTab from "./ReviewsTab";

type TabContentProps = {
  company: Company;
  activeTab: string;
};

export default function TabContent({ company, activeTab }: TabContentProps) {
  return (
    <div className="p-6">
      {activeTab === "about" && <AboutTab company={company} />}
      {activeTab === "jobs" && <JobsTab company={company} />}
      {activeTab === "reviews" && <ReviewsTab company={company} />}
    </div>
  );
}

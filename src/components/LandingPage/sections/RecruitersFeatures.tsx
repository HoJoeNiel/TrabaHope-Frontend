import { RECRUITERS_FEATURE } from "@/mocks/mock-data";

import FeatureCard from "../FeatureCard";
import peopleSearch from "@/assets/undraw_people-search_xpq4 (1).svg";
import { useNavigate } from "react-router-dom";

export default function RecruitersFeatures() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-fuchsia-100 h-[600px] py-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2">
        <div className="flex ">
          <img src={peopleSearch} alt="Business man" className="w-[430px]" />
        </div>
        <div>
          <h1 className="mt-1 text-3xl font-extrabold text-gray-900">
            For Recruiters
          </h1>
          <p className="mx-auto mt-3 mb-8 text-xl text-gray-500">
            Find the perfect candidates and streamline your hiring process with
            TrabaHope.
          </p>
          {RECRUITERS_FEATURE.map(({ icon, feature, description }) => (
            <FeatureCard
              key={description}
              icon={icon}
              feature={feature}
              description={description}
              className="bg-fuchsia-500"
            />
          ))}
          <button
            onClick={() => navigate("/signup/recruiter")}
            className="px-4 py-2 mt-6 font-bold text-white transition-transform duration-300 rounded-lg bg-fuchsia-500 hover:scale-105"
          >
            Sign up as Recruiter
          </button>
        </div>
      </div>
    </section>
  );
}

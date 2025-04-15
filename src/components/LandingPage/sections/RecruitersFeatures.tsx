import { RECRUITERS_FEATURE } from "@/constants/constants";

import FeatureCard from "../FeatureCard";
import peopleSearch from "@/assets/undraw_people-search_xpq4.svg";

export default function RecruitersFeatures() {
  return (
    <section className="w-full h-[600px] py-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2">
        <div>
          <h1 className="text-3xl mt-1 font-extrabold text-gray-900">
            For Recruiters
          </h1>
          <p className="mt-3 mb-8 mx-auto text-xl text-gray-500">
            Find the perfect candidates and streamline your hiring process with
            TrabaHope.
          </p>
          {RECRUITERS_FEATURE.map(({ icon, feature, description }) => (
            <FeatureCard
              icon={icon}
              feature={feature}
              description={description}
            />
          ))}
          <button className="gradient-bg text-white font-bold px-4 py-2 rounded-lg mt-6 transition-transform duration-300 hover:scale-105">
            Sign up as Recruiter
          </button>
        </div>
        <div className="flex justify-center">
          <img src={peopleSearch} alt="Business man" className="w-[430px]" />
        </div>
      </div>
    </section>
  );
}

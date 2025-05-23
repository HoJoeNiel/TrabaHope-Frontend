import { JOB_SEEKERS_FEATURE } from "@/mocks/mock-data";
import FeatureCard from "../FeatureCard";
import businessMan from "@/assets/undraw_business-man_0ifc (1).svg";
import { useNavigate } from "react-router-dom";

export default function ApplicantsFeatures() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-[600px] bg-teal-500/20 py-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2">
        <div>
          <h1 className="text-3xl mt-1 font-extrabold text-gray-900">
            For Job Seekers
          </h1>
          <p className="mt-3 mb-8 mx-auto text-xl text-gray-500">
            Find your dream job faster with TrabaHope's smart tools designed for
            applicants.
          </p>
          {JOB_SEEKERS_FEATURE.map(({ icon, feature, description }) => (
            <FeatureCard
              key={description}
              icon={icon}
              feature={feature}
              description={description}
              className="applicant-gradient"
            />
          ))}
          <button
            onClick={() => navigate("/signup/applicant")}
            className="applicant-gradient text-white font-bold px-4 py-2 rounded-lg mt-6 transition-transform duration-300 hover:scale-105"
          >
            Sign up as Applicant
          </button>
        </div>
        <div className="flex justify-center">
          <img src={businessMan} alt="Business man" className="w-[430px]" />
        </div>
      </div>
    </section>
  );
}

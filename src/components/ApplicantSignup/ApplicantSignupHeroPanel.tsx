import { APPLICANT_SIGNUP_FEATURE } from "@/mocks/mock-data";
import AuthFeatureCard from "../AuthFeatureCard";
import Logo from "@/assets/Blue_White_Professional_Mobile_App_Logo-removebg-preview.png";

export default function ApplicantSignupHeroPanel() {
  return (
    <div className="flex justify-start min-h-screen bg-gradient-to-r from-cyan-800 to-teal-800 max-md:h-auto max-md:pb-20 pt-28">
      <div className="w-full max-w-[720px] mx-16">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Trabahope logo" className="size-16" />
          <h1 className="text-2xl font-bold text-white max-lg:text-xl">
            TrabaHope
          </h1>
        </div>
        <div className="flex flex-col gap-1.5 mt-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-wide text-white max-lg:text-3xl">
            For Job Seekers
          </h1>
          <p className="text-2xl font-light tracking-wide text-white max-lg:text-xl">
            Find your perfect job match and advance your career with our
            AI-powered platform
          </p>
        </div>

        {APPLICANT_SIGNUP_FEATURE.map((item) => (
          <AuthFeatureCard
            key={item.description}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

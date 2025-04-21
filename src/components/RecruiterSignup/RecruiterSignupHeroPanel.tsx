import { RECRUITER_SIGNUP_FEATURE } from "@/constants/constants";
import AuthFeatureCard from "@/components/AuthFeatureCard";

export default function RecruiterSignupHeroPanel() {
  return (
    <div className="recruiter-gradient min-h-screen max-md:h-auto max-md:pb-20 flex justify-end pt-28">
      <div className="w-full max-w-[720px] mx-16">
        <div className="flex items-center space-x-3">
          <div className="size-12 max-lg:size-10 recruiter-gradient flex items-center justify-center shadow rounded-xl">
            <span className="text-white text-lg max-lg:text-base font-bold">
              T
            </span>
          </div>
          <h1 className="text-2xl max-lg:text-xl font-bold text-white">
            TrabaHope
          </h1>
        </div>

        <div className="flex flex-col gap-1.5 mt-8">
          <h1 className="text-white text-4xl max-lg:text-3xl font-extrabold tracking-wide mb-4">
            For Recruiters
          </h1>
          <p className="text-white text-2xl max-lg:text-xl font-light tracking-wide">
            Find the perfect candidates and streamline your hiring process with
            our AI-powered platform
          </p>
        </div>

        {RECRUITER_SIGNUP_FEATURE.map((item) => (
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

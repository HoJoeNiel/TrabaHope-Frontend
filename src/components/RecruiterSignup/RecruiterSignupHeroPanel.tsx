import { RECRUITER_SIGNUP_FEATURE } from "@/mocks/mock-data";
import AuthFeatureCard from "@/components/AuthFeatureCard";
import Logo from "@/assets/TrabahopeLogoPNG.png";

export default function RecruiterSignupHeroPanel() {
  return (
    <div className="flex justify-end min-h-screen bg-fuchsia-800/80 max-md:h-auto max-md:pb-20 pt-28">
      <div className="w-full max-w-[720px] mx-16">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Trabahope logo" className="size-16" />
          <h1 className="text-2xl font-bold text-white max-lg:text-xl">
            TrabaHope
          </h1>
        </div>

        <div className="flex flex-col gap-1.5 mt-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-wide text-white max-lg:text-3xl">
            For Recruiters
          </h1>
          <p className="text-2xl font-light tracking-wide text-white max-lg:text-xl">
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

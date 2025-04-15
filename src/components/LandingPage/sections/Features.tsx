import { FEATURES } from "@/constants/constants";
import FeatureCard from "../FeatureCard";

export default function Features() {
  return (
    <section className="w-full h-[500px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center">
          <h3 className="text-dusty-sky-blue font-semibold tracking-wide uppercase">
            AI-POWERED PLATFORM
          </h3>
          <h1 className="text-4xl mt-1 font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
            Smart matching for better careers
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            TrabaHope uses advanced AI to streamline the job search and hiring
            process for both applicants and recruiters.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-16">
          {FEATURES.map(({ icon, feature, description }) => (
            <FeatureCard
              icon={icon}
              feature={feature}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

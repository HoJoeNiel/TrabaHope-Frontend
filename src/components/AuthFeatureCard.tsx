import { ReactNode } from "react";

export default function AuthFeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20 mt-6">
      <div className="p-2 size-12 max-lg:size-10 bg-white/20 flex justify-center items-center rounded-full shadow mb-4">
        {icon}
      </div>
      <h2 className="text-white text-xl max-lg:text-lg font-semibold mb-1">
        {title}
      </h2>
      <p className="text-white/80 font-light max-lg:text-sm">{description}</p>
    </div>
  );
}

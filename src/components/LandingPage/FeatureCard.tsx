import { FeatureType } from "@/constants/constants";

export default function FeatureCard({
  icon,
  feature,
  description,
}: FeatureType) {
  return (
    <div className="flex space-x-3 items-start mb-2">
      <div className="gradient-bg flex items-center justify-center p-2 rounded-lg shadow">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-900 text-lg leading-6 font-medium">
          {feature}
        </h3>
        <p className="text-gray-500 text-base mt-2 mr-16">{description}</p>
      </div>
    </div>
  );
}

import { FeatureType } from "@/mocks/mock-data";

export default function FeatureCard({
  icon,
  feature,
  description,
  className,
}: FeatureType) {
  return (
    <div className="flex space-x-3 items-start mb-2">
      <div
        className={`flex items-center justify-center p-2 rounded-lg shadow ${className}`}
      >
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

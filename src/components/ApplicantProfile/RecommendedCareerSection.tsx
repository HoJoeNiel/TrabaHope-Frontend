export default function RecommendedCareerSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        Career Path Recommendations
      </h2>
      <div className="space-y-4">
        <div className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Senior Frontend Developer</h3>
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
              98% Match
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Based on your current skills and experience
          </p>
        </div>
        <div className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Frontend Team Lead</h3>
            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
              85% Match
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Potential growth path in 1-2 years
          </p>
        </div>
        <div className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Full Stack Developer</h3>
            <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded-full">
              70% Match
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Requires additional backend skills
          </p>
        </div>
      </div>
    </div>
  );
}

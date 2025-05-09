import { Company } from "@/types";
import { Star } from "lucide-react";

export default function ReviewsTab({ company }: { company: Company }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Employee Reviews</h2>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition flex items-center">
          <Star size={16} className="mr-2" />
          Write a Review
        </button>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">
              {company.averageRating}
            </div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < Math.round(company.averageRating ?? 0)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {company.reviewCount} reviews
            </div>
          </div>

          <div className="flex-1">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                // Mock percentages - would come from API
                const percent =
                  rating === 5
                    ? 65
                    : rating === 4
                    ? 25
                    : rating === 3
                    ? 7
                    : rating === 2
                    ? 2
                    : 1;

                return (
                  <div key={rating} className="flex items-center">
                    <div className="flex items-center w-12">
                      <span className="mr-1">{rating}</span>
                      <Star
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {percent}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Sample review - would be mapped from API data */}
      <div className="border-b pb-6 mb-6">
        <div className="flex justify-between mb-2">
          <div>
            <h3 className="font-medium">Senior Frontend Developer</h3>
            <div className="text-sm text-gray-600">Full-time • 2+ years</div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
        <p className="text-gray-700 mb-3">
          Great company culture and work-life balance. Management is supportive
          and the tech stack is modern. Lots of opportunities for professional
          growth and learning new technologies.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
            Great benefits
          </div>
          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
            Work-life balance
          </div>
          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
            Modern tech stack
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500">Posted March 15, 2025</div>
      </div>

      <div className="text-center">
        <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}

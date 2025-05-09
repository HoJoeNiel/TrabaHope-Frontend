import { Company } from "@/types";

export default function AboutTab({ company }: { company: Company }) {
  return (
    <div>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
        <p className="text-gray-700 whitespace-pre-line">{company.about}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">{company.mission}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Specialties</h2>
        <div className="flex flex-wrap gap-2">
          {company.specialties.map((specialty, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {company.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

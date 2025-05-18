import { UserTestimonyType } from "@/mocks/mock-data";

export default function TestimonyCard({
  photo,
  name,
  jobTitle,
  testimony,
}: UserTestimonyType) {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-6">
      <div className="flex space-x-4">
        <div>
          <img
            src={photo}
            alt="user profile picture"
            className="size-16 rounded-full"
          />
        </div>
        <div className="text-start mb-6">
          <h3 className="text-xl font-medium text-gray-900">{name}</h3>
          <p className="text-lg text-teal-600">{jobTitle}</p>
        </div>
      </div>
      <p className="text-gray-500 text-start text-lg">"{testimony}"</p>
    </div>
  );
}

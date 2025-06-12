import { Building, Calendar, Edit, MapPin } from "lucide-react";

import { formatDate } from "@/helpers";
import { useApplicantExperience } from "@/services/queries";
import { ApplicantAuth } from "@/types";

import Loading from "../Loading";
import AddWorkExperienceModal from "../WorkExperience/AddWorkExperienceModal";

export default function WorkExperienceAccordion({
  user,
}: {
  user: ApplicantAuth;
}) {
  const { data: experiences, isPending } = useApplicantExperience(user.id);

  return (
    <div className="p-8 mx-6 mb-8 bg-gray-800 border border-gray-700 rounded shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
          <Building className="size-6 text-cyan-500 " />
          Work Experience
        </h2>
        <button className="text-cyan-400 hover:text-cyan-300">
          <Edit className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-6">
        {isPending && <Loading />}
        {!isPending && !experiences?.length && (
          <div className="text-gray-200">
            You haven't added any past experiences yet.
          </div>
        )}
        {experiences?.map((exp) => (
          <div className="relative pl-8 border-l-2 border-gray-700">
            <div className="absolute top-0 w-4 h-4 border-2 border-gray-800 rounded-full -left-2 bg-cyan-500"></div>
            <div className="p-6 border border-gray-600 bg-gray-700/50 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-white">
                    {exp.jobTitle}
                  </h3>
                  <p className="mb-2 font-medium text-cyan-400">
                    {exp.companyName}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <AddWorkExperienceModal experience={exp} />
              </div>
              <p className="leading-relaxed text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <AddWorkExperienceModal />
    </div>
  );
}

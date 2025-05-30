import { getRelativeTimeAgo, isRecruiter } from "@/helpers";
import { useCompanyJobsStore } from "@/stores/useCompanyJobsStore";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useParams } from "react-router-dom";

export default function ViewCompanyJob() {
  const { jobId } = useParams();

  const jobs = useCompanyJobsStore((state) => state.jobs);
  const user = useLoggedInUserStore((state) => state.user);

  if (!isRecruiter(user)) throw new Error("User is not a recruiter/company.");

  const selectedJob = jobs.find((job) => job.id === jobId);

  if (!selectedJob) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="h-full py-12 mx-12">
      <h1 className="text-3xl font-bold text-gray-800">
        {selectedJob.jobTitle}
      </h1>
      <div className="flex my-2 space-x-2 text-lg">
        <span className="text-gray-600">{selectedJob.location}</span>
        <span className="text-green-700">
          Posted {getRelativeTimeAgo(selectedJob.timestamps.posted)}
        </span>
      </div>
      <span className="w-auto px-3 py-1 text-center bg-gray-200 rounded-lg shadow">
        {selectedJob.employmentType}
      </span>

      {/* Job Details */}
      <div className="mt-8">
        <h1 className="text-2xl font-semibold text-black">About the job</h1>

        {/* Who we are section / mission */}
        {user && user.role === "recruiter" && user.mission && (
          <div className="flex flex-col text-lg my-6 space-y-4 max-w-[80%]">
            <p className="font-semibold">Who we are:</p>
            <p>{user.mission}</p>
          </div>
        )}

        <div className="flex flex-col my-6 text-lg space-y-4 max-w-[80%]">
          <p className="font-semibold">Job Description</p>
          <p>{selectedJob.description}</p>
        </div>

        {/* JOB REQUIREMENTS */}
        <div className="flex flex-col my-6 space-y-4 text-lg max-w-[80%]">
          <p className="font-semibold">Requirements</p>
          {selectedJob.requirements.length === 1 && (
            <p>{selectedJob.requirements}</p>
          )}
          {selectedJob.requirements.length > 1 && (
            <ul className="list-disc list-inside indent-6">
              {selectedJob.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          )}
        </div>

        {/* JOB RESPONSIBILITIES */}
        <div className="flex flex-col my-6 space-y-4 text-lg max-w-[80%]">
          <p className="font-semibold">Job Responsibilities</p>
          {selectedJob.responsibilities.length === 1 && (
            <p>{selectedJob.responsibilities}</p>
          )}
          {selectedJob.responsibilities.length > 1 && (
            <ul className="list-disc list-inside indent-6">
              {selectedJob.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          )}
        </div>

        {/* JOB BENEFITS AND PERKS */}
        <div className="flex flex-col my-6 space-y-4 text-lg max-w-[80%]">
          <p className="font-semibold">Benefit and Perks</p>
          {selectedJob.benefits.length === 1 && <p>{selectedJob.benefits}</p>}
          {selectedJob.benefits.length > 1 && (
            <ul className="list-disc list-inside indent-6">
              {selectedJob.benefits.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

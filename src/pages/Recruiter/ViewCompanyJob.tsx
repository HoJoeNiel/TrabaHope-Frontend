import { useCompanyJobsStore } from "@/stores/useCompanyJobsStore";
import { useParams } from "react-router-dom";

export default function ViewCompanyJob() {
  const { jobId } = useParams();
  const jobs = useCompanyJobsStore((state) => state.jobs);

  const selectedJob = jobs.find((job) => job.id === jobId);
  console.log(selectedJob);

  if (!selectedJob) {
    return <p>Job not found.</p>;
  }

  return <div>{selectedJob?.jobTitle}</div>;
}

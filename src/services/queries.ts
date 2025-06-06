import { useQuery } from "@tanstack/react-query";
import { fetchApplicantJobs } from "./api";
import { ApplicantJob } from "@/types";

export const useApplicantJobs = () => {
  return useQuery<ApplicantJob[]>({
    queryKey: ["applicantJobs"],
    queryFn: fetchApplicantJobs,
    staleTime: 1000 * 60 * 3,
  });
};

import { useQuery } from "@tanstack/react-query";
import {
  fetchApplicantJobs,
  fetchAppliedJobs,
  fetchJobs,
  fetchSavedJobs,
} from "./api";
import { ApplicantJob, Application, Query } from "@/types";

// export const useApplicantJobs = () => {
//   return useQuery<ApplicantJob[]>({
//     queryKey: ["applicantJobs"],
//     queryFn: fetchApplicantJobs,
//     staleTime: 1000 * 60 * 3,
//   });
// };

export const useApplicantJobs = () => {
  return useQuery<ApplicantJob[]>({
    queryKey: ["applicantJobs"],
    queryFn: () => fetchJobs(),
    staleTime: 1000 * 60 * 3,
  });
};

// export const useApplicantJobs = (query: Query) => {
//   return useQuery<ApplicantJob[]>({
//     queryKey: ["applicantJobs", query],
//     queryFn: () => fetchApplicantJobs(query),
//     staleTime: 1000 * 60 * 3,
//   });
// };

export const useAppliedJobs = (applicantId: string) => {
  return useQuery<Application[]>({
    queryKey: ["appliedJobs", applicantId],
    queryFn: () => fetchAppliedJobs(applicantId),
    staleTime: 1000 * 60 * 3,
    enabled: !!applicantId,
  });
};

export const useSavedJobs = (applicantId: string) => {
  return useQuery<ApplicantJob[]>({
    queryKey: ["savedJobs", applicantId],
    queryFn: () => fetchSavedJobs(applicantId),
    enabled: !!applicantId,
  });
};

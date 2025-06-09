import { useQuery } from "@tanstack/react-query";
import {
  fetchApplicantExperiences,
  fetchApplicantInfo,
  fetchApplicantInterviews,
  fetchApplications,
  fetchAppliedJobs,
  fetchCompanyInfo,
  fetchCompanyInterviews,
  fetchCompanyJobs,
  fetchJobs,
  fetchSavedJobs,
} from "./api";
import {
  ApplicantAuth,
  ApplicantJob,
  Application,
  CompanyAuth,
  Experience,
  Interview,
  JobWithId,
} from "@/types";

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

export const useCompanyApplications = (companyId: string) => {
  return useQuery<Application[]>({
    queryKey: ["company-applications"],
    queryFn: () => fetchApplications(companyId),
  });
};

export const useCompanyInterviews = (companyId: string) => {
  return useQuery<Interview[]>({
    queryKey: ["company-interviews"],
    queryFn: () => fetchCompanyInterviews(companyId),
  });
};

export const useApplicantInterviews = (applicantId: string) => {
  return useQuery<Interview[]>({
    queryKey: ["applicant-interviews"],
    queryFn: () => fetchApplicantInterviews(applicantId),
  });
};

export const useCompanyJobs = (companyId: string) => {
  return useQuery<JobWithId[]>({
    queryKey: ["company-jobs"],
    queryFn: () => fetchCompanyJobs(companyId),
  });
};

export const useApplicantExperience = (applicantId: string) => {
  return useQuery<Experience[]>({
    queryKey: ["applicant-experiences"],
    queryFn: () => fetchApplicantExperiences(applicantId),
  });
};

export const useApplicantInfo = (uid: string) => {
  return useQuery<ApplicantAuth>({
    queryKey: ["applicant-info"],
    queryFn: () => fetchApplicantInfo(uid),
  });
};

export const useCompanyInfo = (uid: string) => {
  return useQuery<CompanyAuth>({
    queryKey: ["company-info"],
    queryFn: () => fetchCompanyInfo(uid),
  });
};

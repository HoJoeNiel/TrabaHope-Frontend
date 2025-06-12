import { queryClient } from "@/lib/queryClient";
import {
  ApplicantAuth,
  ApplicationData,
  CompanyAuth,
  ExperienceToPost,
  InterviewData,
  Query,
} from "@/types";
import { useMutation } from "@tanstack/react-query";

import {
  cancelApplication,
  editCompanyAuth,
  editExperience,
  fetchRecommendedJobs,
  modifyApplicationStatus,
  modifyInterview,
  postExperience,
  postInterview,
  saveJob,
  sendApplication,
  unsaveJob,
} from "./api";
import { editApplicantInfo } from "./auth";

export const useSendApplication = () => {
  return useMutation({
    mutationFn: (data: ApplicationData) => sendApplication(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applicantJobs"] });
      queryClient.invalidateQueries({ queryKey: ["appliedJobs"] });
    },
  });
};

export const useCancelApplication = () => {
  return useMutation({
    mutationFn: ({
      jobId,
      applicantId,
    }: {
      jobId: string;
      applicantId: string;
    }) => cancelApplication(jobId, applicantId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applicantJobs"] });
      queryClient.invalidateQueries({ queryKey: ["appliedJobs"] });
    },
  });
};

export const useSaveJob = (applicantId: string) => {
  return useMutation({
    mutationFn: (jobId: string) => saveJob(String(jobId), applicantId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedJobs", applicantId] });
    },
  });
};

export const useUnsaveJob = (applicantId: string) => {
  return useMutation({
    mutationFn: (jobId: string) => unsaveJob(applicantId, String(jobId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedJobs", applicantId] });
    },
  });
};

export const useSetInterview = () => {
  return useMutation({
    mutationFn: (interview: InterviewData) => postInterview(interview),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["company-interviews"],
      });
    },
  });
};

export const useModifyInterview = () => {
  return useMutation({
    mutationFn: (interview: InterviewData) => modifyInterview(interview),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["applicant-interviews"],
      });
    },
  });
};

export const useModifyApplicationStatus = () => {
  return useMutation({
    mutationFn: (application: ApplicationData) =>
      modifyApplicationStatus(application),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["company-applications"],
      });
    },
  });
};

export const useEditApplicantInfo = () => {
  return useMutation({
    mutationFn: (applicantInfo: ApplicantAuth) =>
      editApplicantInfo(applicantInfo),
  });
};

export const useEditCompanyInfo = () => {
  return useMutation({
    mutationFn: (companyInfo: CompanyAuth) => editCompanyAuth(companyInfo),
  });
};

export const useAddExperience = () => {
  return useMutation({
    mutationFn: (experience: ExperienceToPost) => postExperience(experience),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["applicant-experiences"],
      });
    },
  });
};

export const useEditExperience = () => {
  return useMutation({
    mutationFn: (experience: ExperienceToPost) => editExperience(experience),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["applicant-experiences"],
      });
    },
  });
};

export const useFetchRecommendedJobs = () => {
  return useMutation({
    mutationFn: (query: Query) => fetchRecommendedJobs(query),
  });
};

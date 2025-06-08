import { queryClient } from "@/lib/queryClient";
import { ApplicantAuth, ApplicationData, InterviewData } from "@/types";
import { useMutation } from "@tanstack/react-query";

import {
  cancelApplication,
  editApplicantInfo,
  modifyApplicationStatus,
  postInterview,
  saveJob,
  sendApplication,
  unsaveJob,
} from "./api";

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

// TODO: 
export const useEditApplicantInfo = () => {
  return useMutation({
    mutationFn: (applicantInfo: ApplicantAuth) =>
      editApplicantInfo(applicantInfo),
  });
};

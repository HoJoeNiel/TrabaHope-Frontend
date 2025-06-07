import { useMutation } from "@tanstack/react-query";
import { sendApplication, cancelApplication, saveJob, unsaveJob } from "./api";
import { ApplicationData } from "@/types";
import { queryClient } from "@/lib/queryClient";

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
    mutationFn: (jobId: string) => unsaveJob(jobId, applicantId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedJobs", applicantId] });
    },
  });
};

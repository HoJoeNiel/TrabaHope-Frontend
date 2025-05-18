// This store is made just for managing the mock jobs data
// it mimics the feature of fetching the jobs (that is suggested using the AI feature) from the database.

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ApplicantSideJob } from "@/types";
import { JOBS } from "@/constants/constants";

type JobStore = {
  jobs: ApplicantSideJob[];
  savedJobs: ApplicantSideJob[];
  appliedJobs: ApplicantSideJob[];
  addJobToSaved: (job: ApplicantSideJob) => void;
  removeJobToSaved: (job: ApplicantSideJob) => void;
  applyToJob: (job: ApplicantSideJob) => void;
};

const jobStoreLogic = persist<JobStore>(
  (set) => ({
    jobs: JOBS,
    savedJobs: [],
    appliedJobs: [],

    removeJobToSaved: (job) =>
      set((state) => ({
        savedJobs: state.savedJobs.filter((sj) => sj.id !== job.id),
        jobs: state.jobs.map((j) =>
          j.id !== job.id
            ? j
            : { ...job, actions: { ...job.actions, saved: !job.actions.saved } }
        ),
      })),

    addJobToSaved: (job) =>
      set((state) => ({
        savedJobs: [job, ...state.savedJobs],
        jobs: state.jobs.map((j) =>
          j.id !== job.id
            ? j
            : { ...job, actions: { ...job.actions, saved: !job.actions.saved } }
        ),
      })),

    applyToJob: (job) =>
      set((state) => ({
        appliedJobs: [job, ...state.appliedJobs],
        jobs: state.jobs.map((j) =>
          j.id !== job.id
            ? j
            : {
                ...job,
                actions: { ...job.actions, applied: !job.actions.applied },
              }
        ),
      })),
  }),
  { name: "job-storage" }
);

export const useApplicantJobsStore = create<JobStore>()(jobStoreLogic);

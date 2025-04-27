import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Job } from "@/types";
import { JOBS } from "@/constants/constants";

type JobStore = {
  jobs: Job[];
  savedJobs: Job[];
  appliedJobs: Job[];
  addJobToSaved: (job: Job) => void;
  removeJobToSaved: (job: Job) => void;
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
  }),
  { name: "job-storage" }
);

export const useJobStore = create<JobStore>()(jobStoreLogic);

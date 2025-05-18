import { Job } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CompanyJobsStore = {
  companyID: string | null;
  jobs: Job[]; // jobs ng specific company na nakalogin
  addJob: (job: Job) => void;
  deleteJobs: (job: Job) => void;
};

const companyJobsStoreLogic = persist<CompanyJobsStore>(
  (set) => ({
    companyID: null,
    jobs: [],
    addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
    deleteJobs: (job) =>
      set((state) => ({ jobs: state.jobs.filter((j) => j.id !== job.id) })),
  }),
  { name: "company-job-storage" }
);

export const useCompanyJobsStore = create<CompanyJobsStore>()(
  companyJobsStoreLogic
);

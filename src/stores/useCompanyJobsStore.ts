import { JobWithId } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CompanyJobsStore = {
  companyID: string | null;
  jobs: JobWithId[]; // jobs ng specific company na nakalogin
  addJob: (job: JobWithId) => void;
  editJob: (job: JobWithId) => void;
  deleteJob: (id: number) => void;
};

const companyJobsStoreLogic = persist<CompanyJobsStore>(
  (set) => ({
    companyID: null,
    jobs: [],

    addJob: (job) => {
      set((state) => ({ jobs: [...state.jobs, job] }));
    },

    editJob: (job) => {
      set((state) => ({
        jobs: state.jobs.map((j) => (j.id !== job.id ? j : job)),
      }));
    },

    deleteJob: (id) => {
      set((state) => ({ jobs: state.jobs.filter((j) => j.id !== id) }));
    },
  }),

  { name: "company-job-storage" }
);

export const useCompanyJobsStore = create<CompanyJobsStore>()(
  companyJobsStoreLogic
);

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ApplicantJob } from "@/types";
// import { jobs } from "@/mocks/mock-data";

type ApplicantJobsStore = {
  jobs: ApplicantJob[] | null;
  setJobs: (jobs: ApplicantJob[]) => void;
};

const ApplicantJobsStoreLogic = persist<ApplicantJobsStore>(
  (set) => ({
    jobs: [],

    setJobs: (jobs) => set({ jobs }),
  }),
  { name: "applicant-jobs-storage" }
);

export const useApplicantJobsStore = create<ApplicantJobsStore>()(
  ApplicantJobsStoreLogic
);

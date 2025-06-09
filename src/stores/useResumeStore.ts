import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ResumeData } from "@/types";

type ResumeStore = {
  resume: ResumeData | null;

  setResume: (resume: ResumeData | null) => void;
};

const resumeStoreLogic = persist<ResumeStore>(
  (set) => ({
    resume: null,

    setResume: (resume) => {
      set({ resume });
    },
  }),
  { name: "resume-storage" }
);

export const useResumeStore = create<ResumeStore>()(resumeStoreLogic);

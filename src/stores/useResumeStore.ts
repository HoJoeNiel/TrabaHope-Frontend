import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ResumeData } from "@/types";

// Note : Since persisted pa rin yung resume kahit iba na yung user, on log out dapat burado nalang lahat ng state management data, or pwede rin kapag nasa landing na yung user

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

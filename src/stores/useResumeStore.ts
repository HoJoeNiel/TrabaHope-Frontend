import { create } from "zustand";
import { persist } from "zustand/middleware";

type ResumeMeta = {
  fileName: string;
  size: number;
  type: string;
  lastModified: number;
};

type ResumeStore = {
  resumeFile: File | null;
  resumeMeta: ResumeMeta | null;
  setResume: (resume: File) => void;
};

const resumeStoreLogic = persist<ResumeStore>(
  (set) => ({
    resumeFile: null,
    resumeMeta: null,

    setResume: (resume) =>
      set({
        resumeFile: resume,
        resumeMeta: {
          fileName: resume.name,
          size: resume.size,
          type: resume.type,
          lastModified: resume.lastModified,
        },
      }),
  }),
  { name: "resume-storage" }
);

export const useResumeStore = create<ResumeStore>()(resumeStoreLogic);

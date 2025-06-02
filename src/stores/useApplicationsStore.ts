import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CompanyFetchedApplication } from "@/types";
import { applications as MOCK_APPLICATIONS } from "@/mocks/mock-data";

type ApplicationStore = {
  applications: CompanyFetchedApplication[] | null;
  setApplications: (applications: CompanyFetchedApplication[]) => void;
};

const ApplicationStoreLogic = persist<ApplicationStore>(
  (set) => ({
    applications: MOCK_APPLICATIONS,
    setApplications: (applications: CompanyFetchedApplication[]) =>
      set({ applications: applications }),
  }),
  {
    name: "application-storage",
  }
);

export const useApplicationsStore = create<ApplicationStore>()(
  ApplicationStoreLogic
);

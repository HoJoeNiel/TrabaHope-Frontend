import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Application } from "@/types";
import { applications as MOCK_APPLICATIONS } from "@/mocks/mock-data";

// NOTES: Sa backend, isang endpoint lang lahat ng applications na to.
//        lahat ng applications na ipapasa ng lahat ng applicants sa lahat
//        ng company dito papasok, igeget nalang ng companies dito yung applications
//        para sa kanila, then put if may actions silang ginawa para nagrereflect din sya sa
//        applicant side.

type ApplicationStore = {
  applications: Application[] | null; // application entries ng isang company
  setApplications: (applications: Application[]) => void; // fetch applications
  changeApplicationStatus: (status: string, applicantId: string) => void; // change application status to => "Hired" , "Rejected", "Interview", etc.
  addApplication: (application: Application) => void; // pag nag apply yung isang applicant, ito yun
};

const ApplicationStoreLogic = persist<ApplicationStore>(
  (set) => ({
    applications: [],

    changeApplicationStatus: (status, applicantId) => {
      set((state) => {
        const selectedApplication = state.applications?.find(
          (a) => a.applicant.applicantId === applicantId
        );

        if (!selectedApplication) return state;

        return {
          applications: state.applications?.map((a) =>
            a.applicant.applicantId === applicantId ? { ...a, status } : a
          ),
        };
      });
    },

    setApplications: (applications: Application[]) => {
      set({ applications: applications });
    },

    addApplication: (application) => {
      set((state) => ({
        applications: state.applications?.concat(application),
      }));
    },
  }),
  {
    name: "application-storage",
  }
);

export const useApplicationsStore = create<ApplicationStore>()(
  ApplicationStoreLogic
);

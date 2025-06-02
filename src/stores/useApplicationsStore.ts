import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CompanyFetchedApplication } from "@/types";
import { applications as MOCK_APPLICATIONS } from "@/mocks/mock-data";

// NOTES: Sa backend, isang endpoint lang lahat ng applications na to.
//        lahat ng applications na ipapasa ng lahat ng applicants sa lahat
//        ng company dito papasok, igeget nalang ng companies dito yung applications
//        para sa kanila, then put if may actions silang ginawa para nagrereflect din sya sa
//        applicant side.

type ApplicationStore = {
  applications: CompanyFetchedApplication[] | null; // application entries ng isang company
  setApplications: (applications: CompanyFetchedApplication[]) => void; // fetch applications
  addApplication: (application: CompanyFetchedApplication) => void; // pag nag apply yung isang applicant, ito yun
  hireApplicant: (applicantId: string) => void; // recruiters action
  rejectApplicant: (applicantId: string) => void; // recruiters action
  inviteForInterview: (applicantId: string) => void; // recruiters action
};

const ApplicationStoreLogic = persist<ApplicationStore>(
  (set) => ({
    applications: MOCK_APPLICATIONS,

    setApplications: (applications: CompanyFetchedApplication[]) => {
      set({ applications: applications });
    },

    addApplication: (application) => {
      set((state) => ({
        applications: state.applications?.concat(application),
      }));
    },

    hireApplicant: (applicantId) => {
      set((state) => {
        const selectedApplication = state.applications?.find(
          (a) => a.applicantId === applicantId
        );

        if (!selectedApplication) return state;

        return {
          applications: state.applications?.map((a) =>
            a.applicantId === applicantId ? { ...a, status: "Hired" } : a
          ),
        };
      });
    },

    rejectApplicant: (applicantId) => {
      set((state) => {
        const selectedApplication = state.applications?.find(
          (a) => a.applicantId === applicantId
        );

        if (!selectedApplication) return state;

        return {
          applications: state.applications?.map((a) =>
            a.applicantId === applicantId ? { ...a, status: "Rejected" } : a
          ),
        };
      });
    },

    inviteForInterview: (applicantId) => {
      set((state) => {
        const selectedApplication = state.applications?.find(
          (a) => a.applicantId === applicantId
        );

        if (!selectedApplication) return state;

        return {
          applications: state.applications?.map((a) =>
            a.applicantId === applicantId ? { ...a, status: "Interview" } : a
          ),
        };
      });
    },
  }),
  {
    name: "application-storage",
  }
);

export const useApplicationsStore = create<ApplicationStore>()(
  ApplicationStoreLogic
);

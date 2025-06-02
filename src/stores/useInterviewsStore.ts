import { create } from "zustand";
import { persist } from "zustand/middleware";
import { interviews as MOCK_INTERVIEWS } from "@/mocks/mock-data";
import { Interview } from "@/types";

// NOTES: Store ito para sa interview schedules ng isang company. Mainly 
//        si recruiter/company lang sana makakapag modify nito, pero may rights 
//        din si applicant para ireject yung interview invite. 

type InterviewsStore = {
  interviews: Interview[] | null;
  setInterviews: (interviews: Interview[]) => void; // fetch interviews
  addInterview: (interview: Interview) => void; // add interview schedule
  setInterviewStatus: (status: string, applicantId: string) => void; // set interview status (scheduled, confirmed, completed, cancelled, or rescheduled)
  editInterviewDetails: (interview: Interview) => void; // edit details
};

const InterviewsStoreLogic = persist<InterviewsStore>(
  (set) => ({
    interviews: MOCK_INTERVIEWS,

    setInterviews: (interviews) => {
      set({ interviews });
    },

    addInterview: (interview) => {
      set((state) => ({ interviews: state.interviews?.concat(interview) }));
    },

    setInterviewStatus: (status, applicantId) => {
      set((state) => {
        const selectedInterview = state.interviews?.find(
          (i) => i.applicant.id === applicantId
        );

        if (!selectedInterview) return state;

        return {
          interviews: state.interviews?.map((i) =>
            i.applicant.id === applicantId ? { ...i, status } : i
          ),
        };
      });
    },

    editInterviewDetails: () => {},
  }),
  { name: "interview-storage" }
);

export const useInterviewsStore =
  create<InterviewsStore>()(InterviewsStoreLogic);

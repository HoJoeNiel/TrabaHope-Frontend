import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ApplicantAuth, CompanyAuth } from "@/types";

type UserStore = {
  user: ApplicantAuth | CompanyAuth | null;
  setUser: (user: ApplicantAuth | CompanyAuth) => void;
  clearUser: () => void;
};

const userStoreLogic = persist<UserStore>(
  (set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  }),
  {
    name: "user-data",
  }
);

export const useLoggedInUserStore = create<UserStore>()(userStoreLogic);

import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
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

export const useUserStore = create<UserStore>()(userStoreLogic);

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CompanyAuth } from "@/types";

type CompanyAuthStore = {
  company: CompanyAuth | null;
  setCompanyAuth: (companyInfo: CompanyAuth) => void;
  logout: () => void;
};

const companyAuthStoreLogic = persist<CompanyAuthStore>(
  (set) => ({
    company: null,
    setCompanyAuth: (companyInfo) => set({ company: companyInfo }),
    logout: () => set({ company: null }),
  }),
  { name: "company-auth-storage" }
);

export const useCompanyAuthStore = create<CompanyAuthStore>()(
  companyAuthStoreLogic
);

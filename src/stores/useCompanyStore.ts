import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COMPANIES } from "@/constants/constants";
import { Company } from "@/types";

type CompanyStore = {
  companies: Company[];
};

const companyStoreLogic = persist<CompanyStore>(
  (set) => ({
    companies: COMPANIES,
  }),
  {
    name: "company-storage",
  }
);

export const useCompanyStore = create<CompanyStore>()(companyStoreLogic);

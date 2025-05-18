import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COMPANIES } from "@/mocks/mock-data";
import { Company } from "@/types";

type CompanyStore = {
  companies: Company[];
};

const companyStoreLogic = persist<CompanyStore>(
  () => ({
    companies: COMPANIES,
  }),
  {
    name: "company-storage",
  }
);

export const useCompanyProfileStore = create<CompanyStore>()(companyStoreLogic);

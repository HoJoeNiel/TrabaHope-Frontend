import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import FormField from "@/components/FormField";

import { CompanyCredentials } from "@/types";
import { newCompanyAccountSchema } from "@/schema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik, FormikErrors } from "formik";
import { Loader2 } from "lucide-react";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import {
  createCompanyAccountWithBackend,
  createCompanyAccountWithFirebase,
} from "@/services/auth";

const INDUSTRY_OPTIONS = [
  "Information Technology (IT)",
  "Healthcare & Medical",
  "Education & Training",
  "Finance & Accounting",
  "Manufacturing & Production",
  "Construction & Engineering",
  "Retail & E-commerce",
  "Marketing & Advertising",
  "Telecommunications",
  "Transportation & Logistics",
  "Hospitality & Tourism",
  "Legal Services",
  "Real Estate",
  "Energy & Utilities",
  "Other",
];

const initialValues: CompanyCredentials = {
  companyName: "",
  industry: "",
  companyWebsite: "",
  companyEmail: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

export default function RecruiterSignupForm() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const setUser = useLoggedInUserStore((state) => state.setUser);

  const handleAccountCreation = async (
    values: CompanyCredentials,
    {
      setErrors,
    }: { setErrors: (errors: FormikErrors<CompanyCredentials>) => void }
  ) => {
    setLoading(true);
    try {
      // const companyInfo = await createCompanyAccountWithFirebase(values); // for testing
      const companyInfo = await createCompanyAccountWithBackend(values); // for backend

      setUser(companyInfo);
      navigate("/recruiter/create-new-job", { replace: true });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Account creation failed";
      setErrors({ companyEmail: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-24 mt-20 mb-12 w-full max-w-[720px]">
        <h2 className="mb-2 text-3xl font-bold text-gray-800 max-lg:text-2xl">
          Create Recruiter Account
        </h2>
        <p className="mb-8 text-gray-600 max-lg:text-sm">
          Join thousands of recruiters using our AI-powered platform
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={newCompanyAccountSchema}
          onSubmit={(values, { setErrors }) =>
            handleAccountCreation(values, { setErrors })
          }
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <FormField
                  type="text"
                  name="companyName"
                  id="companyName"
                  label="Company Name"
                />

                <FormField
                  id="industry"
                  name="industry"
                  label="Industry"
                  isDropdown
                  options={INDUSTRY_OPTIONS}
                  setFn={(value) => setFieldValue("industry", value)}
                />
              </div>

              <FormField
                type="text"
                name="companyWebsite"
                id="companyWebsite"
                label="Company Website"
                placeholder="https://yourcompany.com"
              />

              <FormField
                type="email"
                name="companyEmail"
                id="companyEmail"
                label="company@example.com"
              />

              <FormField
                type="password"
                name="password"
                id="password"
                label="Password"
                placeholder="Create Password (min. 8 characters)"
              />

              <FormField
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
              />

              <FormField
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                label="Phone Number"
              />

              <div className="flex items-center mt-4 mb-1 space-x-2">
                <Checkbox
                  id="terms"
                  required
                  onCheckedChange={(checked) =>
                    setFieldValue("terms", checked === true)
                  }
                />
                <label
                  htmlFor="terms"
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-6 my-6 text-lg bg-fuchsia-500 max-lg:text-base hover:bg-fuchsia-600"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="animate-spin" />
                    <span>Please wait</span>
                  </div>
                ) : (
                  "Sign Up as Recruiter"
                )}
              </Button>
            </Form>
          )}
        </Formik>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?
          <a href="#" className="font-medium text-blue-600 hover:underline">
            {" "}
            Sign in
          </a>
        </p>

        <div className="mt-12 text-sm text-center text-gray-500">
          © 2025 TrabaHope. All rights reserved.
        </div>
      </div>
    </div>
  );
}

import { Form, Formik, FormikErrors } from "formik";
import { Loader2, Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthSocialButtons from "@/components/AuthSocialButtons";
import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { newApplicantAccountSchema } from "@/schema";
import {
  createApplicantAccountWithBackend,
  createApplicantAccountWithFirebase,
} from "@/services/auth";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { ApplicantCredentials } from "@/types";

const initialValues: ApplicantCredentials = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

export default function ApplicantSignupForm() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const setUser = useLoggedInUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleAccountCreation = async (
    values: ApplicantCredentials,
    {
      setErrors,
    }: { setErrors: (errors: FormikErrors<ApplicantCredentials>) => void }
  ) => {
    setLoading(true);
    try {
      const applicantInfo = await createApplicantAccountWithBackend(values); // for backend
      // const applicantInfo = await createApplicantAccountWithFirebase(values); // for testing

      setUser(applicantInfo);

      if (!applicantInfo.interest?.length || !applicantInfo.interest) {
        navigate("/setup-account", { replace: true });
      } else {
        navigate("/applicant/job-listing", { replace: true });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Account creation failed";
      setErrors({ email: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end min-h-screen bg-gray-800">
      <div className="px-24 mt-28 mb-16 w-full max-w-[720px]">
        <h2 className="mb-2 text-3xl font-bold text-gray-100 max-lg:text-2xl">
          Create Applicant Account
        </h2>
        <p className="mb-8 text-gray-200 max-lg:text-sm">
          Join thousands of job seekers using our AI-powered platform
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={newApplicantAccountSchema}
          onSubmit={(values, { setErrors }) =>
            handleAccountCreation(values, { setErrors })
          }
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <FormField
                  icon={User}
                  type="text"
                  id="firstName"
                  label="First Name"
                  name="firstName"
                />
                <FormField
                  icon={User}
                  type="text"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </div>
              <FormField
                icon={Mail}
                type="email"
                id="email"
                label="Email Address"
                name="email"
              />
              <FormField
                icon={Lock}
                type="password"
                id="password"
                label="Password"
                name="password"
                placeholder="Create Password (min. 8 characters)"
              />
              <FormField
                icon={Lock}
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
              />
              <FormField
                icon={Phone}
                type="number"
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
              />

              <div className="flex items-center mt-4 mb-1 space-x-2">
                <Checkbox
                  id="terms"
                  required
                  className="border-white"
                  onCheckedChange={(checked) =>
                    setFieldValue("terms", checked === true)
                  }
                />
                <label
                  htmlFor="terms"
                  className="leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>

              <Button
                disabled={isLoading}
                type="submit"
                className="w-full py-6 my-6 text-lg bg-cyan-700 max-lg:text-base hover:bg-cyan-800"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="animate-spin" />
                    <span>Please wait</span>
                  </div>
                ) : (
                  "Sign Up as Applicant"
                )}
              </Button>
            </Form>
          )}
        </Formik>

        <div className="flex items-center space-x-4">
          <div className="h-0.5 bg-gray-200 flex-1" />
          <span className="text-gray-300">Or sign up with</span>
          <div className="h-0.5 bg-gray-200 flex-1" />
        </div>

        <AuthSocialButtons action="signup" />

        <p className="mt-6 text-center text-gray-200">
          Already have an account?{" "}
          <a href="#" className="font-medium text-blue-400 hover:underline">
            Sign in
          </a>
        </p>

        <div className="mt-12 text-sm text-center text-gray-200">
          © 2025 TrabaHope. All rights reserved.
        </div>
      </div>
    </div>
  );
}

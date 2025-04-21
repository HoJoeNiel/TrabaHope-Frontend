import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { auth } from "@/firebase";
import { Formik, Form, FormikErrors } from "formik";
import { newApplicantAccountSchema } from "@/schema";
import { UserCredentials } from "@/types";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AuthSocialButtons from "../LoginPage/AuthSocialButtons";

import { Loader2 } from "lucide-react";

const initialValues: UserCredentials = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

export default function ApplicantSignupForm() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAccountCreation = async (
    values: UserCredentials,
    {
      setErrors,
    }: { setErrors: (errors: FormikErrors<UserCredentials>) => void }
  ) => {
    console.log("running");
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = result.user;

      await updateProfile(user, {
        displayName: `${values.firstName} ${values.lastName}`,
      });

      setLoading(false);
      // const token = await user.getIdToken();
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      let errorMessage = "Something went wrong: ";
      if (error instanceof Error) {
        errorMessage += error.message;
        setErrors({ email: error.message });
      }
      throw new Error(errorMessage);
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-end">
      <div className="px-24 mt-28 mb-16 w-full max-w-[720px]">
        <h2 className="text-3xl max-lg:text-2xl font-bold text-gray-800 mb-2">
          Create Applicant Account
        </h2>
        <p className="text-gray-600 mb-8 max-lg:text-sm">
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
                  type="text"
                  id="firstName"
                  label="First Name"
                  name="firstName"
                />
                <FormField
                  type="text"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </div>
              <FormField
                type="email"
                id="email"
                label="Email Address"
                name="email"
              />
              <FormField
                type="password"
                id="password"
                label="Password"
                name="password"
                placeholder="Create Password (min. 8 characters)"
              />
              <FormField
                type="password"
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
              />
              <FormField
                type="number"
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
              />

              <div className="flex items-center space-x-2 mt-4 mb-1">
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

              {isLoading && (
                <Button
                  disabled
                  className="w-full py-6 my-6 text-lg max-lg:text-base bg-teal-700"
                >
                  <Loader2 className="animate-spin" />
                  Please wait
                </Button>
              )}
              {!isLoading && (
                <Button
                  type="submit"
                  className="w-full py-6 my-6 text-lg max-lg:text-base bg-teal-500 hover:bg-teal-700"
                >
                  Sign Up as Applicant
                </Button>
              )}
            </Form>
          )}
        </Formik>

        <div className="flex items-center space-x-4">
          <div className="h-0.5 bg-gray-200 flex-1" />
          <span className="text-gray-800">Or sign up with</span>
          <div className="h-0.5 bg-gray-200 flex-1" />
        </div>

        <AuthSocialButtons action="signup" />

        <p className="text-center mt-6 text-gray-600">
          Already have an account?
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign in
          </a>
        </p>

        <div className="mt-12 text-center text-gray-500 text-sm">
          © 2025 TrabaHope. All rights reserved.
        </div>
      </div>
    </div>
  );
}

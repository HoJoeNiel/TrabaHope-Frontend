import FormField from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import AuthSocialButtons from "@/components/AuthSocialButtons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik, FormikErrors } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

import { ApplicantAuth, UserCredentials } from "@/types";
import { newApplicantAccountSchema } from "@/schema";
import { Loader2 } from "lucide-react";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

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
  const setUser = useLoggedInUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleAccountCreation = async (
    values: UserCredentials,
    {
      setErrors,
    }: { setErrors: (errors: FormikErrors<UserCredentials>) => void }
  ) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const currentUser = result.user;

      const user: ApplicantAuth = {
        id: currentUser.uid,
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        location: null,
        contactNumber: values.phoneNumber,
        photoURL: null,
        resumeFile: null,
        jobTitle: null,
        description: null,
        createdAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        portfolioURL: null,
        preferredEmploymentType: null,
        role: "applicant",
      };

      // BACKEND AUTH CONNECTION
      // const response = await fetch("url", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(user),
      // });

      // if (!response.ok) {
      //   throw new Error(
      //     `Failed to save applicant info. Status ${response.status}`
      //   );
      // }

      // FIREBASE TEMPORARY
      const docRef = doc(db, "users", currentUser.uid);
      await setDoc(docRef, user);
      setUser(user);

      setUser(user);
      setLoading(false);
      navigate("/applicant/job-listing", { replace: true });
    } catch (error) {
      let errorMessage = "Something went wrong: ";
      if (error instanceof Error) {
        errorMessage += error.message;
        setErrors({ email: error.message });
      }
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end min-h-screen bg-white">
      <div className="px-24 mt-28 mb-16 w-full max-w-[720px]">
        <h2 className="mb-2 text-3xl font-bold text-gray-800 max-lg:text-2xl">
          Create Applicant Account
        </h2>
        <p className="mb-8 text-gray-600 max-lg:text-sm">
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

              {isLoading && (
                <Button
                  disabled
                  className="w-full py-6 my-6 text-lg bg-teal-700 max-lg:text-base"
                >
                  <Loader2 className="animate-spin" />
                  Please wait
                </Button>
              )}
              {!isLoading && (
                <Button
                  type="submit"
                  className="w-full py-6 my-6 text-lg bg-teal-500 max-lg:text-base hover:bg-teal-700"
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

        <p className="mt-6 text-center text-gray-600">
          Already have an account?
          <a href="#" className="font-medium text-blue-600 hover:underline">
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

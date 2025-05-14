import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import FormField from "@/components/FormField";
import AuthSocialButtons from "@/components/AuthSocialButtons";

import { RawFirebaseUser, RecruiterCredentials } from "@/types";
import { newRecruiterAccountSchema } from "@/schema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik, FormikErrors } from "formik";
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { normalizeFirebaseUser } from "@/helpers";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useUserStore } from "@/stores/useUserStore";

const initialValues: RecruiterCredentials = {
  firstName: "",
  lastName: "",
  companyName: "",
  workEmail: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

export default function RecruiterSignupForm() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const handleAccountCreation = async (
    values: RecruiterCredentials,
    {
      setErrors,
    }: { setErrors: (errors: FormikErrors<RecruiterCredentials>) => void }
  ) => {
    // TODO: Add user role (applicant or recruiter) before authenticating
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.workEmail,
        values.password
      );
      const currentUser = result.user;

      await updateProfile(currentUser, {
        displayName: `${values.firstName} ${values.lastName}`,
      });

      const user: RawFirebaseUser = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        role: "recruiter",
      };

      const normalizeUser = normalizeFirebaseUser(user);

      console.log(normalizeUser);
      if (normalizeUser) setUser(normalizeUser);

      // Save sa firestore DB (temporary lang habang wala pa yung backend)
      await setDoc(doc(db, "users", currentUser.uid), {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        role: "recruiter",
        createdAt: serverTimestamp(),
      });
      console.log("done save sa firestore");

      setLoading(false);
      // const token = await user.getIdToken();
      navigate("/recruiter/create-new-job", { replace: true });
    } catch (error) {
      setLoading(false);
      let errorMessage = "Something went wrong: ";
      if (error instanceof Error) {
        errorMessage += error.message;
        setErrors({ workEmail: error.message });
      }
      throw new Error(errorMessage);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="px-24 mt-20 mb-12 w-full max-w-[720px]">
        <h2 className="text-3xl max-lg:text-2xl font-bold text-gray-800 mb-2">
          Create Recruiter Account
        </h2>
        <p className="text-gray-600 mb-8 max-lg:text-sm">
          Join thousands of recruiters using our AI-powered platform
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={newRecruiterAccountSchema}
          onSubmit={(values, { setErrors }) =>
            handleAccountCreation(values, { setErrors })
          }
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <FormField
                  type="text"
                  name="firstName"
                  id="firstName"
                  label="First Name"
                />
                <FormField
                  type="text"
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                />
              </div>

              <FormField
                type="text"
                name="companyName"
                id="companyName"
                label="Company Name"
              />
              <FormField
                type="email"
                name="workEmail"
                id="workEmail"
                label="Work Email"
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
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                label="Phone Number"
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
                  className="w-full py-6 my-6 text-lg max-lg:text-base bg-indigo-700"
                >
                  <Loader2 className="animate-spin" />
                  Please wait
                </Button>
              )}
              {!isLoading && (
                <Button
                  type="submit"
                  className="w-full py-6 my-6 text-lg max-lg:text-base bg-indigo-500 hover:bg-indigo-700"
                >
                  Sign Up as Recruiter
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

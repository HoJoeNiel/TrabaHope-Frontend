import SocialLoginButton from "@/components/SocialLoginButton";
import FormField from "@/components/FormField";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function ApplicantSignupForm() {
  return (
    <div className="bg-white min-h-screen flex justify-end">
      <div className="px-24 mt-28 mb-16 w-full max-w-[720px]">
        <h2 className="text-3xl max-lg:text-2xl font-bold text-gray-800 mb-2">
          Create Applicant Account
        </h2>
        <p className="text-gray-600 mb-8 max-lg:text-sm">
          Join thousands of job seekers using our AI-powered platform
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <FormField type="text" id="first-name" label="First Name" />
          <FormField type="text" id="last-name" label="Last Name" />
        </div>

        <FormField type="email" id="email-address" label="Email Address" />
        <FormField
          type="password"
          id="password"
          label="Password"
          placeholder="Create Password (min. 8 characters)"
        />
        <FormField type="number" id="phone-number" label="Phone Number" />

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        <Button className="w-full py-6 my-6 text-lg max-lg:text-base bg-teal-500 hover:bg-teal-700">
          Sign Up as Applicant
        </Button>

        <div className="flex items-center space-x-4">
          <div className="h-0.5 bg-gray-200 flex-1" />
          <span className="text-gray-800">Or sign up with</span>
          <div className="h-0.5 bg-gray-200 flex-1" />
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <SocialLoginButton
            icon={<FaGoogle className="text-red-600 size-5" />}
            label="Google"
          />
          <SocialLoginButton
            icon={<FaFacebook className="text-[#1877F2] size-5" />}
            label="Facebook"
          />
          <SocialLoginButton
            icon={<FaGithub className="text-black size-5" />}
            label="Github"
          />
        </div>

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

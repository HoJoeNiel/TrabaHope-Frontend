import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import FormField from "../FormField";
import AuthSocialButtons from "../LoginPage/AuthSocialButtons";

export default function RecruiterSignupForm() {
  return (
    <div className="bg-white h-screen">
      <div className="px-24 mt-20 mb-12 w-full max-w-[720px]">
        <h2 className="text-3xl max-lg:text-2xl font-bold text-gray-800 mb-2">
          Create Recruiter Account
        </h2>
        <p className="text-gray-600 mb-8 max-lg:text-sm">
          Join thousands of recruiters using our AI-powered platform
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <FormField
            type="text"
            name="firstName"
            id="first-name"
            label="First Name"
          />
          <FormField
            type="text"
            name="lastName"
            id="last-name"
            label="Last Name"
          />
        </div>

        <FormField
          type="text"
          name="companyName"
          id="company-name"
          label="Company Name"
        />
        <FormField
          type="email"
          name="workEmail"
          id="work-email"
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
          type="number"
          name="phoneNumber"
          id="phone-number"
          label="Phone Number"
        />

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        <Button className="w-full py-6 my-6 text-lg max-lg:text-base recruiter-gradient">
          Sign Up as Recruiter
        </Button>

        <div className="flex items-center space-x-4">
          <div className="h-0.5 bg-gray-200 flex-1" />
          <span className="text-gray-800">Or sign up with</span>
          <div className="h-0.5 bg-gray-200 flex-1" />
        </div>

        <AuthSocialButtons action="signup" />

        {/* <div className="grid grid-cols-3 gap-3 mt-4">
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
        </div> */}

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

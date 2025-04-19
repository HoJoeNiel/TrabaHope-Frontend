import { FaRobot } from "react-icons/fa";
import { PiListChecksThin } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function RecruiterSignup() {
  return (
    <div className="w-screen h-screen grid grid-cols-2 max-md:grid-cols-1">
      <div className="recruiter-gradient h-screen max-md:h-auto max-md:pb-20 flex justify-end pt-28">
        <div className="w-full max-w-[720px] mx-16">
          <div className="flex items-center space-x-3">
            <div className="size-12 max-lg:size-10 recruiter-gradient flex items-center justify-center shadow rounded-xl">
              <span className="text-white text-lg max-lg:text-base font-bold">
                T
              </span>
            </div>
            <h1 className="text-2xl max-lg:text-xl font-bold text-white">
              TrabaHope
            </h1>
          </div>

          <div className="flex flex-col gap-1.5 mt-8">
            <h1 className="text-white text-4xl max-lg:text-3xl font-extrabold tracking-wide mb-4">
              For Recruiters
            </h1>
            <p className="text-white text-2xl max-lg:text-xl font-light tracking-wide">
              Find the perfect candidates and streamline your hiring process
              with our AI-powered platform
            </p>
          </div>

          {/* box1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20 mt-12">
            <div className="p-2 size-12 max-lg:size-10 bg-white/20 flex justify-center items-center rounded-full shadow mb-4">
              <FaRobot className="text-white size-6" />
            </div>
            <h2 className="text-white text-xl max-lg:text-lg font-semibold mb-1">
              AI-Powered candidate matching
            </h2>
            <p className="text-white/80 font-light max-lg:text-sm">
              Our advanced AI algorithms help you find candidates that truly
              match your job requirements, reducing time-to-hire and improving
              quality of hires.
            </p>
          </div>

          {/* box 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
            <div className="p-2 size-12 max-lg:size-10 bg-white/20 flex justify-center items-center rounded-full shadow mb-4">
              <PiListChecksThin className="text-white size-6" />
            </div>
            <h2 className="text-white text-xl max-lg:text-lg font-semibold">
              Streamlined workflow
            </h2>
            <p className="text-white/80 font-light max-lg:text-sm">
              Manage your entire recruitment process in one place with
              intelligent filtering, automated screening, and comprehensive
              applicant tracking.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-screen">
        <div className="px-24 mt-20 mb-12 w-full max-w-[720px]">
          <h2 className="text-3xl max-lg:text-2xl font-bold text-gray-800 mb-2">
            Create Recruiter Account
          </h2>
          <p className="text-gray-600 mb-8 max-lg:text-sm">
            Join thousands of recruiters using our AI-powered platform
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                type="text"
                id="first-name"
                placeholder="First Name"
                className="w-full"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
              <Label htmlFor="last-name">Last Name</Label>
              <Input type="text" id="last-name" placeholder="Last Name" />
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label htmlFor="company-name">Company Name</Label>
            <Input type="text" id="company-name" placeholder="Company Name" />
          </div>

          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label htmlFor="work-email">Work Email</Label>
            <Input type="email" id="work-email" placeholder="Work Email" />
          </div>

          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Create Password (min. 8 characters)"
            />
          </div>

          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input type="number" id="phone-number" placeholder="Phone Number" />
          </div>

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

          <div className="grid grid-cols-3 gap-3 mt-4">
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <FaGoogle className="text-red-500 mr-2 size-6" />
              <span className="max-lg:hidden">Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <FaFacebook className="text-blue-600 mr-2 size-6" />
              <span className="max-lg:hidden">Facebook</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <FaGithub className="text-gray-800 mr-2 size-6" />
              <span className="max-lg:hidden">GitHub</span>
            </button>
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
    </div>
  );
}

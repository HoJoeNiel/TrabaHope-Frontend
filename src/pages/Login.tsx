import Header from "@/components/Header";
import BottomWave from "@/components/LoginPage/BottomWave";
import TopWave from "@/components/LoginPage/TopWave";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 bg-white relative">
        {/* main login div */}
        <div className="bg-white h-full flex justify-center items-center">
          <div className="w-full max-w-[1440px] flex justify-between">
            <div className="bg-white border border-gray-100 w-[550px] h-[630px] p-8 shadow-lg rounded-lg">
              <h1 className="text-2xl text-gray-800 text-center font-bold mb-6">
                Welcome back
              </h1>
              <button className="border border-gray-300 w-full my-2 py-2.5 rounded-md flex items-center justify-center space-x-4 hover:bg-gray-50">
                <FaGoogle className="text-red-600 size-5" />
                <span className="text-gray-700">Continue with Google</span>
              </button>
              <button className="border border-gray-300 w-full my-2 py-2.5 rounded-md flex items-center justify-center space-x-4 hover:bg-gray-50">
                <FaFacebook className="text-[#1877F2] size-5" />
                <span className="text-gray-700">Continue with Facebook</span>
              </button>
              <button className="border border-gray-300 w-full my-2 py-2.5 rounded-md flex items-center justify-center space-x-4 hover:bg-gray-50">
                <FaGithub className="size-5" />
                <span className="text-gray-700">Continue with Github</span>
              </button>
              {/* OR section */}
              <div className="flex items-center space-x-4 my-4">
                <div className="h-0.5 bg-gray-200 flex-1" />
                <p>Or login with email</p>
                <div className="h-0.5 bg-gray-200 flex-1" />
              </div>

              {/* inputs */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5a96bb] focus:border-[#5a96bb]"
                />
              </div>

              <div className="mb-3">
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <span className="text-dusty-sky-blue text-sm hover:underline">
                    Forgot password?
                  </span>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5a96bb] focus:border-[#5a96bb]"
                />
              </div>

              <div className="flex space-x-2 mb-4">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>

              <button className="main-gradient-bg w-full py-2 text-lg text-center rounded-lg shadow text-white">
                Log in
              </button>

              <p className="text-center my-4">
                Don't have an account?
                <Link
                  to="/signup/applicant"
                  className="text-dusty-sky-blue hover:underline pl-1"
                >
                  Create one now
                </Link>
              </p>
            </div>
            <div className="w-[600px] h-[630px] flex flex-col justify-center gap-8">
              <div className="bg-white w-full h-[160px] shadow-lg border border-gray-200 rounded-xl py-8 px-10">
                <div className="flex space-x-6 mb-4">
                  <IoMdPerson className="text-sky-500 ml-4 size-8" />
                  <div className="w-[40%]">
                    <div className="h-4 bg-gray-200 rounded-lg mb-1" />
                    <div className="h-3 w-[70%] bg-gray-100 rounded-lg mb-1" />
                  </div>
                </div>

                <div className="w-full h-1 bg-gray-100" />
                <div className="flex justify-between py-4">
                  <div className="flex space-x-2 items-center">
                    <div className="size-7 bg-green-200 rounded-full flex justify-center items-center">
                      <FaCheck className="text-green-600" />
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      94% Match
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-sky-500 text-white text-sm rounded-full">
                    AI Recommended
                  </div>
                </div>
              </div>

              <div className="main-gradient-bg rounded-2xl p-8 shadow-xl text-white">
                <h3 className="text-xl font-bold mb-4">
                  Smart job matching powered by AI
                </h3>
                <p className="mb-6">
                  Log in to discover opportunities that perfectly align with
                  your skills and experience.
                </p>

                <div className="bg-white/10 border border-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <div className="h-8 w-8 bg-white/20 shadow rounded-full flex items-center justify-center">
                      <GoGraph className="text-white" />
                    </div>
                    <div className="ml-3 text-sm font-medium">
                      Resume Match Score
                    </div>
                  </div>

                  <div className="w-full bg-white/20 rounded-full h-3 mb-3">
                    <div className="bg-white h-3 w-[85%] rounded-full"></div>
                  </div>

                  <div className="flex justify-between text-xs">
                    <span>Skills Match</span>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopWave />
        <BottomWave />
      </main>
      <Footer className="main-gradient-bg" />
    </div>
  );
}

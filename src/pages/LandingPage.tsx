import {
  FEATURES,
  JOB_SEEKERS_FEATURE,
  RECRUITERS_FEATURE,
  USER_TESTIMONY,
} from "@/constants/constants";

import Header from "@/components/Header";
import FeatureCard from "@/components/LandingPage/FeatureCard";

import businessDeal from "@/assets/undraw_business-deal_nx2n.svg";
import interview from "@/assets/undraw_interview_yz52.svg";
import peopleSearch from "@/assets/undraw_people-search_xpq4.svg";
import businessMan from "@/assets/undraw_business-man_0ifc.svg";
import TestimonyCard from "@/components/LandingPage/TestimonyCard";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero section */}
        <section className="relative w-full h-[800px] overflow-hidden">
          <div className="gradient-bg w-full h-full">
            <div className="w-full max-w-[1440px] py-20 grid grid-cols-2 mx-auto">
              <div>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-7xl">
                  <span className="">Finding the perfect job</span>
                  <span className="block">has never been smarter</span>
                </h1>
                <p className="mt-3 mb-12 text-base text-gray-100 sm:text-xl lg:text-lg xl:text-xl">
                  TrabaHope uses AI to match job seekers with the right
                  opportunities and helps recruiters find ideal candidates
                  faster than ever before.
                </p>
                <div className="flex space-x-6">
                  <button className="text-dusty-sky-blue text-lg font-medium flex-1 rounded-lg bg-white py-2 shadow transition-transform duration-300 hover:scale-105">
                    For Applicants
                  </button>
                  <button className="text-white text-lg font-medium flex-1 rounded-lg bg-blue-500 py-2 shadow transition-transform duration-300 hover:scale-105">
                    For Recruiters
                  </button>
                </div>
              </div>
              <div className="relative h-[500px]">
                <img
                  src={interview}
                  alt="interview"
                  className="size-52 absolute bottom-4 left-20 z-10"
                />
                <img
                  src={peopleSearch}
                  alt="interview"
                  className="size-96 absolute top-10 left-40"
                />
                <img
                  src={businessDeal}
                  alt="interview"
                  className="size-52 absolute top-0 right-32"
                />
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-full h-[150px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,218.7C420,224,480,160,540,117.3C600,75,660,53,720,58.7C780,64,840,96,900,117.3C960,139,1020,149,1080,165.3C1140,181,1200,203,1260,192C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </section>

        {/* Features  */}
        <section className="w-full h-[500px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center">
              <h3 className="text-dusty-sky-blue font-semibold tracking-wide uppercase">
                AI-POWERED PLATFORM
              </h3>
              <h1 className="text-4xl mt-1 font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
                Smart matching for better careers
              </h1>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                TrabaHope uses advanced AI to streamline the job search and
                hiring process for both applicants and recruiters.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16">
              {FEATURES.map(({ icon, feature, description }) => (
                <FeatureCard
                  icon={icon}
                  feature={feature}
                  description={description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* For Job Seekers */}
        <section className="w-full h-[600px] bg-gray-50 py-12">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2">
            <div>
              <h1 className="text-3xl mt-1 font-extrabold text-gray-900">
                For Job Seekers
              </h1>
              <p className="mt-3 mb-8 mx-auto text-xl text-gray-500">
                Find your dream job faster with TrabaHope's smart tools designed
                for applicants.
              </p>
              {JOB_SEEKERS_FEATURE.map(({ icon, feature, description }) => (
                <FeatureCard
                  icon={icon}
                  feature={feature}
                  description={description}
                />
              ))}
              <button className="gradient-bg text-white font-bold px-4 py-2 rounded-lg mt-6 transition-transform duration-300 hover:scale-105">
                Sign up as Applicant
              </button>
            </div>
            <div className="flex justify-center">
              <img src={businessMan} alt="Business man" className="w-[430px]" />
            </div>
          </div>
        </section>

        {/* For Recruiters */}
        <section className="w-full h-[600px] py-12">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2">
            <div>
              <h1 className="text-3xl mt-1 font-extrabold text-gray-900">
                For Recruiters
              </h1>
              <p className="mt-3 mb-8 mx-auto text-xl text-gray-500">
                Find the perfect candidates and streamline your hiring process
                with TrabaHope.
              </p>
              {RECRUITERS_FEATURE.map(({ icon, feature, description }) => (
                <FeatureCard
                  icon={icon}
                  feature={feature}
                  description={description}
                />
              ))}
              <button className="gradient-bg text-white font-bold px-4 py-2 rounded-lg mt-6 transition-transform duration-300 hover:scale-105">
                Sign up as Recruiter
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={peopleSearch}
                alt="Business man"
                className="w-[430px]"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full h-[400px] py-20 gradient-bg">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to transform your job search?</span>
              <span className="block">Start with TrabaHope today.</span>
            </h2>
            <p className="text-blue-100 mt-4 max-w-md mx-auto text-xl">
              Join thousands of job seekers and recruiters who are already using
              our AI-powered platform.
            </p>
            <div className="max-w-sm mx-auto flex justify-center mt-6 space-x-4">
              <button className="px-4 py-2 text-lg text-dusty-sky-blue bg-white rounded-lg shadow transition-transform duration-300 hover:scale-105">
                Get started for free
              </button>
              <button className="px-4 py-2 text-lg text-white bg-blue-500 rounded-lg shadow transition-transform duration-300 hover:scale-105">
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full h-[500px] py-20 bg-white">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-black sm:text-4xl">
              <span className="block">Loved by users</span>
            </h2>
            <p className="mt-3 mb-8 mx-auto text-2xl text-gray-500">
              See what our community is saying about TrabaHope
            </p>

            <div className="grid grid-cols-3 gap-8">
              {USER_TESTIMONY.map((u) => (
                <TestimonyCard
                  photo={u.photo}
                  name={u.name}
                  jobTitle={u.jobTitle}
                  testimony={u.testimony}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-gray-800 h-[200px] p-12">
        <div className="flex items-center space-x-2 text-white font-bold mb-5">
          {/* temporary app logo */}
          <div className="p-2 text-sm shadow gradient-bg rounded-xl">
            <span>TH</span>
          </div>
          <h3 className="text-xl ">TrabaHope</h3>
        </div>
        <p className="text-gray-300">
          Making job searches smarter and more efficient with AI-powered
          matching.
        </p>
        <div className="flex space-x-4 text-gray-400 mt-6">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </footer>
    </div>
  );
}

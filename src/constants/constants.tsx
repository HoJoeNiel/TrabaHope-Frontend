import React from "react";

import { IoDocumentTextOutline } from "react-icons/io5";
import { GrAscend } from "react-icons/gr";
import { IoChatbubblesSharp } from "react-icons/io5";
import { GiStonePath } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { VscChecklist } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { PiListChecksThin } from "react-icons/pi";
import { FaRobot } from "react-icons/fa";

export interface FeatureType {
  icon: React.ReactNode;
  feature: string;
  description: string;
  className?: string;
}

export interface UserTestimonyType {
  photo: string;
  name: string;
  jobTitle: string;
  testimony: string;
}

export const FEATURES: FeatureType[] = [
  {
    icon: <IoDocumentTextOutline className="text-white size-6" />,
    feature: "Resume Match Scoring",
    description:
      "Automatically calculate how well your resume matches job requirements.",
  },
  {
    icon: <GrAscend className="text-white size-6" />,
    feature: "AI-Based Ranking",
    description:
      "Prioritize applications based on qualifications and relevance.",
  },
  {
    icon: <IoChatbubblesSharp className="text-white size-6" />,
    feature: "Resume Feedback",
    description:
      "Get insights on missing skills and suggestions for improvement.",
  },
  {
    icon: <GiStonePath className="text-white size-6" />,
    feature: "Career Path Suggestions",
    description:
      "Discover potential roles based on your current skills and experience.",
  },
  {
    icon: <IoIosSearch className="text-white size-6" />,
    feature: "Smart Job Discovery",
    description: "Filter jobs based on your resume content and preferences.",
  },
  {
    icon: <VscChecklist className="text-white size-6" />,
    feature: "Application Tracking",
    description: "Monitor the status of your applications in real-time.",
  },
];

export const JOB_SEEKERS_FEATURE: FeatureType[] = [
  {
    icon: <FaCheck className="text-white size-6" />,
    feature: "Upload your resume",
    description: "Add your PDF resume and let our AI analyze it",
  },
  {
    icon: <FaCheck className="text-white size-6" />,
    feature: "Discover matching jobs",
    description: "Get personalized job recommendations based on your skills",
  },
  {
    icon: <FaCheck className="text-white size-6" />,
    feature: "Track applications",
    description: "Monitor the status of your applications in one place",
  },
  {
    icon: <FaCheck className="text-white size-6" />,
    feature: "Get resume feedback",
    description: "Improve your resume with AI-powered suggestions",
  },
];

export const RECRUITERS_FEATURE: FeatureType[] = [
  {
    icon: <FaCheck className="text-white size-6" />,
    feature: "Post job opportunities",
    description: "Create detailed job postings to attract the right talent",
  },
  {
    icon: <FaCheck className="text-white size-6" />,
    feature: "AI-based candidate ranking",
    description: "Let our AI prioritize applicants based on qualifications",
  },
  {
    icon: <FaCheck className="text-white size-6" />,
    feature: "Review detailed profiles",
    description: "Access comprehensive candidate information",
  },
  {
    icon: <FaCheck className="text-white size-6" />,
    feature: "Manage applications",
    description: "Easily respond to applications and schedule interviews",
  },
];

export const USER_TESTIMONY: UserTestimonyType[] = [
  {
    photo:
      "https://img.freepik.com/premium-photo/woman-wearing-black-suit-with-white-shirt-that-says-she-is-smiling_1044065-157.jpg",
    name: "Sarah Johnson",
    jobTitle: "Software Engineer",
    testimony:
      "TrabaHope helped me find a job that perfectly matched my skills. The AI feedback on my resume was invaluable!",
  },
  {
    photo:
      "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
    name: "Michael Tanner",
    jobTitle: "HR Manager",
    testimony:
      "As a recruiter, I've cut my hiring time in half. The AI ranking system consistently helps us find the best candidates.",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/D5603AQHAs8cT0hXD2g/profile-displayphoto-shrink_800_800/0/1689518586089?e=2147483647&v=beta&t=ZNTIFkmhfRGGeB1PLwpwuHn1yBF1E-cAfcqaRitzPxY",
    name: "Emily Rodriguez",
    jobTitle: "Marketing Specialist",
    testimony:
      "The career path suggestions opened my eyes to opportunities I hadn't considered. Now I'm in a role I love!",
  },
];

export const APPLICANT_SIGNUP_FEATURE = [
  {
    icon: <IoDocumentTextOutline className="text-white size-6" />,
    title: "AI Resume Matching",
    description:
      "Our AI analyzes your resume and matches you with jobs that fit your skills and experience, increasing your chances of getting hired.",
  },
  {
    icon: <GoGraph className="text-white size-6" />,
    title: "Career Growth Insights",
    description:
      " Get personalized feedback on your resume, skill recommendations, and career path suggestions based on your experience and goals.",
  },
  {
    icon: <PiListChecksThin className="text-white size-6" />,
    title: "Application Tracking",
    description:
      "Keep track of all your job applications in one place and receive updates on your application status in real-time.",
  },
];

export const RECRUITER_SIGNUP_FEATURE = [
  {
    icon: <FaRobot className="text-white size-6" />,
    title: "AI-Powered candidate matching",
    description:
      "Our advanced AI algorithms help you find candidates that truly match your job requirements, reducing time-to-hire and improving quality of hires.",
  },
  {
    icon: <PiListChecksThin className="text-white size-6" />,
    title: "Streamlined workflow",
    description:
      "Manage your entire recruitment process in one place with intelligent filtering, automated screening, and comprehensive applicant tracking.",
  },
];

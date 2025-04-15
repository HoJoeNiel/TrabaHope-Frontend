import React from "react";

import { IoDocumentTextOutline } from "react-icons/io5";
import { GrAscend } from "react-icons/gr";
import { IoChatbubblesSharp } from "react-icons/io5";
import { GiStonePath } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { VscChecklist } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";

export interface FeatureType {
  icon: React.ReactNode;
  feature: string;
  description: string;
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

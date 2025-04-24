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
import { category, EmploymentType, Job } from "@/types";

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

// ✅ Job Type
export const jobType: category[] = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
  { value: "temporary", label: "Temporary" },
  { value: "remote", label: "Remote" },
];

// ✅ Experience Level
export const experienceLevel: category[] = [
  { value: "entry-level", label: "Entry Level (0-1 yrs)" },
  { value: "junior", label: "Junior (1-3 yrs)" },
  { value: "mid", label: "Mid-Level (3-5 yrs)" },
  { value: "senior", label: "Senior (5-10 yrs)" },
  { value: "executive", label: "Executive (10+ yrs)" },
];

// ✅ Location (Philippines only)
export const locations: category[] = [
  { value: "metro-manila", label: "Metro Manila" },
  { value: "cebu", label: "Cebu" },
  { value: "davao", label: "Davao" },
  { value: "iloilo", label: "Iloilo" },
  { value: "bacolod", label: "Bacolod" },
  { value: "cagayan-de-oro", label: "Cagayan de Oro" },
  { value: "remote-ph", label: "Remote (Philippines)" },
];

// ✅ Industry
export const industries: category[] = [
  { value: "tech", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "education", label: "Education" },
  { value: "healthcare", label: "Healthcare" },
  { value: "bpo", label: "BPO / Call Center" },
  { value: "retail", label: "Retail" },
  { value: "marketing", label: "Marketing" },
  { value: "government", label: "Government" },
  { value: "freelancing", label: "Freelancing / Gig Work" },
];

// ✅ Salary Range (Monthly PHP)
export const salaryRange: category[] = [
  { value: "10000-20000", label: "₱10,000 - ₱20,000" },
  { value: "20001-30000", label: "₱20,001 - ₱30,000" },
  { value: "30001-50000", label: "₱30,001 - ₱50,000" },
  { value: "50001-70000", label: "₱50,001 - ₱70,000" },
  { value: "70001-100000", label: "₱70,001 - ₱100,000" },
  { value: "100001-above", label: "₱100,001 and above" },
];

export const JOBS: Job[] = [
  {
    id: crypto.randomUUID(),
    companyInitials: "TC",
    jobTitle: "Frontend Developer",
    companyName: "TechCorp Inc.",
    remote: true,
    location: "Salcedo Village, Makati City",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱35,000 - ₱45,000",
    postedDate: "2 days ago",
    matchPercentage: 98,
    description:
      "We're looking for an experienced Frontend Developer to join our team and build cutting-edge web applications using React, Typescript, and Tailwind CSS. You will be responsible for transforming design mockups into interactive, high-performance interfaces while collaborating closely with designers and backend developers. Ideal candidates have a keen eye for detail, a deep understanding of component-based architecture, and are comfortable working in a fast-paced agile environment. Experience with Git workflows and performance optimization is a plus.",
    tags: ["React", "Typescript", "Tailwind CSS", "Git"],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "HI",
    jobTitle: "Backend Engineer",
    companyName: "Hyperloop Innovations",
    remote: false,
    location: "Cebu IT Park, Cebu City",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱50,000 - ₱65,000",
    postedDate: "1 week ago",
    matchPercentage: 87,
    description:
      "We're seeking a Backend Engineer to build and maintain our RESTful APIs and microservices using Node.js and PostgreSQL. You'll collaborate with frontend developers and DevOps to ensure robust and scalable backend architecture. Experience with Docker, CI/CD pipelines, and writing unit/integration tests is highly preferred.",
    tags: ["Node.js", "PostgreSQL", "Docker", "CI/CD"],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "FD",
    jobTitle: "UI/UX Designer",
    companyName: "Figma Dreams",
    remote: true,
    location: "Remote (Philippines)",
    employmentType: EmploymentType.FREELANCE,
    salaryRange: "₱30,000 - ₱40,000",
    postedDate: "3 days ago",
    matchPercentage: 91,
    description:
      "We're hiring a UI/UX Designer who excels at creating intuitive and visually appealing designs using Figma. You’ll work closely with our product and engineering teams to shape the look and feel of our platform. Ideal candidates are user-obsessed and have experience conducting usability testing and crafting design systems.",
    tags: ["Figma", "Design Systems", "User Research", "Prototyping"],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "DA",
    jobTitle: "Data Analyst",
    companyName: "DataAware Co.",
    remote: false,
    location: "Ortigas Center, Pasig City",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱40,000 - ₱55,000",
    postedDate: "5 days ago",
    matchPercentage: 85,
    description:
      "Join our growing analytics team as a Data Analyst! You'll be responsible for interpreting complex data sets and generating actionable insights for stakeholders. Strong SQL skills, familiarity with data visualization tools like Power BI or Tableau, and a solid grasp of statistical techniques are must-haves.",
    tags: ["SQL", "Power BI", "Data Visualization", "Statistics"],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "GC",
    jobTitle: "Customer Support Specialist",
    companyName: "GlobalConnect",
    remote: true,
    location: "Remote (Philippines)",
    employmentType: EmploymentType.PART_TIME,
    salaryRange: "₱20,000 - ₱25,000",
    postedDate: "1 day ago",
    matchPercentage: 93,
    description:
      "We're looking for a reliable Customer Support Specialist to join our remote team. Responsibilities include responding to customer inquiries via email and chat, troubleshooting basic product issues, and escalating technical problems. Excellent written English and empathy are key traits we value.",
    tags: [
      "Customer Service",
      "Email Support",
      "Chat Support",
      "English Communication",
    ],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "NX",
    jobTitle: "UI/UX Designer",
    companyName: "NextWave Solutions",
    remote: true,
    location: "Remote",
    employmentType: EmploymentType.PART_TIME,
    salaryRange: "₱25,000 - ₱35,000",
    postedDate: "1 day ago",
    matchPercentage: 92,
    description:
      "NextWave Solutions is hiring a creative UI/UX Designer to help design intuitive interfaces for our web and mobile apps. You'll work closely with product managers and developers to turn user needs into elegant visual designs.",
    tags: ["Figma", "User Research", "Prototyping", "Adobe XD"],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "DF",
    jobTitle: "Data Analyst",
    companyName: "DataForge Analytics",
    remote: false,
    location: "Ortigas Center, Pasig City",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱40,000 - ₱55,000",
    postedDate: "3 days ago",
    matchPercentage: 87,
    description:
      "We’re seeking a Data Analyst to process and analyze large data sets to uncover insights that will drive strategic decisions across departments. Candidates should be proficient in SQL, Python, and data visualization tools like Power BI or Tableau.",
    tags: ["SQL", "Python", "Power BI", "Data Visualization"],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "GV",
    jobTitle: "Mobile App Developer",
    companyName: "Groove Ventures",
    remote: true,
    location: "Remote",
    employmentType: EmploymentType.CONTRACT,
    salaryRange: "₱60,000 - ₱80,000",
    postedDate: "5 hours ago",
    matchPercentage: 94,
    description:
      "Groove Ventures is on the lookout for a skilled Mobile App Developer with experience in Flutter and Firebase. You will play a key role in building scalable, high-performance applications for our global user base.",
    tags: ["Flutter", "Firebase", "REST API", "State Management"],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "ZL",
    jobTitle: "DevOps Engineer",
    companyName: "ZenLayer PH",
    remote: false,
    location: "Bonifacio Global City, Taguig",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱55,000 - ₱70,000",
    postedDate: "4 days ago",
    matchPercentage: 89,
    description:
      "ZenLayer PH is hiring a DevOps Engineer to automate infrastructure and improve our CI/CD pipelines. The ideal candidate has experience with cloud providers, Docker, Kubernetes, and monitoring tools like Prometheus.",
    tags: ["CI/CD", "Kubernetes", "Docker", "AWS"],
    actions: {
      saved: false,
      applied: false,
    },
  },
  {
    id: crypto.randomUUID(),
    companyInitials: "AS",
    jobTitle: "Content Writer",
    companyName: "Aspire Media",
    remote: true,
    location: "Remote",
    employmentType: EmploymentType.FREELANCE,
    salaryRange: "₱20,000 - ₱30,000",
    postedDate: "Just now",
    matchPercentage: 91,
    description:
      "Aspire Media is looking for a creative and detail-oriented content writer to produce compelling blog posts, social media content, and marketing copy. Experience in SEO and content strategy is a plus.",
    tags: ["SEO", "Copywriting", "Content Strategy", "Blogging"],
    actions: {
      saved: false,
      applied: false,
    },
  },
];

export const COLORS = [
  { bg: "bg-slate-200", text: "text-slate-600", border: "border-l-slate-300" },
  { bg: "bg-gray-200", text: "text-gray-600", border: "border-l-gray-300" },
  { bg: "bg-zinc-200", text: "text-zinc-600", border: "border-l-zinc-300" },
  {
    bg: "bg-neutral-200",
    text: "text-neutral-600",
    border: "border-l-neutral-300",
  },
  { bg: "bg-stone-200", text: "text-stone-600", border: "border-l-stone-300" },
  { bg: "bg-red-200", text: "text-red-600", border: "border-l-red-300" },
  {
    bg: "bg-orange-200",
    text: "text-orange-600",
    border: "border-l-orange-300",
  },
  { bg: "bg-amber-200", text: "text-amber-600", border: "border-l-amber-300" },
  {
    bg: "bg-yellow-200",
    text: "text-yellow-600",
    border: "border-l-yellow-300",
  },
  { bg: "bg-lime-200", text: "text-lime-600", border: "border-l-lime-300" },
  { bg: "bg-green-200", text: "text-green-600", border: "border-l-green-300" },
  {
    bg: "bg-emerald-200",
    text: "text-emerald-600",
    border: "border-l-emerald-300",
  },
  { bg: "bg-teal-200", text: "text-teal-600", border: "border-l-teal-300" },
  { bg: "bg-cyan-200", text: "text-cyan-600", border: "border-l-cyan-300" },
  { bg: "bg-sky-200", text: "text-sky-600", border: "border-l-sky-300" },
  { bg: "bg-blue-200", text: "text-blue-600", border: "border-l-blue-300" },
  {
    bg: "bg-indigo-200",
    text: "text-indigo-600",
    border: "border-l-indigo-300",
  },
  {
    bg: "bg-violet-200",
    text: "text-violet-600",
    border: "border-l-violet-300",
  },
  {
    bg: "bg-purple-200",
    text: "text-purple-600",
    border: "border-l-purple-300",
  },
  {
    bg: "bg-fuchsia-200",
    text: "text-fuchsia-600",
    border: "border-l-fuchsia-300",
  },
  { bg: "bg-pink-200", text: "text-pink-600", border: "border-l-pink-300" },
  { bg: "bg-rose-200", text: "text-rose-600", border: "border-l-rose-300" },
];

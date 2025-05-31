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
import {
  category,
  Company,
  EmploymentType,
  ApplicantSideJob,
  CompanyFetchedApplication,
} from "@/types";

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

export const applications: CompanyFetchedApplication[] = [
  {
    id: "dawdawdwa",
    name: "Jonel Villaver",
    title: "Aspiring Frontend Developer",
    email: "jonelvillaver735@gmail.com",
    contactNumber: "09708075290",
    location: "San Nicolas, Manila",
    resumeFile: "jonel_villaver_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 1,
      title: "Frontend Developer",
      employmentType: "Full-time",
      tags: "React,Tailwind CSS,JavaScript",
    },
    status: "Pending",
    appliedDate: "5/30/2025",
  },
  {
    id: "sjdajdaopw",
    name: "Maria Santos",
    title: "Senior Full Stack Developer",
    email: "maria.santos@email.com",
    contactNumber: "09171234567",
    location: "Quezon City, Metro Manila",
    resumeFile: "maria_santos_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 2,
      title: "Backend Developer",
      employmentType: "Full-time",
      tags: "Node.js,MongoDB,Express.js",
    },
    status: "Interview",
    appliedDate: "5/27/2025",
  },
  {
    id: "snrfjepofjwaopda",
    name: "Carlos Reyes",
    title: "Creative UI/UX Designer",
    email: "carlos.reyes@design.com",
    contactNumber: "09087776666",
    location: "Makati City, Metro Manila",
    resumeFile: "carlos_reyes_portfolio.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 3,
      title: "UI/UX Designer",
      employmentType: "Contract",
      tags: "Figma,Adobe XD,Prototyping",
    },
    status: "Hired",
    appliedDate: "5/22/2025",
  },
  {
    id: "dawjdawjopdjawpodaw",
    name: "Liza Dela Cruz",
    title: "Data Science Specialist",
    email: "liza.delacruz@analytics.com",
    contactNumber: "09054443333",
    location: "Pasig City, Metro Manila",
    resumeFile: "liza_delacruz_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 4,
      title: "Data Analyst",
      employmentType: "Remote",
      tags: "Python,SQL,Tableau",
    },
    status: "Rejected",
    appliedDate: "5/20/2025",
  },
  {
    id: "dawjdopawjdopawjodaw",
    name: "Arnold Mendoza",
    title: "Senior Software Engineer",
    email: "arnold.mendoza@tech.com",
    contactNumber: "09021112222",
    location: "Taguig City, Metro Manila",
    resumeFile: "arnold_mendoza_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 6,
      title: "Software Engineer",
      employmentType: "Full-time",
      tags: "Java,Spring Boot,Microservices",
    },
    status: "Pending",
    appliedDate: "5/18/2025",
  },
  {
    id: "Dwadjopawjdawjdopaw",
    name: "Jennifer Cruz",
    title: "Digital Marketing Strategist",
    email: "jen.cruz@marketing.ph",
    contactNumber: "09123456789",
    location: "Mandaluyong City, Metro Manila",
    resumeFile: "jennifer_cruz_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 9,
      title: "Marketing Manager",
      employmentType: "Full-time",
      tags: "SEO,Social Media,Analytics",
    },
    status: "Interview",
    appliedDate: "5/25/2025",
  },
  {
    id: "AWDawjodpawjdoawjdopawd",
    name: "Miguel Torres",
    title: "DevOps Engineer",
    email: "miguel.torres@cloud.com",
    contactNumber: "09987654321",
    location: "Paranaque City, Metro Manila",
    resumeFile: "miguel_torres_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 10,
      title: "DevOps Engineer",
      employmentType: "Full-time",
      tags: "AWS,Docker, Kubernetes",
    },
    status: "Pending",
    appliedDate: "5/26/2025",
  },
  {
    id: "wajdoawjdpowjdawdawdawd",
    name: "Sofia Ramos",
    title: "QA Automation Engineer",
    email: "sofia.ramos@testing.ph",
    contactNumber: "09456789123",
    location: "Las Pinas City, Metro Manila",
    resumeFile: "sofia_ramos_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 91,
      title: "QA Engineer",
      employmentType: "Full-time",
      tags: "Selenium,Cypress,Automation",
    },
    status: "Interview",
    appliedDate: "5/24/2025",
  },
  {
    id: "dawjdjawodjawdjpawjdawjdojdpoawjdaw",
    name: "Robert Garcia",
    title: "Mobile App Developer",
    email: "robert.garcia@mobile.ph",
    contactNumber: "09234567890",
    location: "Muntinlupa City, Metro Manila",
    resumeFile: "robert_garcia_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 102,
      title: "Mobile Developer",
      employmentType: "Contract",
      tags: "React Native,Flutter,iOS",
    },
    status: "Hired",
    appliedDate: "5/15/2025",
  },
  {
    id: "Sdjoejdpadjoawjdopwjdwaa",
    name: "Ana Gonzales",
    title: "Product Manager",
    email: "ana.gonzales@product.com",
    contactNumber: "09345678901",
    location: "Marikina City, Metro Manila",
    resumeFile: "ana_gonzales_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 1099,
      title: "Product Manager",
      employmentType: "Full-time",
      tags: "Agile,Scrum,Product Strategy",
    },
    status: "Pending",
    appliedDate: "5/28/2025",
  },
  {
    id: "dawjopdjawodjawdjopawjdpawjdoawd",
    name: "David Lee",
    title: "Cybersecurity Specialist",
    email: "david.lee@security.ph",
    contactNumber: "09567890123",
    location: "Caloocan City, Metro Manila",
    resumeFile: "david_lee_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 1311,
      title: "Security Engineer",
      employmentType: "Full-time",
      tags: "Penetration Testing,CISSP,Network Security",
    },
    status: "Rejected",
    appliedDate: "5/19/2025",
  },
  {
    id: "Dawdjopawjdopawdjopawjdopawjdpvg",
    name: "Grace Kim",
    title: "Business Analyst",
    email: "grace.kim@business.ph",
    contactNumber: "09678901234",
    location: "Valenzuela City, Metro Manila",
    resumeFile: "grace_kim_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 242,
      title: "Business Analyst",
      employmentType: "Full-time",
      tags: "Requirements Analysis,Process Improvement,SQL",
    },
    status: "Interview",
    appliedDate: "5/23/2025",
  },
  {
    id: "tkd[pbkdogdrkp",
    name: "Paolo Martinez",
    title: "Cloud Solutions Architect",
    email: "paolo.martinez@cloud.ph",
    contactNumber: "09789012345",
    location: "Malabon City, Metro Manila",
    resumeFile: "paolo_martinez_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 2342,
      title: "Solutions Architect",
      employmentType: "Full-time",
      tags: "Azure,Cloud Architecture,Enterprise Solutions",
    },
    status: "Pending",
    appliedDate: "5/29/2025",
  },
  {
    id: "awjdojawopdjawodwahyhyh",
    name: "Kristine Aquino",
    title: "Content Writer & SEO Specialist",
    email: "kristine.aquino@content.ph",
    contactNumber: "09890123456",
    location: "Navotas City, Metro Manila",
    resumeFile: "kristine_aquino_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 928,
      title: "Content Marketing Specialist",
      employmentType: "Remote",
      tags: "Content Writing,SEO,WordPress",
    },
    status: "Hired",
    appliedDate: "5/17/2025",
  },
  {
    id: "frsopjrfopsejfsoefj",
    name: "Mark Johnson",
    title: "Database Administrator",
    email: "mark.johnson@database.ph",
    contactNumber: "09901234567",
    location: "San Juan City, Metro Manila",
    resumeFile: "mark_johnson_resume.pdf",
    photoUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    jobApplied: {
      id: 34242,
      title: "Database Administrator",
      employmentType: "Full-time",
      tags: "PostgreSQL,MySQL,Database Optimization",
    },
    status: "Pending",
    appliedDate: "5/21/2025",
  },
];

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

export const JOBS: ApplicantSideJob[] = [
  {
    id: crypto.randomUUID(),
    companyProfileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    jobTitle: "Frontend Developer",
    companyName: "Apple Inc.",
    remote: true,
    location: "Salcedo Village, Makati City",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱35,000 - ₱45,000",
    timestamps: {
      posted: new Date("March 21, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    jobTitle: "Backend Engineer",
    companyName: "Google LLC",
    remote: false,
    location: "Cebu IT Park, Cebu City",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱50,000 - ₱65,000",
    timestamps: {
      posted: new Date("March 21, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    jobTitle: "UI/UX Designer",
    companyName: "Microsoft Corporation",
    remote: true,
    location: "Remote (Philippines)",
    employmentType: EmploymentType.FREELANCE,
    salaryRange: "₱30,000 - ₱40,000",
    timestamps: {
      posted: new Date("April 07, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    jobTitle: "Data Analyst",
    companyName: "Amazon, Inc.",
    remote: false,
    location: "Ortigas Center, Pasig City",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱40,000 - ₱55,000",
    timestamps: {
      posted: new Date("February 27, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://www.stocksbnb.com/wp-content/uploads/2022/08/meta-logo-1.png",
    jobTitle: "Customer Support Specialist",
    companyName: "Meta Platforms Inc.",
    remote: true,
    location: "Remote (Philippines)",
    employmentType: EmploymentType.PART_TIME,
    salaryRange: "₱20,000 - ₱25,000",
    timestamps: {
      posted: new Date("April 13, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    jobTitle: "UI/UX Designer",
    companyName: "Netflix, Inc.",
    remote: true,
    location: "Remote",
    employmentType: EmploymentType.PART_TIME,
    salaryRange: "₱25,000 - ₱35,000",
    timestamps: {
      posted: new Date("January 18, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    jobTitle: "Data Analyst",
    companyName: "Nike, Inc.",
    remote: false,
    location: "Ortigas Center, Pasig City",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱40,000 - ₱55,000",
    timestamps: {
      posted: new Date("February 11, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    jobTitle: "Mobile App Developer",
    companyName: "Tesla, Inc.",
    remote: true,
    location: "Remote",
    employmentType: EmploymentType.CONTRACT,
    salaryRange: "₱60,000 - ₱80,000",
    timestamps: {
      posted: new Date("March 29, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo-1962-1969.png",
    jobTitle: "DevOps Engineer",
    companyName: "Sony Group Corporation",
    remote: false,
    location: "Bonifacio Global City, Taguig",
    employmentType: EmploymentType.FULL_TIME,
    salaryRange: "₱55,000 - ₱70,000",
    timestamps: {
      posted: new Date("March 03, 2025").toLocaleDateString(),
    },
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
    companyProfileUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    jobTitle: "Content Writer",
    companyName: "Samsung Electronics Co., Ltd.",
    remote: true,
    location: "Remote",
    employmentType: EmploymentType.FREELANCE,
    salaryRange: "₱20,000 - ₱30,000",
    timestamps: {
      posted: new Date("April 04, 2025").toLocaleDateString(),
    },
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

export const COMPANIES: Company[] = [
  {
    name: "Google LLC",
    companySlug: "google-llc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    location: "Mountain View, California, USA",
    website: "google.com",
    industry: "Internet Services and Products",
    size: "100,000+ employees",
    founded: "1998",
    specialties: [
      "Search Engine",
      "Cloud Computing",
      "Advertising Services",
      "AI Research",
    ],
    about:
      "Google LLC is a multinational technology company specializing in Internet-related services and products. These include online advertising technologies, search engine, cloud computing, software, and hardware. Google is considered one of the Big Five companies in the American information technology industry.",
    mission:
      "To organize the world’s information and make it universally accessible and useful.",
    benefits: [
      "Competitive salary packages",
      "Health and wellness programs",
      "Professional development budget",
      "Flexible work arrangements",
      "On-site meals and facilities",
      "Annual bonuses",
      "Cutting-edge work environment",
    ],
    openPositions: 3,
    averageRating: 4.8,
    reviewCount: 1574,
    activeJobs: [
      {
        id: 1,
        title: "Software Engineer",
        location: "Mountain View, California",
        type: "Full-time",
        postedDate: "20 days ago",
        salary: "$120,000 - $150,000",
        matchScore: 95,
      },
      {
        id: 2,
        title: "Data Scientist",
        location: "Remote",
        type: "Full-time",
        postedDate: "10 days ago",
        salary: "$110,000 - $140,000",
        matchScore: 92,
      },
      {
        id: 3,
        title: "Product Manager",
        location: "New York City, New York",
        type: "Full-time",
        postedDate: "5 days ago",
        salary: "$130,000 - $160,000",
        matchScore: 90,
      },
    ],
  },
  {
    name: "Amazon, Inc.",
    companySlug: "amazon-inc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    location: "Seattle, Washington, USA",
    website: "amazon.com",
    industry: "E-commerce and Cloud Computing",
    size: "1,500,000+ employees",
    founded: "1994",
    specialties: [
      "E-commerce",
      "Cloud Services (AWS)",
      "Digital Streaming",
      "AI and Logistics",
    ],
    about:
      "Amazon.com, Inc. is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the world's most valuable brands and is often referred to as 'The Everything Store'.",
    mission:
      "To be Earth’s most customer-centric company, where customers can find and discover anything they might want to buy online.",
    benefits: [
      "Employee discounts",
      "Health insurance (HMO)",
      "Career development programs",
      "Paid parental leave",
      "Annual performance bonuses",
      "Stock options",
      "Flexible working opportunities",
    ],
    openPositions: 3,
    averageRating: 4.5,
    reviewCount: 2450,
    activeJobs: [
      {
        id: 1,
        title: "Warehouse Manager",
        location: "Seattle, Washington",
        type: "Full-time",
        postedDate: "15 days ago",
        salary: "$60,000 - $80,000",
        matchScore: 85,
      },
      {
        id: 2,
        title: "AWS Solutions Architect",
        location: "Remote",
        type: "Full-time",
        postedDate: "7 days ago",
        salary: "$130,000 - $160,000",
        matchScore: 93,
      },
      {
        id: 3,
        title: "Software Development Engineer",
        location: "Austin, Texas",
        type: "Full-time",
        postedDate: "2 days ago",
        salary: "$115,000 - $140,000",
        matchScore: 90,
      },
    ],
  },
  {
    name: "Microsoft Corporation",
    companySlug: "microsoft-corporation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    location: "Redmond, Washington, USA",
    website: "microsoft.com",
    industry: "Software and Cloud Computing",
    size: "220,000+ employees",
    founded: "1975",
    specialties: [
      "Operating Systems",
      "Cloud Computing (Azure)",
      "Productivity Software",
      "Artificial Intelligence",
    ],
    about:
      "Microsoft Corporation is a multinational technology company that produces computer software, consumer electronics, personal computers, and related services. Microsoft’s best known software products are the Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.",
    mission:
      "To empower every person and every organization on the planet to achieve more.",
    benefits: [
      "Comprehensive health plans",
      "Employee stock purchase plan",
      "Career development and training",
      "Generous paid time off",
      "Remote work opportunities",
      "Annual performance bonuses",
      "Inclusive work environment",
    ],
    openPositions: 3,
    averageRating: 4.6,
    reviewCount: 1980,
    activeJobs: [
      {
        id: 1,
        title: "Cloud Engineer (Azure)",
        location: "Redmond, Washington",
        type: "Full-time",
        postedDate: "12 days ago",
        salary: "$125,000 - $155,000",
        matchScore: 92,
      },
      {
        id: 2,
        title: "Software Developer",
        location: "Remote",
        type: "Full-time",
        postedDate: "8 days ago",
        salary: "$110,000 - $135,000",
        matchScore: 88,
      },
      {
        id: 3,
        title: "Business Analyst",
        location: "Atlanta, Georgia",
        type: "Full-time",
        postedDate: "3 days ago",
        salary: "$85,000 - $105,000",
        matchScore: 86,
      },
    ],
  },
  {
    name: "Apple Inc.",
    companySlug: "apple-inc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    location: "Cupertino, California, USA",
    website: "apple.com",
    industry: "Consumer Electronics and Software",
    size: "160,000+ employees",
    founded: "1976",
    specialties: [
      "Consumer Electronics",
      "Software Development",
      "Digital Services",
      "Innovation and Design",
    ],
    about:
      "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It is well known for its iconic products such as the iPhone, Mac, iPad, and Apple Watch, as well as services like the App Store, Apple Music, and iCloud.",
    mission:
      "To bring the best user experience to customers through innovative hardware, software, and services.",
    benefits: [
      "Competitive salary and stock options",
      "Health and wellness benefits",
      "Employee discounts",
      "Professional growth programs",
      "Paid family leave",
      "Modern, innovative workplace",
      "Annual bonuses",
    ],
    openPositions: 3,
    averageRating: 4.7,
    reviewCount: 1620,
    activeJobs: [
      {
        id: 1,
        title: "iOS Software Engineer",
        location: "Cupertino, California",
        type: "Full-time",
        postedDate: "16 days ago",
        salary: "$130,000 - $160,000",
        matchScore: 94,
      },
      {
        id: 2,
        title: "Hardware Engineer",
        location: "Austin, Texas",
        type: "Full-time",
        postedDate: "11 days ago",
        salary: "$120,000 - $150,000",
        matchScore: 89,
      },
      {
        id: 3,
        title: "Product Designer",
        location: "Remote",
        type: "Full-time",
        postedDate: "6 days ago",
        salary: "$110,000 - $140,000",
        matchScore: 91,
      },
    ],
  },
  {
    name: "Meta Platforms, Inc.",
    companySlug: "meta-platforms-inc",
    logo: "https://www.stocksbnb.com/wp-content/uploads/2022/08/meta-logo-1.png",
    location: "Menlo Park, California, USA",
    website: "meta.com",
    industry: "Social Media and Virtual Reality",
    size: "70,000+ employees",
    founded: "2004",
    specialties: [
      "Social Media",
      "Virtual Reality",
      "Artificial Intelligence",
      "Augmented Reality",
    ],
    about:
      "Meta Platforms, Inc. builds technologies that help people connect, find communities, and grow businesses. Meta's products include Facebook, Instagram, WhatsApp, and Oculus VR. Meta is also leading the development of the metaverse — a next generation of the internet.",
    mission:
      "Give people the power to build community and bring the world closer together.",
    benefits: [
      "Comprehensive health coverage",
      "Remote and flexible work options",
      "Wellness programs",
      "Parental and family support",
      "Career development and training",
      "Annual bonuses",
      "Equity compensation",
    ],
    openPositions: 3,
    averageRating: 4.5,
    reviewCount: 1380,
    activeJobs: [
      {
        id: 1,
        title: "Machine Learning Engineer",
        location: "Remote",
        type: "Full-time",
        postedDate: "9 days ago",
        salary: "$140,000 - $180,000",
        matchScore: 93,
      },
      {
        id: 2,
        title: "AR/VR Software Engineer",
        location: "Menlo Park, California",
        type: "Full-time",
        postedDate: "4 days ago",
        salary: "$135,000 - $165,000",
        matchScore: 91,
      },
      {
        id: 3,
        title: "Privacy Program Manager",
        location: "New York City, New York",
        type: "Full-time",
        postedDate: "2 days ago",
        salary: "$120,000 - $150,000",
        matchScore: 89,
      },
    ],
  },
  {
    name: "Netflix, Inc.",
    companySlug: "netflix-inc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    location: "Los Gatos, California, USA",
    website: "netflix.com",
    industry: "Streaming Entertainment",
    size: "13,000+ employees",
    founded: "1997",
    specialties: [
      "Streaming Media",
      "Content Production",
      "Technology Innovation",
      "Original Programming",
    ],
    about:
      "Netflix, Inc. is the world's leading streaming entertainment service with over 230 million paid memberships in over 190 countries enjoying TV series, documentaries, and feature films across a wide variety of genres and languages. Netflix creates and distributes original content alongside licensed media.",
    mission:
      "To entertain the world by offering exceptional storytelling and innovative viewing experiences.",
    benefits: [
      "Highly competitive salaries",
      "Comprehensive health plans",
      "Flexible vacation policy",
      "Remote and hybrid work options",
      "Professional development support",
      "Annual stock options",
      "Inclusive workplace culture",
    ],
    openPositions: 3,
    averageRating: 4.4,
    reviewCount: 960,
    activeJobs: [
      {
        id: 1,
        title: "Content Operations Specialist",
        location: "Los Gatos, California",
        type: "Full-time",
        postedDate: "13 days ago",
        salary: "$90,000 - $110,000",
        matchScore: 86,
      },
      {
        id: 2,
        title: "Backend Engineer",
        location: "Remote",
        type: "Full-time",
        postedDate: "5 days ago",
        salary: "$115,000 - $140,000",
        matchScore: 88,
      },
      {
        id: 3,
        title: "Creative Producer",
        location: "Los Angeles, California",
        type: "Full-time",
        postedDate: "3 days ago",
        salary: "$100,000 - $130,000",
        matchScore: 87,
      },
    ],
  },
  {
    name: "Nike, Inc.",
    companySlug: "nike-inc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    location: "Beaverton, Oregon, USA",
    website: "nike.com",
    industry: "Apparel and Footwear",
    size: "79,000+ employees",
    founded: "1964",
    specialties: [
      "Athletic Footwear",
      "Sportswear",
      "Equipment",
      "Innovation and Design",
    ],
    about:
      "Nike, Inc. is a global leader in the design, marketing, and distribution of athletic footwear, apparel, equipment, and accessories. Nike's mission is to bring inspiration and innovation to every athlete in the world.",
    mission:
      "To bring inspiration and innovation to every athlete* in the world. (*If you have a body, you are an athlete.)",
    benefits: [
      "Competitive pay and bonuses",
      "Comprehensive health benefits",
      "Employee product discounts",
      "Fitness and wellness programs",
      "Career development opportunities",
      "Flexible working options",
      "Paid time off and holidays",
    ],
    openPositions: 3,
    averageRating: 4.3,
    reviewCount: 1150,
    activeJobs: [
      {
        id: 1,
        title: "Product Manager",
        location: "Beaverton, Oregon",
        type: "Full-time",
        postedDate: "12 days ago",
        salary: "$95,000 - $120,000",
        matchScore: 87,
      },
      {
        id: 2,
        title: "Footwear Designer",
        location: "Beaverton, Oregon",
        type: "Full-time",
        postedDate: "8 days ago",
        salary: "$85,000 - $110,000",
        matchScore: 90,
      },
      {
        id: 3,
        title: "Marketing Specialist",
        location: "Remote",
        type: "Full-time",
        postedDate: "5 days ago",
        salary: "$70,000 - $95,000",
        matchScore: 85,
      },
    ],
  },
  {
    name: "Tesla, Inc.",
    companySlug: "tesla-inc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    location: "Palo Alto, California, USA",
    website: "tesla.com",
    industry: "Automotive and Energy",
    size: "140,000+ employees",
    founded: "2003",
    specialties: [
      "Electric Vehicles",
      "Renewable Energy",
      "Autonomous Driving",
      "Battery Technology",
    ],
    about:
      "Tesla, Inc. accelerates the world's transition to sustainable energy through electric vehicles, solar energy products, and integrated renewable energy solutions for homes and businesses.",
    mission: "To accelerate the world's transition to sustainable energy.",
    benefits: [
      "Stock options",
      "Comprehensive health insurance",
      "Employee discounts on Tesla products",
      "Professional growth opportunities",
      "Flexible working hours",
      "Wellness and mental health support",
      "Annual bonuses",
    ],
    openPositions: 3,
    averageRating: 4.4,
    reviewCount: 1890,
    activeJobs: [
      {
        id: 1,
        title: "Mechanical Engineer",
        location: "Fremont, California",
        type: "Full-time",
        postedDate: "7 days ago",
        salary: "$110,000 - $140,000",
        matchScore: 89,
      },
      {
        id: 2,
        title: "Battery Test Technician",
        location: "Nevada, USA",
        type: "Full-time",
        postedDate: "10 days ago",
        salary: "$70,000 - $90,000",
        matchScore: 86,
      },
      {
        id: 3,
        title: "Software Engineer - Autopilot",
        location: "Palo Alto, California",
        type: "Full-time",
        postedDate: "3 days ago",
        salary: "$130,000 - $160,000",
        matchScore: 92,
      },
    ],
  },
  {
    name: "Sony Group Corporation",
    companySlug: "sony-group-corporation",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo-1962-1969.png",
    location: "Tokyo, Japan",
    website: "sony.com",
    industry: "Electronics and Entertainment",
    size: "110,000+ employees",
    founded: "1946",
    specialties: [
      "Consumer Electronics",
      "Gaming and PlayStation",
      "Music and Film",
      "Semiconductors",
    ],
    about:
      "Sony Group Corporation is a global leader in technology, entertainment, and gaming. It operates businesses across electronics, game development, motion pictures, music production, and financial services.",
    mission:
      "To fill the world with emotion, through the power of creativity and technology.",
    benefits: [
      "Health and life insurance",
      "Professional development programs",
      "Flexible remote work opportunities",
      "Employee product discounts",
      "Wellness programs",
      "Annual performance bonuses",
      "Cultural exchange programs",
    ],
    openPositions: 3,
    averageRating: 4.2,
    reviewCount: 1020,
    activeJobs: [
      {
        id: 1,
        title: "Game Developer - PlayStation",
        location: "San Mateo, California",
        type: "Full-time",
        postedDate: "14 days ago",
        salary: "$100,000 - $130,000",
        matchScore: 88,
      },
      {
        id: 2,
        title: "Electronics Engineer",
        location: "Tokyo, Japan",
        type: "Full-time",
        postedDate: "6 days ago",
        salary: "¥7,000,000 - ¥10,000,000",
        matchScore: 86,
      },
      {
        id: 3,
        title: "Music Licensing Specialist",
        location: "Los Angeles, California",
        type: "Full-time",
        postedDate: "5 days ago",
        salary: "$80,000 - $100,000",
        matchScore: 84,
      },
    ],
  },
  {
    name: "Samsung Electronics Co., Ltd.",
    companySlug: "samsung-electronics-co-ltd",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    location: "Suwon, South Korea",
    website: "samsung.com",
    industry: "Electronics and Information Technology",
    size: "266,000+ employees",
    founded: "1969",
    specialties: [
      "Consumer Electronics",
      "Semiconductors",
      "Telecommunications",
      "Home Appliances",
    ],
    about:
      "Samsung Electronics is a global technology leader, recognized for its innovative consumer electronics, mobile communications, semiconductor solutions, and home appliances.",
    mission:
      "Inspire the world with innovative technologies, products, and design that enrich people's lives and contribute to social prosperity.",
    benefits: [
      "Competitive salary and incentives",
      "Global mobility opportunities",
      "Comprehensive health and wellness programs",
      "Career growth and learning support",
      "Flexible working arrangements",
      "Employee discounts on Samsung products",
      "Annual bonuses",
    ],
    openPositions: 3,
    averageRating: 4.3,
    reviewCount: 1320,
    activeJobs: [
      {
        id: 1,
        title: "Mobile Software Engineer",
        location: "Seoul, South Korea",
        type: "Full-time",
        postedDate: "9 days ago",
        salary: "₩70,000,000 - ₩90,000,000",
        matchScore: 90,
      },
      {
        id: 2,
        title: "Semiconductor Process Engineer",
        location: "Austin, Texas",
        type: "Full-time",
        postedDate: "4 days ago",
        salary: "$95,000 - $125,000",
        matchScore: 88,
      },
      {
        id: 3,
        title: "Product Marketing Manager",
        location: "New Jersey, USA",
        type: "Full-time",
        postedDate: "7 days ago",
        salary: "$85,000 - $110,000",
        matchScore: 87,
      },
    ],
  },
];

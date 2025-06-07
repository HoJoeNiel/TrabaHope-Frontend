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
  EmploymentType,
  Interview,
  ApplicantJob,
  Application,
} from "@/types";
import { FileText, Users, Calendar, UserCheck } from "lucide-react";

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

export const jobs: ApplicantJob[] = [
  {
    companyId: "c1",
    requirements: "3+ years experience in frontend development",
    title: "Frontend Developer",
    maxSalary: 90000,
    minSalary: 60000,
    location: "New York, NY",
    employmentType: EmploymentType.FULL_TIME,
    description: "Build and maintain UI for our main platform.",
    benefits: "Health insurance, 401(k), remote-friendly",
    responsibilities: "Implement features, fix bugs, write tests",
    remote: true,
    tags: ["React", "TypeScript", "CSS"],
    createdAt: "2025-06-01T10:00:00Z",
    id: 1,
    AIScore: 92,
    company: {
      name: "TechNova",
      photoURL: "https://example.com/logos/technova.png",
    },
  },
  {
    companyId: "c2",
    requirements: "Experience with backend systems, Node.js preferred",
    title: "Backend Engineer",
    maxSalary: 110000,
    minSalary: 85000,
    location: "Austin, TX",
    employmentType: EmploymentType.CONTRACT,
    description: "Develop APIs and handle system integrations.",
    benefits: "Flexible hours, performance bonuses",
    responsibilities: "Maintain APIs, optimize databases",
    remote: false,
    tags: ["Node.js", "SQL", "Microservices"],
    createdAt: "2025-06-02T09:30:00Z",
    id: 2,
    AIScore: 92,
    company: {
      name: "DataForge",
      photoURL: "https://example.com/logos/dataforge.png",
    },
  },
  {
    companyId: "c3",
    requirements: "Strong skills in UX/UI design",
    title: "Product Designer",
    maxSalary: 100000,
    minSalary: 75000,
    location: "Remote",
    employmentType: EmploymentType.FREELANCE,
    description: "Design user-friendly interfaces and user journeys.",
    benefits: "Remote work, design conferences",
    responsibilities: "Work with product and dev teams to design features",
    remote: true,
    tags: ["Figma", "UX", "UI"],
    createdAt: "2025-06-03T08:45:00Z",
    id: 3,
    AIScore: 92,
    company: {
      name: "PixelPerfect",
      photoURL: "https://example.com/logos/pixelperfect.png",
    },
  },
  {
    companyId: "c4",
    requirements: "2+ years with mobile app development",
    title: "Mobile Developer",
    maxSalary: 95000,
    minSalary: 70000,
    location: "San Francisco, CA",
    employmentType: EmploymentType.CONTRACT,
    description: "Develop and maintain iOS and Android apps.",
    benefits: "Gym membership, stock options, dental insurance",
    responsibilities: "Implement features, work with UX/UI team",
    remote: false,
    tags: ["Flutter", "React Native", "iOS", "Android"],
    createdAt: "2025-06-01T15:10:00Z",
    id: 4,
    AIScore: 92,
    company: {
      name: "AppWorx",
      photoURL: "https://example.com/logos/appworx.png",
    },
  },
  {
    companyId: "c5",
    requirements: "Solid experience in DevOps practices and cloud platforms",
    title: "DevOps Engineer",
    maxSalary: 120000,
    minSalary: 90000,
    location: "Seattle, WA",
    employmentType: EmploymentType.FULL_TIME,
    description: "Maintain CI/CD pipelines and cloud infrastructure.",
    benefits: "Stock options, remote flexibility, learning budget",
    responsibilities: "Optimize deployment process, monitor infrastructure",
    remote: true,
    tags: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    createdAt: "2025-06-01T12:00:00Z",
    id: 5,
    AIScore: 92,
    company: {
      name: "CloudReach",
      photoURL: "https://example.com/logos/cloudreach.png",
    },
  },
  {
    companyId: "c6",
    requirements: "Knowledge of machine learning fundamentals",
    title: "ML Engineer",
    maxSalary: 130000,
    minSalary: 95000,
    location: "Boston, MA",
    employmentType: EmploymentType.FREELANCE,
    description: "Build and train machine learning models for analytics.",
    benefits: "Research budget, flexible hours, company retreats",
    responsibilities: "Model training, data preprocessing, deployment",
    remote: false,
    tags: ["Python", "TensorFlow", "Data Science"],
    createdAt: "2025-06-02T14:20:00Z",
    id: 6,
    AIScore: 92,
    company: {
      name: "NeuroTech",
      photoURL: "https://example.com/logos/neurotech.png",
    },
  },
  {
    companyId: "c7",
    requirements:
      "Background in customer support and technical troubleshooting",
    title: "Technical Support Specialist",
    maxSalary: 60000,
    minSalary: 45000,
    location: "Denver, CO",
    employmentType: EmploymentType.PART_TIME,
    description: "Assist customers in resolving product issues.",
    benefits: "Remote work, health stipend",
    responsibilities: "Respond to tickets, escalate bugs, document solutions",
    remote: true,
    tags: ["Customer Support", "Troubleshooting", "Zendesk"],
    createdAt: "2025-06-03T11:40:00Z",
    id: 7,
    AIScore: 92,
    company: {
      name: "HelpHive",
      photoURL: "https://example.com/logos/helphive.png",
    },
  },
  {
    companyId: "c8",
    requirements: "Excellent writing and communication skills",
    title: "Content Writer",
    maxSalary: 55000,
    minSalary: 40000,
    location: "Remote",
    employmentType: EmploymentType.CONTRACT,
    description: "Write blog posts and marketing content.",
    benefits: "Work from anywhere, flexible deadlines",
    responsibilities: "Research topics, write and edit content",
    remote: true,
    tags: ["SEO", "Writing", "Blogging"],
    createdAt: "2025-06-03T09:00:00Z",
    id: 8,
    AIScore: 92,
    company: {
      name: "Inkspire",
      photoURL: "https://example.com/logos/inkspire.png",
    },
  },
];

export const STATS = [
  {
    label: "Total Applications",
    value: "234",
    change: "+12%",
    trend: "up",
    icon: FileText,
  },
  {
    label: "Active Jobs",
    value: "18",
    change: "+5%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Interviews Scheduled",
    value: "42",
    change: "+8%",
    trend: "up",
    icon: Calendar,
  },
  {
    label: "Hired This Month",
    value: "12",
    change: "+15%",
    trend: "up",
    icon: UserCheck,
  },
];

export const RECENT_APPLICATION = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "Frontend Developer",
    avatar: "SC",
    email: "sarah.chen@email.com",
    phone: "09171234567",
    location: "Makati City, Metro Manila",
    appliedDate: "2 hours ago",
    status: "pending",
    score: "92%",
  },
  {
    id: 2,
    name: "Miguel Rodriguez",
    position: "Backend Developer",
    avatar: "MR",
    email: "miguel.rodriguez@email.com",
    phone: "09281234567",
    location: "Quezon City, Metro Manila",
    appliedDate: "5 hours ago",
    status: "interview",
    score: "88%",
  },
  {
    id: 3,
    name: "Angela Tan",
    position: "UI/UX Designer",
    avatar: "AT",
    email: "angela.tan@email.com",
    phone: "09391234567",
    location: "Taguig City, Metro Manila",
    appliedDate: "1 day ago",
    status: "hired",
    score: "95%",
  },
  {
    id: 4,
    name: "David Santos",
    position: "DevOps Engineer",
    avatar: "DS",
    email: "david.santos@email.com",
    phone: "09451234567",
    location: "Pasig City, Metro Manila",
    appliedDate: "2 days ago",
    status: "rejected",
    score: "76%",
  },
];

export const UPCOMING_INTERVIEWS = [
  {
    id: 1,
    candidate: "John Martinez",
    position: "Software Engineer",
    time: "10:00 AM",
    date: "Today",
    type: "Video Call",
    interviewer: "Sarah Johnson",
  },
  {
    id: 2,
    candidate: "Lisa Wong",
    position: "Product Manager",
    time: "2:30 PM",
    date: "Today",
    type: "On-site",
    interviewer: "Mark Lee",
  },
  {
    id: 3,
    candidate: "Robert Kim",
    position: "Data Analyst",
    time: "11:00 AM",
    date: "Tomorrow",
    type: "Video Call",
    interviewer: "Emma Davis",
  },
];

export const interviews: Interview[] = [
  {
    applicant: {
      name: "Jonel Villaver",
      title: "Frontend Developer",
      email: "jonelvillaver735@gmail.com",
      id: "1",
      contactNumber: "09708075290",
    },
    status: "Confirmed",
    duration: "1 hour",
    date: "Thursday, June 5, 2025",
    time: "10:00 AM",
    type: "Video Call",
    location: "Online, through zoom meeting",
    interviewer: {
      name: "Sarah Johnson",
      title: "Senior Frontend Developer",
    },
  },
  {
    applicant: {
      name: "Marianne Cruz",
      title: "UI/UX Designer",
      email: "marianne.cruz@example.com",
      id: "2",
      contactNumber: "09708075290",
    },
    status: "Scheduled",
    duration: "45 minutes",
    date: "Friday, June 6, 2025",
    time: "2:30 PM",
    type: "On-site",
    location: "Company HQ, Room 203",
    interviewer: {
      name: "Mark Lee",
      title: "Lead Product Designer",
    },
  },
  {
    applicant: {
      name: "Daniel Reyes",
      title: "Backend Developer",
      email: "daniel.reyes@example.com",
      id: "3",
      contactNumber: "09708075290",
    },
    status: "Rescheduled",
    duration: "1 hour",
    date: "Monday, June 9, 2025",
    time: "11:00 AM",
    type: "Video Call",
    location: "Online, Google Meet",
    interviewer: {
      name: "Angela Torres",
      title: "Senior Backend Developer",
    },
  },
  {
    applicant: {
      name: "Catherine Lim",
      title: "Fullstack Developer",
      email: "catherine.lim@example.com",
      id: "4",
      contactNumber: "09708075290",
    },
    status: "Confirmed",
    duration: "1 hour 30 minutes",
    date: "Wednesday, June 11, 2025",
    time: "9:00 AM",
    type: "Video Call",
    location: "Online, through Zoom meeting",
    interviewer: {
      name: "Robert Young",
      title: "Engineering Manager",
    },
  },
  {
    applicant: {
      name: "Kevin Dela Cruz",
      title: "Mobile App Developer",
      email: "kevin.delacruz@example.com",
      id: "5",
      contactNumber: "09708075290",
    },
    status: "Cancelled",
    duration: "30 minutes",
    date: "Tuesday, June 10, 2025",
    time: "4:00 PM",
    type: "On-site",
    location: "Company HQ, Room 105",
    interviewer: {
      name: "Liza Tan",
      title: "Senior Mobile Developer",
    },
  },
];

export const applications: Application[] = [
  {
    companyId: "comp-001",
    applicant: {
      applicantId: "app-001",
      name: "Alice Mendoza",
      title: "Frontend Developer",
      email: "alice@example.com",
      contactNumber: "+639171234567",
      location: "Quezon City",
      resumeFile: "alice_resume.pdf",
      photoUrl: "https://example.com/photos/alice.jpg",
    },
    job: {
      jobId: 101,
      title: "React Developer",
      employmentType: "Full-time",
      tags: ["React", "JavaScript", "Frontend"],
    },
    appliedAt: "2025-06-01T10:30:00Z",
    status: "Under Review",
    feedback: "Good portfolio, waiting for technical interview.",
  },
  {
    companyId: "comp-002",
    applicant: {
      applicantId: "app-002",
      name: "Brian Santos",
      title: "Backend Engineer",
      email: "brian@example.com",
      contactNumber: "+639181234567",
      location: "Makati City",
      resumeFile: "brian_cv.pdf",
      photoUrl: "https://example.com/photos/brian.jpg",
    },
    job: {
      jobId: 102,
      title: "Node.js Backend Engineer",
      employmentType: "Remote",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    appliedAt: "2025-06-02T14:20:00Z",
    status: "Interview Scheduled",
    feedback: "Initial screening passed.",
  },
  {
    companyId: "comp-003",
    applicant: {
      applicantId: "app-003",
      name: "Carla Reyes",
      title: "UX Designer",
      email: "carla@example.com",
      contactNumber: "+639191234567",
      location: "Cebu City",
      resumeFile: "carla_ux_resume.pdf",
      photoUrl: "https://example.com/photos/carla.jpg",
    },
    job: {
      jobId: 103,
      title: "Product Designer",
      employmentType: "Contract",
      tags: ["UX", "Figma", "Prototyping"],
    },
    appliedAt: "2025-06-03T09:15:00Z",
    status: "Rejected",
    feedback: "Portfolio doesn't match product requirements.",
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
  { value: "makati", label: "Makati" },
  { value: "BGC, Taguig", label: "BGC, Taguig" },
  { value: "pasay", label: "Pasay" },
  { value: "bacolod", label: "Bacolod" },
  { value: "cagayan-de-oro", label: "Cagayan de Oro" },
  { value: "remote-ph", label: "Remote (Philippines)" },
];

// ✅ Industry
export const industries: category[] = [
  {
    value: "Information Technology (IT)",
    label: "Information Technology (IT)",
  },
  { value: "Healthcare & Medical", label: "Healthcare & Medical" },
  { value: "Education & Training", label: "Education & Training" },
  { value: "Finance & Accounting", label: "Finance & Accounting" },
  { value: "Manufacturing & Production", label: "Manufacturing & Production" },
  { value: "Construction & Engineering", label: "Construction & Engineering" },
  { value: "Retail & E-commerce", label: "Retail & E-commerce" },
  { value: "Marketing & Advertising", label: "Marketing & Advertising" },
  { value: "Telecommunications", label: "Telecommunications" },
  { value: "Transportation & Logistics", label: "Transportation & Logistics" },
  { value: "Hospitality & Tourism", label: "Hospitality & Tourism" },
  { value: "Legal Services", label: "Legal Services" },
  { value: "Real Estate", label: "Real Estate" },
  { value: "Energy & Utilities", label: "Energy & Utilities" },
  { value: "Other", label: "Other" },
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

export const ApplicantJobs = [];

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

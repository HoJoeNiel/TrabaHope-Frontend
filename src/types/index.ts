export type Role = "applicant" | "recruiter";

export interface ApplicantCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export type CompanyCredentials = {
  companyName: string;
  industry: string;
  companyWebsite: string;
  companyEmail: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export type ApplicantAuth = {
  id: string;
  name: string;
  email: string;
  location: string | null;
  contactNumber: string | null;
  photoURL: string | null;
  linkedInURL: string | null;
  resumeFile: string | null;
  jobTitle: string | null;
  description: string | null;
  createdAt: string;
  portfolioURL: string | null;
  preferredEmploymentType: string | null;
  interest: string[] | null;
  skills: string[] | null;
  openTo: string[] | null;
  role: "applicant";
};

export interface Experience {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface ExperienceToPost {
  applicantId: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export type CompanyAuth = {
  id: string;
  name: string;
  description: string | null;
  email: string;
  contactNumber: string;
  location: string | null;
  photoURL: string | null;
  coverPhotoURL: string | null;
  specialties: string[] | null;
  noOfEmployees: number | null;
  websiteURL: string | null;
  yearFounded: number | null;
  createdAt: string;
  industry: string;
  role: "recruiter";
  mission: string | null;
};

export interface Job {
  companyId: string;
  requirements: string;
  title: string;
  maxSalary: number;
  minSalary: number;
  location: string;
  employmentType: string;
  description: string;
  benefits: string;
  responsibilities: string;
  remote: boolean;
  tags: string[];
  createdAt: string;
  score?: number;
}

export interface JobWithId extends Job {
  id: number;
}

type Company = {
  photoURL: string | null;
  name: string;
};

export type ApplicantJob = JobWithId & {
  company: Company;
};

export type category = {
  value: string;
  label: string;
};

export enum EmploymentType {
  FULL_TIME = "Full-time",
  PART_TIME = "Part-time",
  CONTRACT = "Contract",
  FREELANCE = "Freelance",
  TEMPORARY = "Temporary",
  INTERNSHIP = "Internship",
  VOLUNTEER = "Volunteer",
  APPRENTICESHIP = "Apprenticeship",
  SEASONAL = "Seasonal",
  REMOTE_ONLY = "Remote-only",
}

export type CompanyFetchedApplication = {
  applicantId: string;
  companyId: string;
  name: string;
  title: string;
  email: string;
  contactNumber: string;
  location: string;
  resumeFile: string;
  photoUrl: string;
  jobApplied: {
    id: number;
    title: string;
    employmentType: string;
    tags: string[];
  };
  status: string;
  appliedDate: Date | string;
};

type Applicant = {
  name: string;
  title: string;
  email: string;
  id: string;
  contactNumber: string;
};

type Interviewer = {
  name: string;
  title: string;
};

export interface Interview {
  applicant: Applicant;
  status: string;
  jobId: number;
  duration: string;
  date: string;
  time: string;
  type: string;
  location: string;
  interviewer: Interviewer;
}

// UPDATED VERSION NG APPLICATION SHAPE, PALITAN YUNG OUTDATED NA COMPANYFETCHEDAPPLICATION TYPE
// Shape ng application
export interface Application {
  companyId: string;
  applicant: {
    applicantId: string;
    name: string;
    title: string;
    email: string;
    contactNumber: string;
    location: string | null;
    resumeFile: string;
    photoUrl: string;
  };
  job: {
    jobId: number;
    title: string;
    employmentType: string;
    tags: string[] | null;
  };
  appliedAt: string;
  status: string;
  feedback: string | null;
  score?: number;
}

export interface ApplicationData {
  jobId: string;
  companyId: string;
  applicantId: string;
  status: string;
  appliedAt: string;
  feedback: string | null;
}

export type Query = {
  applicantId: string;
  interests: string[] | null;
  filters?: {
    search: string;
    min_salary: number;
    max_salary: number;
    location: string;
  };
};

export interface InterviewForPut {
  applicantId: string;
  jobId: number;
  interviewerName: string;
  interviewerTitle: string;
  status: string;
  duration: string;
  date: string;
  time: string;
  type: string;
  location: string;
}

export interface InterviewData {
  applicantId: string | undefined; // pang tanggal error lang muna haup
  jobId: number | undefined;
  interviewerName: string;
  interviewerTitle: string;
  status: string;
  duration: string;
  date: string;
  time: string;
  type: string;
  location: string;
}

export type ResumeData = {
  secureURL: string;
  fileName: string;
  size: number;
  createdAt: string;
};

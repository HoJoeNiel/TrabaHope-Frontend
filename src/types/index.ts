export type Role = "applicant" | "recruiter";

// applicant's creds
export interface ApplicantCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

// company's creds
export type CompanyCredentials = {
  companyName: string;
  industry: string;
  companyWebsite: string;
  companyEmail: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

// Applicant details
export type ApplicantAuth = {
  id: string;
  name: string;
  email: string;
  location: string | null;
  contactNumber: string | null;
  photoUrl: string | null;
  resumeFile: string | null;
  jobTitle: string | null;
  description: string | null;
  createdAt: string; // TATANGALIN DAW TO
  portfolioUrl: string | null;
  preferredEmploymentType: string | null;
  interests: string[] | null;
  role: "applicant";
};

// Company / Recruiter details
export type CompanyAuth = {
  id: string;
  name: string;
  description: string | null;
  email: string;
  contactNumber: string;
  location: string | null;
  photoURL: string | null;
  specialties: string[] | null;
  noOfEmployees: number | null;
  websiteURL: string | null;
  yearFounded: number | null;
  createdAt: string;
  industry: string;
  role: "recruiter";
  mission: string | null; // kakadagdag palang
};

export interface Job {
  companyId: string;
  requirements: string;
  title: string;
  maxSalary: number;
  minSalary: number;
  location: string;
  employmentType: EmploymentType;
  description: string;
  benefits: string;
  responsibilities: string;
  remote: boolean;
  tags: string[];
  createdAt: string;
}

export interface JobWithId extends Job {
  id: number;
}

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

export type Action = {
  saved: boolean;
  applied: boolean;
};

export type JobStatus =
  | "Pending"
  | "Applied"
  | "Interview"
  | "Review"
  | "Offer"
  | "Rejected"
  | "Hired";

export type TimeStamps = {
  posted: string | Date;
  applied?: string | Date;
  lastUpdate?: string | Date;
};

//  GET Jobs endpoint shape
export interface CompanyPostedJob {
  id: string;
  companyProfileUrl: string | null;
  companyName: string;
  jobTitle: string;
  location: string;
  employmentType: EmploymentType;
  description: string;
  benefits: string[];
  requirements: string[];
  responsibilities: string[];
  remote: boolean;
  salaryRange: {
    min: number;
    max: number;
  };
  tags: string[];
  timestamps: TimeStamps;
}

export interface ApplicantSideJob extends CompanyPostedJob {
  status?: JobStatus;
  matchPercentage: number;
  nextStep?: string;
  actions: Action;
}

export type ActiveJob = {
  id: number;
  title: string;
  location: string;
  type: string;
  postedDate: string;
  salary: string;
  matchScore: number;
};

export type Company = {
  name: string;
  companySlug: string;
  logo: string;
  location: string;
  website: string;
  industry: string;
  size: string;
  founded: string;
  specialties: string[];
  about: string;
  mission: string;
  benefits: string[];
  openPositions: number;
  averageRating: number;
  reviewCount: number;
  activeJobs: ActiveJob[];
};

export type Application = {
  name: string;
  appliedAt: Date | string;
  jobTitle: string;
  jobId: string;
};

// type/model ng job applications sa company / recruiter side
// NOTE: pag mag popost ako ng application as applicant, ang need ko lang ay
//       applicantId, jobId, companyId
export type CompanyFetchedApplication = {
  applicantId: string; //
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
  duration: string;
  date: Date | string;
  time: Date | string;
  type: string;
  location: string;
  interviewer: Interviewer;
}

export interface UpdatedApplication {
  companyId: string;
  applicant: {
    applicantId: string;
    name: string;
    title: string;
    email: string;
    contactNumber: string;
    location: string;
    resumeFile: string;
    photoUrl: string;
  };
  job: {
    jobId: number;
    title: string;
    employmentType: string;
    tags: string[];
  };
  appliedAt: string;
  status: string;
  feedback: string;
}

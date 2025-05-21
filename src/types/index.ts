// applicant's creds
export interface UserCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export type Role = "applicant" | "recruiter";

export type ApplicantAuth = {
  applicantID: string;
  name: string;
  email: string;
  location: string | null;
  contactNumber: string | null;
  photoURL: string | null;
  resumeFile: string | null;
  jobTitle: string | null;
  description: string | null;
  createdAt: string;
  portfolioURL: string | null;
  preferredEmploymentType: string | null;
  role: "applicant";
};

export type CompanyAuth = {
  companyID: string;
  name: string;
  email: string;
  contactNumber: string;
  industry: string;
  role: "recruiter";
  createdAt: string;
  websiteURL: string | null;
  description: string | null;
  photoURL: string | null;
  specialties: string[] | null;
  mission: string | null;
  noOfEmployees: string | null;
  location?: string | null;
  yearFounded?: string | null;
};

export type CompanyCredentials = {
  companyName: string;
  industry: string;
  companyWebsite: string;
  companyEmail: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
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
  posted: string;
  applied?: string;
  lastUpdate?: string;
};

export interface CompanyPostedJob {
  id: string;
  companyProfileUrl: string | null;
  companyName: string;
  jobTitle: string;
  location: string;
  employmentType: EmploymentType;
  description: string;
  benefits: string;
  requirements: string;
  remote: boolean;
  salaryRange: string;
  tags: string[];
  timestamps: TimeStamps;
}

export interface ApplicantSideJob extends CompanyPostedJob {
  status?: JobStatus;
  matchPercentage: number;
  nextStep?: string;
  actions: Action;
}

// export type ActiveJob = Pick<ApplicantSideJob, "id" | "jobTitle" | "location" >

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

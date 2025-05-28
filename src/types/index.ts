// applicant's creds
export interface ApplicantCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export type Role = "applicant" | "recruiter";

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
  createdAt: string; //TATANGGALIN DAW TO
  industry: string;
  role: "recruiter";
  mission: string | null; // kakadagdag palang
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
  posted: string | Date;
  applied?: string | Date;
  lastUpdate?: string | Date;
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

export type Application = {
  name: string;
  appliedAt: Date | string;
  jobTitle: string;
  jobId: string;
};

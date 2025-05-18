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

export type User = {
  displayName: string;
  email: string;
  photoURL: string | null;
  role: Role;
};

export type RawFirebaseUser = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  role: Role;
};

// export type RecruiterCredentials = Omit<UserCredentials, "email"> & {
//   workEmail: string;
//   companyName: string;
// };

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

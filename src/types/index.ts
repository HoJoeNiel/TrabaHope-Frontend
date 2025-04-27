// applicant's creds
export interface UserCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export type RecruiterCredentials = Omit<UserCredentials, "email"> & {
  workEmail: string;
  companyName: string;
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
  | "pending"
  | "applied"
  | "interview"
  | "offer"
  | "rejected"
  | "hired";

export type TimeStamps = {
  posted?: string;
  applied?: string;
  lastUpdate?: string;
};

export type Job = {
  id: string;
  companyInitials: string;
  companyName: string;
  jobTitle: string;
  location: string;
  employmentType: EmploymentType;
  description: string;
  remote: boolean;
  salaryRange: string;
  status?: JobStatus;
  matchPercentage: number;
  nextStep?: string;
  tags: string[];
  actions: Action;
  timestamps: TimeStamps;
};

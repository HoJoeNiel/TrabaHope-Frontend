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

export type Job = {
  id: string;
  companyInitials: string;
  jobTitle: string;
  companyName: string;
  remote: boolean;
  location: string;
  employmentType: EmploymentType;
  salaryRange: string;
  postedDate: string;
  matchPercentage: number;
  description: string;
  tags: string[];
  actions: Action;
};

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

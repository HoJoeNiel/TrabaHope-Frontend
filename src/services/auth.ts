import { auth, db } from "@/firebase";
import { AuthError } from "firebase/auth";
import { mapAuthError } from "@/helpers/authHelpers";
import {
  ApplicantAuth,
  CompanyAuth,
  CompanyCredentials,
  ApplicantCredentials,
} from "@/types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// For local development, for testing lang din
export const createCompanyAccountWithFirebase = async (
  values: CompanyCredentials
): Promise<CompanyAuth> => {
  const user = await createUserWithEmailAndPassword(
    auth,
    values.companyEmail,
    values.password
  );
  const companyInfo: CompanyAuth = {
    id: user.user.uid,
    name: values.companyName,
    email: values.companyEmail,
    contactNumber: String(values.phoneNumber),
    industry: values.industry,
    websiteURL: values.companyWebsite,
    role: "recruiter",
    createdAt: new Date().toISOString(),
    description: null,
    photoURL: null,
    specialties: null,
    noOfEmployees: 0,
    location: null,
    yearFounded: null,
    mission: null,
  };

  await setDoc(doc(db, "users", user.user.uid), companyInfo);
  return companyInfo;
};

// Production: Backend implementation / for testing (pag nandyan si darren)
export const createCompanyAccountWithBackend = async (
  values: CompanyCredentials
): Promise<CompanyAuth> => {
  const user = await createUserWithEmailAndPassword(
    auth,
    values.companyEmail,
    values.password
  );

  const companyInfo: CompanyAuth = {
    id: user.user.uid,
    name: values.companyName,
    email: values.companyEmail,
    contactNumber: String(values.phoneNumber),
    industry: values.industry,
    websiteURL: values.companyWebsite,
    role: "recruiter",
    createdAt: new Date().toISOString(),
    description: null,
    photoURL: null,
    specialties: null,
    noOfEmployees: 0,
    location: null,
    yearFounded: null,
    mission: null,
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/recruiter/sign-up`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(companyInfo),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to save company info. Status: ${response.status}`);
  }

  return companyInfo;
};

// For local development, for testing lang din
export const createApplicantAccountWithFirebase = async (
  values: ApplicantCredentials
): Promise<ApplicantAuth> => {
  const user = await createUserWithEmailAndPassword(
    auth,
    values.email,
    values.password
  );
  const applicantInfo: ApplicantAuth = {
    id: user.user.uid,
    name: `${values.firstName} ${values.lastName}`,
    email: values.email,
    location: null,
    contactNumber: String(values.phoneNumber),
    photoUrl: null,
    resumeFile: null,
    jobTitle: null,
    description: null,
    createdAt: new Date().toISOString(),
    portfolioUrl: null,
    preferredEmploymentType: null,
    interests: null,
    role: "applicant",
  };
  await setDoc(doc(db, "users", user.user.uid), applicantInfo);
  return applicantInfo;
};

// Production: Backend implementation / for testing (pag nandyan si darren)
export const createApplicantAccountWithBackend = async (
  values: ApplicantCredentials
): Promise<ApplicantAuth> => {
  const user = await createUserWithEmailAndPassword(
    auth,
    values.email,
    values.password
  );
  const applicantInfo: ApplicantAuth = {
    id: user.user.uid,
    name: `${values.firstName} ${values.lastName}`,
    email: values.email,
    location: null,
    contactNumber: String(values.phoneNumber),
    photoUrl: null,
    resumeFile: null,
    jobTitle: null,
    description: null,
    createdAt: new Date().toISOString(),
    portfolioUrl: null,
    preferredEmploymentType: null,
    interests: null,
    role: "applicant",
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/applicant/sign-up`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicantInfo),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to save company info. Status: ${response.status}`);
  }

  return applicantInfo;
};

// For login
type LoginResult = {
  user: User;
  token: string;
};

export const useAuth = () => {
  const login = async (
    email: string,
    password: string
  ): Promise<LoginResult> => {
    try {
      const userCredentials: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const token = await userCredentials.user.getIdToken();

      return {
        user: userCredentials.user,
        token,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw mapAuthError(error as AuthError);
      }
      throw new Error("Login failed. Please try again.");
    }
  };

  return { login };
};

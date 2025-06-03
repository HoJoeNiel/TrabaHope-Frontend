import {
  auth,
  db,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "@/firebase";
import { AuthError, deleteUser, signInWithPopup } from "firebase/auth";
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
import { verifyTokenWithBackend } from "./api";

export const socialAuthProviders = {
  google: googleProvider,
  facebook: facebookProvider,
  github: githubProvider,
} as const;

type SocialProvider = keyof typeof socialAuthProviders;

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
    coverPhotoURL: null,
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
    coverPhotoURL: null,
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
  const { user } = await createUserWithEmailAndPassword(
    auth,
    values.email,
    values.password
  );
  const applicantInfo: ApplicantAuth = {
    id: user.uid,
    name: user.displayName
      ? user.displayName
      : `${values.firstName} ${values.lastName}`,
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
  await setDoc(doc(db, "users", user.uid), applicantInfo);
  return applicantInfo;
};

// Production: Backend implementation / for testing (pag nandyan si darren)
export const createApplicantAccountWithBackend = async (
  values: ApplicantCredentials
): Promise<ApplicantAuth> => {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    values.email,
    values.password
  );
  const applicantInfo: ApplicantAuth = {
    id: user.uid,
    name: user.displayName
      ? user.displayName
      : `${values.firstName} ${values.lastName}`,
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

export const loginWithSocial = async (
  provider: SocialProvider
): Promise<LoginResult> => {
  try {
    const result = await signInWithPopup(auth, socialAuthProviders[provider]);
    const token = await result.user.getIdToken();

    return {
      user: result.user,
      token,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw mapAuthError(error as AuthError);
    }
    throw new Error("Social login failed");
  }
};

export const registerWithSocial = async (
  provider: SocialProvider
): Promise<ApplicantAuth | CompanyAuth> => {
  try {
    const { user, token } = await loginWithSocial(provider);

    const userData: ApplicantAuth = {
      id: user.uid,
      name: user.displayName ?? "Default name", // prolly not a gud solution. Will fix this later
      email: user.email ?? "defaultemail@gmail.com", //
      location: null,
      contactNumber: user.phoneNumber,
      photoUrl: null,
      resumeFile: null,
      jobTitle: null,
      description: null,
      createdAt: new Date().toISOString(),
      portfolioUrl: null,
      preferredEmploymentType: null,
      role: "applicant",
      interests: null,
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/applicant/sign-up`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) throw new Error("Failed to create account.");

    if (import.meta.env.VITE_USE_FIREBASE === "true") {
      await setDoc(doc(db, "users", user.uid), userData);
    } else {
      await verifyTokenWithBackend(token); // mali to, dapat service sya na nagpopost nung user data sa backend. Pag nag success, irereturn lang yung userData para mastore na sa zustand.
    }

    return userData;
  } catch (error) {
    if (error instanceof Error) {
      throw mapAuthError(error as AuthError);
    }
    throw new Error("Social sign up failed.");
  }
};

export const deleteCurrentUser = async () => {
  const user = auth.currentUser;

  if (!user) throw new Error("No authenticated user found.");

  try {
    await deleteUser(user);
    console.log("User deleted because user data cannot be found.");
  } catch (error) {
    console.error(error);
  }
};

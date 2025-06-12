import { db } from "@/firebase";
import {
  ApplicantAuth,
  ApplicantJob,
  Application,
  CompanyAuth,
  CompanyFetchedApplication,
  Interview,
} from "@/types";
import { doc, getDoc } from "firebase/firestore";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

export const getRelativeTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const past = new Date(date);

  const diffsInMilliseconds = now.getTime() - past.getTime();

  const diffInMinutes = Math.floor(diffsInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffsInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffsInMilliseconds / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 1) return "just now";
  else if (diffInHours < 1)
    return `${diffInMinutes}min${diffInMinutes > 1 ? "s" : ""} ago`;
  else if (diffInDays < 1)
    return `${diffInHours}hr${diffInHours > 1 ? "s" : ""} ago`;
  else return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
};

export const getDaysAgo = (date: string | Date): number => {
  const now = new Date();
  const past = new Date(date);

  const diffsInMilliseconds = now.getTime() - past.getTime();
  const diffInDays = Math.floor(diffsInMilliseconds / (1000 * 60 * 60 * 24));

  return diffInDays;
};

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export const fetchUserDataFromFirestore = async (
  uid: string
): Promise<ApplicantAuth | CompanyAuth | null> => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data() as ApplicantAuth | CompanyAuth;
    console.log("User data:", userData);
    return userData;
  } else {
    console.log("No such user document!");
    return null;
  }
};

export const isRecruiter = (user: unknown): user is CompanyAuth => {
  return (
    typeof user === "object" &&
    user !== null &&
    "role" in user &&
    user.role === "recruiter"
  );
};

export const isApplicant = (user: unknown): user is ApplicantAuth => {
  return (
    typeof user === "object" &&
    user !== null &&
    "role" in user &&
    user.role === "applicant"
  );
};

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export function parseMultilineInput(input: string): string[] {
  return input
    .split(/\r?\n|\r/) // handles \n, \r\n, and \r
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

export const sortApplicationsByDate = (
  applications: CompanyFetchedApplication[]
) => {
  const sortedApplications = applications.sort(
    (a, b) =>
      new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
  );

  return sortedApplications;
};

export const sortInterviewsByDate = (interview: Interview[]) => {
  const sortedInterviews = interview.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return sortedInterviews;
};

export const checkIfAlreadyApplied = (
  appliedJobs: Application[],
  job: ApplicantJob
) => {
  const appliedJob = appliedJobs?.find((j) => j.job.jobId === job.id);

  return appliedJob ? true : false;
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Scheduled":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Confirmed":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Pending":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Completed":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "Cancelled":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "Scheduled":
      return <Calendar className="w-3 h-3" />;
    case "Confirmed":
      return <CheckCircle className="w-3 h-3" />;
    case "Pending":
      return <AlertCircle className="w-3 h-3" />;
    case "Completed":
      return <CheckCircle className="w-3 h-3" />;
    case "Cancelled":
      return <XCircle className="w-3 h-3" />;
    default:
      return <Clock className="w-3 h-3" />;
  }
};

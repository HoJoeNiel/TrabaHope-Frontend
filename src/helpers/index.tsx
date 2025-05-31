import { db } from "@/firebase";
import { ApplicantAuth, CompanyAuth, JobStatus } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { BarChart2, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

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

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-blue-100 text-blue-600";
    case "Review":
      return "bg-purple-100 text-purple-600";
    case "Interview":
      return "bg-emerald-100 text-emerald-600";
    case "Hired":
      return "bg-green-100 text-green-600";
    case "Rejected":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const getStatusIcon = (status: JobStatus) => {
  switch (status) {
    case "Pending":
      return <Clock className="w-4 h-4" />;
    case "Review":
      return <BarChart2 className="w-4 h-4" />;
    case "Interview":
      return <Calendar className="w-4 h-4" />;
    case "Hired":
      return <CheckCircle className="w-4 h-4" />;
    case "Rejected":
      return <XCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
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

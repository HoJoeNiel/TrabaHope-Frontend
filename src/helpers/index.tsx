import { db } from "@/firebase";
import { JobStatus, RawFirebaseUser, User } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { BarChart2, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

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

export const normalizeFirebaseUser = (user: RawFirebaseUser): User | null => {
  // it's okay to return null here if the displayName is null
  // because I manually set the displayName based on user credentials when they sign up using email and password
  // when using third party provider it is automatic
  // lapag ko lang dito para note pag nagkaroon ng problema
  if (!user.email || !user.role || !user.displayName) return null;

  return {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    role: user.role,
  };
};

export const fetchUserDataFromFirestore = async (uid: string) => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    console.log("User data:", userData);
    return userData;
  } else {
    console.log("No such user document!");
    return null;
  }
};

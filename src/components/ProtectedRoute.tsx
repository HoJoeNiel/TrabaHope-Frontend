import { useUserStore } from "@/stores/useUserStore";
import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const user = useUserStore((state) => state.user);
  const intendedRole = location.pathname.split("/")[1];

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  if (user.role !== intendedRole) {
    return user.role === "applicant" ? (
      <Navigate to="/signup/recruiter" state={{ from: location }} replace />
    ) : (
      <Navigate to="/signup/applicant" state={{ from: location }} replace />
    );
  }

  return children;
}

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ApplicantSignup from "@/pages/ApplicantSignup";
import LandingPage from "@/pages/LandingPage";
import RecruiterSignup from "@/pages/RecruiterSignup";
import Login from "@/pages/Login";
import JobListingPage from "@/pages/Applicant/JobListingPage";
import ApplicantProfile from "@/pages/Applicant/ApplicantProfile";
import SavedJobsPage from "@/pages/Applicant/SavedJobsPage";
import MyApplications from "@/pages/Applicant/MyApplications";
import CompanyProfilePage from "@/pages/Applicant/CompanyProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import JobPostingForm from "./pages/Recruiter/JobPostingForm";

const router = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />,
  },
  { path: "/login", element: <Login /> },
  {
    path: "/signup",
    children: [
      { path: "applicant", element: <ApplicantSignup /> },
      { path: "recruiter", element: <RecruiterSignup /> },
    ],
  },
  {
    path: "/applicant",
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      { path: "job-listing", element: <JobListingPage /> },
      { path: "profile", element: <ApplicantProfile /> },
      { path: "saved-jobs", element: <SavedJobsPage /> },
      { path: "my-applications", element: <MyApplications /> },
    ],
  },
  {
    path: "/recruiter",
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [{ path: "create-new-job", element: <JobPostingForm /> }],
  },
  {
    path: "/company/:companySlug",
    element: <CompanyProfilePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

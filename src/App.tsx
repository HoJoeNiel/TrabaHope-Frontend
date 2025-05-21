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
import CompanyDashboard from "./pages/Recruiter/CompanyDashboard";
import CompanyRootLayout from "./components/CompanyRootLayout";

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
        <CompanyRootLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <CompanyDashboard /> },
      { path: "create-new-job", element: <JobPostingForm /> },
      { path: "job-listings", element: <h1>Jobs Listings</h1> },
      { path: "applicants", element: <h1>Applicants</h1> },
      { path: "edit-job/:jobId", element: <h1>Edit Job</h1> },
      { path: "profile", element: <h1>Company Profile</h1> },
      { path: "settings", element: <h1>Settings page</h1> },
      { path: "interviews", element: <h1>Job Interviews</h1> },
    ],
  },
  {
    path: "/company/:companySlug",
    element: <CompanyProfilePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

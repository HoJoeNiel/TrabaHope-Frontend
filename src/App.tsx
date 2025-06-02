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
import CompanyJobListing from "./pages/Recruiter/CompanyJobListing";
import JobApplicantsPage from "./pages/Recruiter/JobApplicantsPage";
import CompanyProfile from "./pages/Recruiter/CompanyProfile";
import CompanySettings from "./pages/Recruiter/CompanySettings";
import Interviews from "./pages/Recruiter/Interviews";
import EditCompanyJob from "./pages/Recruiter/EditCompanyJob";
import ViewCompanyJob from "./pages/Recruiter/ViewCompanyJob";
import SpecificJobApplicants from "./pages/Recruiter/SpecificJobApplicants";

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
    element: <CompanyRootLayout />,
    children: [
      { path: "dashboard", element: <CompanyDashboard /> },
      { path: "create-new-job", element: <JobPostingForm /> },
      { path: "job-listings", element: <CompanyJobListing /> },
      { path: "job/:jobId", element: <ViewCompanyJob /> },
      { path: "applications", element: <JobApplicantsPage /> },
      { path: "job/:jobId/applicants", element: <SpecificJobApplicants /> },
      { path: "edit-job/:jobId", element: <EditCompanyJob /> },
      { path: "profile", element: <CompanyProfile /> },
      { path: "settings", element: <CompanySettings /> },
      { path: "interviews", element: <Interviews /> },
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

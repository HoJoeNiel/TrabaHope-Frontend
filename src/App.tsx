import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ApplicantProfile from "@/pages/Applicant/ApplicantProfile";
import CompanyProfilePage from "@/pages/Applicant/CompanyProfilePage";
import JobListingPage from "@/pages/Applicant/JobListingPage";
import MyApplications from "@/pages/Applicant/MyApplications";
import SavedJobsPage from "@/pages/Applicant/SavedJobsPage";
import ApplicantSignup from "@/pages/ApplicantSignup";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import RecruiterSignup from "@/pages/RecruiterSignup";
import { QueryClientProvider } from "@tanstack/react-query";

import ApplicantRootLayout from "./components/ApplicantRootLayout";
import CompanyRootLayout from "./components/CompanyRootLayout";
import CompanyDashboard from "./pages/Recruiter/CompanyDashboard";
import CompanyJobListing from "./pages/Recruiter/CompanyJobListing";
import CompanyProfile from "./pages/Recruiter/CompanyProfile";
import CompanySettings from "./pages/Recruiter/CompanySettings";
import EditCompanyJob from "./pages/Recruiter/EditCompanyJob";
import Interviews from "./pages/Recruiter/Interviews";
import JobApplicantsPage from "./pages/Recruiter/JobApplicantsPage";
import JobPostingForm from "./pages/Recruiter/JobPostingForm";
import SpecificJobApplicants from "./pages/Recruiter/SpecificJobApplicants";
import ViewCompanyJob from "./pages/Recruiter/ViewCompanyJob";
import { queryClient } from "./lib/queryClient";

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
    element: <ApplicantRootLayout />,
    children: [
      { path: "dashboard", element: <div>Applicant Dashboard</div> },
      { path: "job-listing", element: <JobListingPage /> },
      { path: "applications", element: <MyApplications /> },
      { path: "saved-jobs", element: <SavedJobsPage /> },
      { path: "interviews", element: <div>Interviews</div> },
      { path: "profile", element: <ApplicantProfile /> },
      { path: "settings", element: <div>Settings</div> },
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

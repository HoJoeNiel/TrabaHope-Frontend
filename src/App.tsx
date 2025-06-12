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
import { queryClient } from "./lib/queryClient";
import ApplicantInterviews from "./pages/Applicant/ApplicantInterviews";
import CompanyDashboard from "./pages/Recruiter/CompanyDashboard";
import CompanyJobListing from "./pages/Recruiter/CompanyJobListing";
import CompanyProfile from "./pages/Recruiter/CompanyProfile";
import EditCompanyJob from "./pages/Recruiter/EditCompanyJob";
import Interviews from "./pages/Recruiter/Interviews";
import JobApplicantsPage from "./pages/Recruiter/JobApplicantsPage";
import JobPostingForm from "./pages/Recruiter/JobPostingForm";
import SpecificJobApplicants from "./pages/Recruiter/SpecificJobApplicants";
import ViewCompanyJob from "./pages/Recruiter/ViewCompanyJob";
import SetupApplicantAccount from "./components/SetupApplicantAccount";
import ApplicantDashboard from "./pages/Applicant/ApplicantDashboard";

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
      { path: "dashboard", element: <ApplicantDashboard /> },
      { path: "job-listing", element: <JobListingPage /> },
      { path: "applications", element: <MyApplications /> },
      { path: "saved-jobs", element: <SavedJobsPage /> },
      { path: "interviews", element: <ApplicantInterviews /> },
      { path: "profile", element: <ApplicantProfile /> },
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
      { path: "interviews", element: <Interviews /> },
    ],
  },
  { path: "setup-account", element: <SetupApplicantAccount /> },
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

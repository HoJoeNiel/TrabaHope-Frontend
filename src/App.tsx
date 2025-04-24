import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApplicantSignup from "./pages/ApplicantSignup";
import LandingPage from "./pages/LandingPage";
import RecruiterSignup from "./pages/RecruiterSignup";
import Login from "./pages/Login";
import JobListingPage from "./pages/Applicant/JobListingPage";

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
  { path: "/job-listing", element:<JobListingPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

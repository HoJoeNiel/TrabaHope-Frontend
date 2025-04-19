import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApplicantSignup from "./pages/ApplicantSignup";
import LandingPage from "./pages/LandingPage";
import RecruiterSignup from "./pages/RecruiterSignup";
import Login from "./pages/Login";

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
]);

export default function App() {
  return <RouterProvider router={router} />;
}

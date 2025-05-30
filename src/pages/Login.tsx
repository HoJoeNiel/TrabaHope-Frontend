import AIRecommendedCard from "@/components/LoginPage/AIRecommendedCard";
import AiMatchInfoCard from "@/components/LoginPage/AiMatchInfoCard";
import AuthSocialButtons from "@/components/AuthSocialButtons";
import EmailLoginForm from "@/components/LoginPage/EmailLoginForm";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col h-screen bg-stone-100">
      <main className="relative flex-1 ">
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-[1440px] flex justify-between">
            <div className="bg-white border border-gray-100 w-[550px] h-[630px] p-8 shadow-lg rounded-lg">
              <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Welcome back
              </h1>

              <AuthSocialButtons action="login" />

              <div className="flex items-center my-4 space-x-4">
                <div className="h-0.5 bg-gray-200 flex-1" />
                <p>Or login with email</p>
                <div className="h-0.5 bg-gray-200 flex-1" />
              </div>

              <EmailLoginForm />

              <p className="my-4 text-center">
                Don't have an account?
                <Link
                  to="/signup/applicant"
                  className="pl-1 text-dusty-sky-blue hover:underline"
                >
                  Create one now
                </Link>
              </p>
            </div>

            <div className="w-[600px] h-[630px] flex flex-col justify-center gap-8">
              <AIRecommendedCard />
              <AiMatchInfoCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Header from "@/components/Header";
import BottomWave from "@/components/LoginPage/BottomWave";
import TopWave from "@/components/LoginPage/TopWave";
import AIRecommendedCard from "@/components/LoginPage/AIRecommendedCard";
import AiMatchInfoCard from "@/components/LoginPage/AiMatchInfoCard";
import Footer from "@/components/Footer";
import AuthSocialButtons from "@/components/AuthSocialButtons";
import EmailLoginForm from "@/components/LoginPage/EmailLoginForm";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 bg-white relative">
        <div className="bg-white h-full flex justify-center items-center">
          <div className="w-full max-w-[1440px] flex justify-between">
            <div className="bg-white border border-gray-100 w-[550px] h-[630px] p-8 shadow-lg rounded-lg">
              <h1 className="text-2xl text-gray-800 text-center font-bold mb-6">
                Welcome back
              </h1>

              <AuthSocialButtons action="login" />

              <div className="flex items-center space-x-4 my-4">
                <div className="h-0.5 bg-gray-200 flex-1" />
                <p>Or login with email</p>
                <div className="h-0.5 bg-gray-200 flex-1" />
              </div>

              <EmailLoginForm />

              <p className="text-center my-4">
                Don't have an account?
                <Link
                  to="/signup/applicant"
                  className="text-dusty-sky-blue hover:underline pl-1"
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

        <TopWave />
        <BottomWave />
      </main>
      <Footer className="main-gradient-bg" />
    </div>
  );
}

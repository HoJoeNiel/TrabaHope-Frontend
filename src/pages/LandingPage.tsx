import Header from "@/components/Header";
import Hero from "@/components/LandingPage/sections/Hero";
import Features from "@/components/LandingPage/sections/Features";
import ApplicantsFeatures from "@/components/LandingPage/sections/ApplicantsFeatures";
import RecruitersFeatures from "@/components/LandingPage/sections/RecruitersFeatures";
import CTA from "@/components/LandingPage/sections/CTA";
import Testimonials from "@/components/LandingPage/sections/Testimonials";
import Footer from "@/components/Footer";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useEffect } from "react";
import { useResumeStore } from "@/stores/useResumeStore";

export default function LandingPage() {
  const clearUser = useLoggedInUserStore((state) => state.clearUser);
  const setResume = useResumeStore((state) => state.setResume);

  useEffect(() => {
    clearUser(); // clear user kapag nasa landing page sya
    setResume(null);
  }, [clearUser, setResume]);
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <ApplicantsFeatures />
        <RecruitersFeatures />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

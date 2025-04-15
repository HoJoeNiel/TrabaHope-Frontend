import Header from "@/components/Header";
import Hero from "@/components/LandingPage/sections/Hero";
import Features from "@/components/LandingPage/sections/Features";
import ApplicantsFeatures from "@/components/LandingPage/sections/ApplicantsFeatures";
import RecruitersFeatures from "@/components/LandingPage/sections/RecruitersFeatures";
import CTA from "@/components/LandingPage/sections/CTA";
import Testimonials from "@/components/LandingPage/sections/Testimonials";
import Footer from "@/components/Footer";

export default function LandingPage() {
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

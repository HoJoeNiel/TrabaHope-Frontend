import ApplicantHeader from "@/components/ApplicantHeader";
import ApplicantProfileCard from "@/components/ApplicantProfile/ApplicantProfileCard";
import Footer from "@/components/Footer";

export default function ApplicantProfile() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <ApplicantHeader />
      <main className="flex-1 w-full max-w-[1440px] mx-auto mt-4">
        <ApplicantProfileCard />
      </main>
      <Footer />
    </div>
  );
}

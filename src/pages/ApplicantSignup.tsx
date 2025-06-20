import ApplicantSignupForm from "@/components/ApplicantSignup/ApplicantSignupForm";
import ApplicantSignupHeroPanel from "@/components/ApplicantSignup/ApplicantSignupHeroPanel";

export default function ApplicantSignup() {
  return (
    <div className="grid w-screen min-h-screen grid-cols-2 max-md:grid-cols-1">
      <ApplicantSignupForm />
      <ApplicantSignupHeroPanel />
    </div>
  );
}

import RecruiterSignupForm from "@/components/RecruiterSignup/RecruiterSignupForm";
import RecruiterSignupHeroPanel from "@/components/RecruiterSignup/RecruiterSignupHeroPanel";

export default function RecruiterSignup() {
  return (
    <div className="w-screen h-screen grid grid-cols-2 max-md:grid-cols-1">
      <RecruiterSignupHeroPanel />
      <RecruiterSignupForm />
    </div>
  );
}

import ThirdPartyAuthButton from "@/components/ThirdPartyAuthButton";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "@/firebase";
import { handleAuthError } from "@/helpers/authHelpers";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type action = "signup" | "login";

export default function AuthSocialButtons({ action }: { action: action }) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCreateAccountWithGoogle = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setLoading(false);
      navigate("/applicant/job-listing", { replace: true });
    } catch (error) {
      setLoading(false);
      handleAuthError(error);
    }
  };

  const handleCreateAccountWithFacebook = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, facebookProvider);
      setLoading(false);
      navigate("/applicant/job-listing", { replace: true });
    } catch (error) {
      setLoading(false);
      handleAuthError(error);
    }
  };

  const handleCreateAccountWithGithub = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, githubProvider);
      setLoading(false);
      navigate("/applicant/job-listing", { replace: true });
    } catch (error) {
      setLoading(false);
      handleAuthError(error);
    }
  };
  return (
    <div
      className={
        action === "signup" ? "grid grid-cols-3 gap-3 mt-4" : undefined
      }
    >
      <ThirdPartyAuthButton
        icon={<FaGoogle className="text-red-600 size-5" />}
        label={action === "login" ? "Continue with Google" : "Google"}
        isLoading={isLoading}
        onClick={handleCreateAccountWithGoogle}
      />
      <ThirdPartyAuthButton
        icon={<FaFacebook className="text-[#1877F2] size-5" />}
        label={action === "login" ? "Continue with Facebook" : "Facebook"}
        isLoading={isLoading}
        onClick={handleCreateAccountWithFacebook}
      />
      <ThirdPartyAuthButton
        icon={<FaGithub className="text-black size-5" />}
        label={action === "login" ? "Continue with Github" : "Github"}
        isLoading={isLoading}
        onClick={handleCreateAccountWithGithub}
      />
    </div>
  );
}

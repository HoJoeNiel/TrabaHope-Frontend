import ThirdPartyAuthButton from "@/components/ThirdPartyAuthButton";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "@/firebase";
import { normalizeFirebaseUser } from "@/helpers";
import { handleAuthError } from "@/helpers/authHelpers";
import { useUserStore } from "@/stores/useUserStore";
import { RawFirebaseUser, Role } from "@/types";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

type action = "signup" | "login";

export default function AuthSocialButtons({ action }: { action: action }) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.pathname.split("/")[2] as Role;

  const handleCreateAccountWithGoogle = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const currentUser = result.user;

      const user: RawFirebaseUser = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        role,
      };

      const normalizeUser = normalizeFirebaseUser(user);
      if (normalizeUser) setUser(normalizeUser);

      setLoading(false);

      if (role === "applicant")
        navigate("/applicant/job-listing", { replace: true });
      if (role === "recruiter")
        navigate("/recruiter/create-new-job", { replace: true });
    } catch (error) {
      setLoading(false);
      handleAuthError(error);
    }
  };

  const handleCreateAccountWithFacebook = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const currentUser = result.user;

      const user: RawFirebaseUser = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        role,
      };

      const normalizeUser = normalizeFirebaseUser(user);
      if (normalizeUser) setUser(normalizeUser);

      setLoading(false);

      if (role === "applicant")
        navigate("/applicant/job-listing", { replace: true });
      if (role === "recruiter")
        navigate("/recruiter/create-new-job", { replace: true });
    } catch (error) {
      setLoading(false);
      handleAuthError(error);
    }
  };

  const handleCreateAccountWithGithub = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const currentUser = result.user;

      const user: RawFirebaseUser = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        role,
      };

      const normalizeUser = normalizeFirebaseUser(user);
      if (normalizeUser) setUser(normalizeUser);

      setLoading(false);

      if (role === "applicant")
        navigate("/applicant/job-listing", { replace: true });
      if (role === "recruiter")
        navigate("/recruiter/create-new-job", { replace: true });
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

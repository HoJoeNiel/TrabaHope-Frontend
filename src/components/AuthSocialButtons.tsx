import ThirdPartyAuthButton from "@/components/ThirdPartyAuthButton";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "@/firebase";
import { normalizeFirebaseUser } from "@/helpers";
import { handleAuthError } from "@/helpers/authHelpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { RawFirebaseUser } from "@/types";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type action = "signup" | "login";

export default function AuthSocialButtons({ action }: { action: action }) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const setUser = useLoggedInUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleAuthenticateWithGoogle = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const currentUser = result.user;

      const user: RawFirebaseUser = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        role: "applicant",
      };

      const normalizedUser = normalizeFirebaseUser(user);

      if (normalizedUser) {
        setUser(normalizedUser);
        navigate("/applicant/job-listing", { replace: true });
      }
    } catch (error) {
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthenticateWithFacebook = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const currentUser = result.user;

      const user: RawFirebaseUser = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        role: "applicant",
      };

      const normalizedUser = normalizeFirebaseUser(user);

      if (normalizedUser) {
        setUser(normalizedUser);
        navigate("/applicant/job-listing", { replace: true });
      }
    } catch (error) {
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthenticateWithGithub = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const currentUser = result.user;

      const user: RawFirebaseUser = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        role: "applicant",
      };

      const normalizedUser = normalizeFirebaseUser(user);

      if (normalizedUser) {
        setUser(normalizedUser);
        navigate("/applicant/job-listing", { replace: true });
      }
    } catch (error) {
      handleAuthError(error);
    } finally {
      setLoading(false);
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
        onClick={handleAuthenticateWithGoogle}
      />
      <ThirdPartyAuthButton
        icon={<FaFacebook className="text-[#1877F2] size-5" />}
        label={action === "login" ? "Continue with Facebook" : "Facebook"}
        isLoading={isLoading}
        onClick={handleAuthenticateWithFacebook}
      />
      <ThirdPartyAuthButton
        icon={<FaGithub className="text-black size-5" />}
        label={action === "login" ? "Continue with Github" : "Github"}
        isLoading={isLoading}
        onClick={handleAuthenticateWithGithub}
      />
    </div>
  );
}

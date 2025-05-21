import ThirdPartyAuthButton from "@/components/ThirdPartyAuthButton";
import {
  auth,
  db,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "@/firebase";
import { fetchUserDataFromFirestore } from "@/helpers";
import { handleAuthError } from "@/helpers/authHelpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { ApplicantAuth } from "@/types";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Action = "signup" | "login";
type Provider =
  | typeof googleProvider
  | typeof facebookProvider
  | typeof githubProvider;

const PROVIDERS = [
  {
    icon: <FaGoogle className="text-red-600 size-5" />,
    provider: googleProvider,
    label: "Google",
  },
  {
    icon: <FaFacebook className="text-[#1877F2] size-5" />,
    provider: facebookProvider,
    label: "Facebook",
  },
  {
    icon: <FaGithub className="text-black size-5" />,
    provider: githubProvider,
    label: "Github",
  },
];

export default function AuthSocialButtons({ action }: { action: Action }) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const setUser = useLoggedInUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const authenticate = async (provider: Provider) => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const currentUser = result.user;

      if (!currentUser || !currentUser.email || !currentUser.displayName) {
        throw new Error("Invalid user data.");
      }

      if (action === "login") {
        const user = await fetchUserDataFromFirestore(currentUser.uid);
        if (user) {
          setUser(user);
          navigate("/applicant/job-listing", { replace: true });
        }
      }

      if (action === "signup") {
        const user: ApplicantAuth = {
          applicantID: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          location: null,
          contactNumber: currentUser.phoneNumber,
          photoURL: null,
          resumeFile: null,
          jobTitle: null,
          description: null,
          createdAt: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          portfolioURL: currentUser.photoURL,
          preferredEmploymentType: null,
          role: "applicant",
        };

        await setDoc(doc(db, "users", currentUser.uid), user);
        setUser(user);
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
      {PROVIDERS.map(({ icon, label, provider }) => (
        <ThirdPartyAuthButton
          key={label}
          icon={icon}
          label={action === "login" ? `Continue with ${label}` : label}
          isLoading={isLoading}
          onClick={() => authenticate(provider)}
        />
      ))}
    </div>
  );
}

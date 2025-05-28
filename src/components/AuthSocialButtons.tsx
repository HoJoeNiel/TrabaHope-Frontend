import ThirdPartyAuthButton from "@/components/ThirdPartyAuthButton";

import { fetchUserDataFromFirestore } from "@/helpers";
import { handleAuthError } from "@/helpers/authHelpers";
import { verifyTokenWithBackend } from "@/services/api";
import { loginWithSocial, registerWithSocial } from "@/services/auth";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { ReactNode, useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Action = "signup" | "login";
type Provider = "google" | "facebook" | "github";

type ProviderItem = {
  icon: ReactNode;
  provider: Provider;
  label: string;
};

const PROVIDERS: ProviderItem[] = [
  {
    icon: <FaGoogle className="text-red-600 size-5" />,
    provider: "google",
    label: "Google",
  },
  {
    icon: <FaFacebook className="text-[#1877F2] size-5" />,
    provider: "facebook",
    label: "Facebook",
  },
  {
    icon: <FaGithub className="text-black size-5" />,
    provider: "github",
    label: "Github",
  },
];

export default function AuthSocialButtons({ action }: { action: Action }) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const setUser = useLoggedInUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const authenticate = async (provider: Provider) => {
    setLoading(true);
    let userData;
    try {
      if (action === "signup") {
        userData = await registerWithSocial(provider);
      }

      if (action === "login") {
        const { token, user } = await loginWithSocial(provider);

        // PROBLEM: naglogin yung user pero wala pa syang existing account, magssucess yung login pero wala yung userData, dahil dito, hindi sya tatagos.
        // Solution na naiisip: suggest sa backend na kapag ganito yung case, gawan nalang nila ng default values yung data.
        // kaso yung mga email pala pano yun hahahaha
        // since nagagawa yung account bago macheck if existing na yung account sa db, pag nag fail nalang yung last step idedelete nalang yung account na nacreate.
        userData =
          import.meta.env.VITE_USE_FIREBASE === "true"
            ? (userData = await fetchUserDataFromFirestore(user.uid))
            : (userData = await verifyTokenWithBackend(token));
      }

      if (userData) {
        setUser(userData);
        navigate(
          userData?.role === "applicant"
            ? "/applicant/job-listing"
            : "/recruiter/create-new-job",
          { replace: true }
        );
      } else {
        // Hindi rin pala to safe kasi kung mag falsy yung userData for some reason, magrrun tong else block at madedelete yung account na yun. Kung sakali, ako ay fucked. Comment nalang muna to tapos isip solution next time.
        // deleteCurrentUser();
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

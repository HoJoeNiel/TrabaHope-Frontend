import SocialLoginButton from "@/components/SocialLoginButton";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type action = "signup" | "login";

export default function AuthSocialButtons({ action }: { action: action }) {
  return (
    <div
      className={
        action === "signup" ? "grid grid-cols-3 gap-3 mt-4" : undefined
      }
    >
      <SocialLoginButton
        icon={<FaGoogle className="text-red-600 size-5" />}
        label={action === "login" ? "Continue with Google" : "Google"}
      />
      <SocialLoginButton
        icon={<FaFacebook className="text-[#1877F2] size-5" />}
        label={action === "login" ? "Continue with Facebook" : "Facebook"}
      />
      <SocialLoginButton
        icon={<FaGithub className="text-black size-5" />}
        label={action === "login" ? "Continue with Github" : "Github"}
      />
    </div>
  );
}

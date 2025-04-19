import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
}

export default function SocialLoginButton({ icon, label }: Props) {
  return (
    <button
      type="button"
      className="border border-gray-300 w-full my-2 py-2.5 rounded-md flex items-center justify-center space-x-4 hover:bg-gray-50"
    >
      {icon}
      <span className="text-gray-700 max-lg:hidden">{label}</span>
    </button>
  );
}

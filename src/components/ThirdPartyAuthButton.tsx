import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface Props {
  icon: ReactNode;
  label: string;
  isLoading: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export default function ThirdPartyAuthButton({
  icon,
  label,
  isLoading,
  onClick,
}: Props) {
  if (isLoading) {
    return (
      <Button
        disabled
        className="bg-white text-black border border-gray-300 w-full my-2 py-2.5 rounded-md flex items-center justify-center space-x-4 hover:bg-gray-50"
      >
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="border border-gray-300 w-full my-2 py-2.5 rounded-md flex items-center justify-center space-x-4 hover:bg-gray-50"
    >
      {icon}
      <span className="text-gray-700 max-lg:hidden">{label}</span>
    </button>
  );
}

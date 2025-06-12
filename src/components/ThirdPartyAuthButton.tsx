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
        className="bg-slate-700/50 hover:bg-slate-700 border-slate-600  text-white border  w-full my-2 py-2.5 rounded-md flex items-center justify-center space-x-4"
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
      className="border bg-slate-700/50 hover:bg-slate-700 border-slate-600  w-full my-2 py-2.5 rounded-md flex items-center justify-center space-x-4"
    >
      {icon}
      <span className="text-gray-200 max-lg:hidden">{label}</span>
    </button>
  );
}

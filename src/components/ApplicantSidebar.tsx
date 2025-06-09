import Logo from "@/assets/TrabahopeLogoPNG.png";
import { isApplicant } from "@/helpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { LogOut, PanelRight } from "lucide-react";
import {
  PropsWithChildren,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

type SidebarProps = PropsWithChildren;
type SidebarItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  active?: boolean;
  alert?: boolean;
  path: string;
};
type SidebarContextType = {
  isExpanded: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ApplicantSidebarContext = createContext<SidebarContextType>({
  isExpanded: true,
  activeTab: "",
  setActiveTab: () => console.warn("No SidebarProvider found"),
});

export default function ApplicantSidebar({ children }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const applicant = useLoggedInUserStore((state) => state.user);

  if (!applicant) throw new Error("There's no authenticated user.");
  if (!isApplicant) throw new Error("User is not an applicant.");

  console.log(applicant);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (window.innerWidth < 1280) {
          setIsExpanded(false);
        }
      }, 1000);
    };

    window.addEventListener("resize", handleResize);

    if (window.innerWidth < 1280) {
      setIsExpanded(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <aside
      className={`sticky top-0 left-0 z-20 h-screen text-sm bg-white border-r max-xl:absolute max-xl:top-0 max-lg:left-0 ${
        isExpanded ? "w-[250px]" : "w-auto"
      }`}
    >
      <nav className="flex flex-col h-full">
        <div
          className={`p-4 pb-2 flex  items-center overflow-hidden transition-all ${
            isExpanded ? "justify-between " : " justify-center"
          }`}
        >
          <div
            className={`flex space-x-1 items-center mr-2 overflow-hidden transition-all ${
              isExpanded ? "w-[250px]" : "hidden"
            }`}
          >
            <img src={Logo} alt="Trabahope logo" className="size-12" />
            <div className="flex">
              <span className="text-2xl font-bold text-cyan-700">Traba</span>
              <span className="text-2xl font-bold text-cyan-700">Hope</span>
            </div>
          </div>
          <button onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
            <PanelRight strokeWidth={1} className="text-gray-500" />
          </button>
        </div>

        <ApplicantSidebarContext.Provider
          value={{ isExpanded, activeTab, setActiveTab }}
        >
          <ul className="flex-1 px-3 pt-12 text-xl transition-all">
            {children}
          </ul>
        </ApplicantSidebarContext.Provider>

        <div
          className={`border-t bg-stone-50 flex p-3 items-center ${
            isExpanded && "justify-between"
          }`}
        >
          <div className="flex items-center justify-center overflow-hidden bg-black rounded-full size-10">
            {applicant.role === "applicant" && applicant.photoURL ? (
              <img
                src={applicant.photoURL}
                alt="company profile picture"
                className="rounded-full size-10"
              />
            ) : (
              <span className="text-xl font-semibold text-white">
                {applicant.name
                  .split(" ")
                  .map((word) => word[0]?.toUpperCase())
                  .join("")}
              </span>
            )}
          </div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              isExpanded ? "flex-1 ml-3" : "w-0"
            }`}
          >
            <div>
              <h4 className="font-semibold text-gray-800 line-clamp-1">
                {applicant.name}
              </h4>
              <span className="text-xs text-gray-600 line-clamp-1">
                {applicant.email}
              </span>
            </div>
          </div>
          {isExpanded && <LogOut size={20} />}
        </div>
      </nav>
    </aside>
  );
}

export function ApplicantSidebarItem({
  icon: Icon,
  text,
  alert,
  path,
}: SidebarItemProps) {
  const { isExpanded, activeTab, setActiveTab } = useContext(
    ApplicantSidebarContext
  );
  const isActive = activeTab === text;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        setActiveTab(text);
        navigate(path);
      }}
      className={`
        relative text-base flex items-center py-2 px-3 my-1 border rounded-md cursor-pointer h-[42px] transition-all group
        ${
          isActive
            ? "bg-cyan-50 text-cyan-700 border-cyan-200"
            : "hover:bg-cyan-50 text-gray-600 border-transparent"
        }
    `}
    >
      <Icon
        className={`size-5 ${isActive ? "text-cyan-600" : "text-gray-400"}`}
      />
      <span
        className={`overflow-hidden transition-all ${
          isExpanded ? "w-40 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {/* Palitan to ng number of something */}
      {alert && isExpanded && (
        <div className="absolute w-2 h-2-cyan bg-cyan-400 right-2" />
      )}

      {!isExpanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-cyan-100 text-cyan-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

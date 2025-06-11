import Logo from "@/assets/TrabahopeLogoPNG.png";
import { isApplicant } from "@/helpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useResumeStore } from "@/stores/useResumeStore";
import { LogOut, PanelRight } from "lucide-react";
import {
  PropsWithChildren,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

type SidebarProps = PropsWithChildren;
type SidebarItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  active?: boolean;
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
  const location = useLocation();
  const segment = location.pathname.split("/");
  const lastSegment = segment[segment.length - 1]; // current active tab

  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState(lastSegment);

  const applicant = useLoggedInUserStore((state) => state.user);
  const clearUser = useLoggedInUserStore((state) => state.clearUser);
  const setResume = useResumeStore((state) => state.setResume);

  const navigate = useNavigate();

  if (!applicant) throw new Error("There's no authenticated user.");
  if (!isApplicant) throw new Error("User is not an applicant.");

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

  const handleLogout = () => {
    clearUser();
    setResume(null);
    navigate("/");
  };

  return (
    <aside
      className={`sticky top-0 left-0 z-20 h-screen text-sm bg-gray-900/90 backdrop-blur-sm border-gray-700/50 border-r max-xl:absolute max-xl:top-0 max-lg:left-0 ${
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
              <span className="text-2xl font-bold text-cyan-500">Traba</span>
              <span className="text-2xl font-bold text-fuchsia-500">Hope</span>
            </div>
          </div>
          <button onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
            <PanelRight strokeWidth={1} className="text-gray-200" />
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
          className={`rounded-lg bg-gray-800 flex p-3 items-center m-2 border border-white/10 ${
            isExpanded && "justify-between"
          }`}
        >
          <div className="flex items-center justify-center overflow-hidden bg-white rounded-full size-10">
            {applicant.role === "applicant" && applicant.photoURL ? (
              <img
                src={applicant.photoURL}
                alt="company profile picture"
                className="rounded-full size-10"
              />
            ) : (
              <span className="text-xl font-semibold text-black">
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
              <h4 className="font-semibold text-gray-200 line-clamp-1">
                {applicant.name}
              </h4>
              <span className="text-xs text-gray-400 line-clamp-1">
                {applicant.email}
              </span>
            </div>
          </div>
          {isExpanded && (
            <button onClick={handleLogout}>
              <LogOut className="ml-3 text-gray-400" size={20} />
            </button>
          )}
        </div>
      </nav>
    </aside>
  );
}

export function ApplicantSidebarItem({
  icon: Icon,
  text,
  path,
}: SidebarItemProps) {
  const { isExpanded, activeTab, setActiveTab } = useContext(
    ApplicantSidebarContext
  );
  const isActive = activeTab === path;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        setActiveTab(path);
        navigate(path);
      }}
      className={`
        relative text-base flex items-center text-gray-300 py-2 px-3 my-1 border rounded-md cursor-pointer h-[42px] transition-all group
        ${
          isActive
            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
            : "hover:text-cyan-400 border-transparent"
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

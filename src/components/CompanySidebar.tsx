import { LogOut, PanelRight } from "lucide-react";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "@/assets/Blue_White_Professional_Mobile_App_Logo-removebg-preview.png";
import { isRecruiter } from "@/helpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useResumeStore } from "@/stores/useResumeStore";

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

const SidebarContext = createContext<SidebarContextType>({
  isExpanded: true,
  activeTab: "",
  setActiveTab: () => console.warn("No SidebarProvider found"),
});

export default function CompanySidebar({ children }: SidebarProps) {
  const location = useLocation();
  const segment = location.pathname.split("/");
  const lastSegment = segment[segment.length - 1];

  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState(lastSegment);
  const company = useLoggedInUserStore((state) => state.user);

  const clearUser = useLoggedInUserStore((state) => state.clearUser);
  const setResume = useResumeStore((state) => state.setResume);

  const navigate = useNavigate();

  if (!company) throw new Error("There's no authenticated user.");
  if (!isRecruiter(company)) throw new Error("User is not a recruiter.");

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
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text">
                Traba
              </span>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">
                Hope
              </span>
            </div>
          </div>

          <button onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
            <PanelRight strokeWidth={1} className="text-gray-500" />
          </button>
        </div>

        <SidebarContext.Provider
          value={{ isExpanded, activeTab, setActiveTab }}
        >
          <ul className="flex-1 px-3 pt-12 text-xl transition-all">
            {children}
          </ul>
        </SidebarContext.Provider>

        <div
          className={` rounded-lg bg-gray-800 flex p-3 items-center m-2 border border-white/10 ${
            isExpanded && "justify-between"
          }`}
        >
          <div className="flex items-center justify-center overflow-hidden bg-white rounded-full size-10">
            {company.photoURL ? (
              <img
                src={company.photoURL}
                alt="company profile picture"
                className="rounded-full size-10"
              />
            ) : (
              <span className="text-xl font-semibold text-black">
                {company.name
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
                {company.name}
              </h4>
              <span className="text-xs text-gray-400 line-clamp-1">
                {company.email}
              </span>
            </div>
          </div>
          {isExpanded && (
            <button onClick={handleLogout}>
              <LogOut className="ml-3 text-gray-400" size={16} />
            </button>
          )}
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon: Icon, text, path }: SidebarItemProps) {
  const { isExpanded, activeTab, setActiveTab } = useContext(SidebarContext);
  const isActive = activeTab === path;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        setActiveTab(path);
        navigate(path);
      }}
      className={`
        relative text-base flex items-center py-2 text-gray-300 px-3 my-1 border rounded-md cursor-pointer h-[42px] transition-all group
        ${
          isActive
            ? "bg-purple-500/20 text-purple-300  border-purple-500/30"
            : "hover:text-purple-400 border-transparent"
        }
    `}
    >
      <Icon
        className={`size-5 ${isActive ? "text-purple-600" : "text-gray-400"}`}
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
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-fuchsia-100 text-fuchsia-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

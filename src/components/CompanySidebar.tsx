import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { ChevronRight, ChevronLeft, LogOut } from "lucide-react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { isRecruiter } from "@/helpers";

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

const SidebarContext = createContext<SidebarContextType>({
  isExpanded: true,
  activeTab: "",
  setActiveTab: () => console.warn("No SidebarProvider found"),
});

export default function CompanySidebar({ children }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const company = useLoggedInUserStore((state) => state.user);

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
            className={`flex space-x-4 items-center mr-4 overflow-hidden transition-all ${
              isExpanded ? "w-[250px]" : "hidden"
            }`}
          >
            <div className="flex items-center justify-center size-10 recruiter-gradient rounded-xl">
              <span className="font-bold text-white">T</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-blue-500">
                TrabaHope
              </span>
            </div>
          </div>
          <button onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
            {isExpanded ? <ChevronLeft /> : <ChevronRight />}
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
          className={`border-t bg-stone-50 flex p-3 items-center ${
            isExpanded && "justify-between"
          }`}
        >
          <div className="flex items-center justify-center overflow-hidden bg-black rounded-full size-10">
            {company.photoURL ? (
              <img
                src={company.photoURL}
                alt="company profile picture"
                className="rounded-full size-10"
              />
            ) : (
              <span className="text-xl font-semibold text-white">
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
              <h4 className="font-semibold text-gray-800 line-clamp-1">
                {company.name}
              </h4>
              <span className="text-xs text-gray-600 line-clamp-1">
                {company.email}
              </span>
            </div>
          </div>
          {isExpanded && <LogOut size={20} />}
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon: Icon,
  text,
  alert,
  path,
}: SidebarItemProps) {
  const { isExpanded, activeTab, setActiveTab } = useContext(SidebarContext);
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
            ? "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200"
            : "hover:bg-fuchsia-50 text-gray-600 border-transparent"
        }
    `}
    >
      <Icon
        className={`size-5 ${isActive ? "text-fuchsia-600" : "text-gray-400"}`}
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
        <div className="absolute w-2 h-2-fuchsia bg-cyan-400 right-2" />
      )}

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

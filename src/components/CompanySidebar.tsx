import { PropsWithChildren, ReactNode, useContext, useState } from "react";
import { ChevronRight, ChevronLeft, LogOut } from "lucide-react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

type SidebarProps = PropsWithChildren;
type SidebarItemProps = {
  icon: ReactNode;
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
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <aside className="sticky top-0 left-0 h-screen">
      <nav className="flex flex-col h-full bg-white border-r shadow-sm border-r-blue-100">
        <div
          className={`p-4 pb-2 flex  items-center overflow-hidden transition-all ${
            isExpanded ? "w-auto justify-between " : "w-auto justify-center"
          }`}
        >
          <div
            className={`flex space-x-4 items-center mr-4 overflow-hidden transition-all ${
              isExpanded ? "w-auto" : "hidden"
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
          className={`border-t border-t-blue-100 bg-blue-50 flex p-3 items-center ${
            isExpanded ? "justify-between" : "justify-center p-0 h-16"
          }`}
        >
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3739a3&bold=true"
            alt="company profile picture"
            className="rounded-full size-10"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              isExpanded ? "w-auto ml-3" : "w-0"
            }`}
          >
            <div>
              {/* Company name */}
              <h4 className="font-semibold text-gray-800">
                National University
              </h4>
              {/* Company email */}
              <span className="text-xs text-gray-600">
                national-university@gmail.com
              </span>
            </div>
          </div>
          {isExpanded && <LogOut size={20} />}
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, alert, path }: SidebarItemProps) {
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
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-all group
        ${
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          isExpanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && isExpanded && (
        <div className="absolute w-2 h-2 bg-indigo-400 rounded right-2" />
      )}

      {!isExpanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

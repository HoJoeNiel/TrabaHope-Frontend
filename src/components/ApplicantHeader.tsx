import { useUserStore } from "@/stores/useLoggedInUserStore";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ApplicantHeader() {
  const user = useUserStore((state) => state.user);

  return (
    <header className="bg-transparent w-full flex justify-center py-4 ">
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="size-10 main-gradient-bg flex items-center justify-center rounded-xl">
              <span className="text-white font-bold">T</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">TrabaHope</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/applicant/profile">
            <button className="text-sky-600 hover:font-bold transition-all duration-300">
              My Profile
            </button>
          </Link>
          <Link to="/applicant/my-applications">
            <button className="text-sky-600 hover:font-bold transition-all duration-300">
              My Applications
            </button>
          </Link>
          <Link to="/applicant/saved-jobs">
            <button className="text-sky-600 hover:font-bold transition-all duration-300 font-medium">
              Saved Jobs
            </button>
          </Link>
          <Link to="/applicant/job-listing">
            <button className="text-sky-600 hover:font-bold transition-all duration-300 font-medium">
              Jobs Listing
            </button>
          </Link>
          <div className="bg-sky-200 overflow-hidden border size-10 text-sky-600 rounded-full flex justify-center items-center">
            {user?.photoURL ? (
              <img src={user?.photoURL} />
            ) : (
              <MdPerson className="size-6" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

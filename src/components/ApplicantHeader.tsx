import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ApplicantHeader() {
  const user = useLoggedInUserStore((state) => state.user);

  if (!user) {
    console.log("User is not authenticated.");
    return;
  }

  if (user.role === "recruiter") {
    console.log("User is a company/recruiter");
  } else if (user.role === "applicant") {
    console.log("User is an applicant");
  } else {
    console.log("Unknown user role");
  }

  return (
    <header className="flex justify-center w-full py-4 bg-transparent ">
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center size-10 main-gradient-bg rounded-xl">
              <span className="font-bold text-white">T</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">TrabaHope</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/applicant/profile">
            <button className="transition-all duration-300 text-sky-600 hover:font-bold">
              My Profile
            </button>
          </Link>
          <Link to="/applicant/my-applications">
            <button className="transition-all duration-300 text-sky-600 hover:font-bold">
              My Applications
            </button>
          </Link>
          <Link to="/applicant/saved-jobs">
            <button className="font-medium transition-all duration-300 text-sky-600 hover:font-bold">
              Saved Jobs
            </button>
          </Link>
          <Link to="/applicant/job-listing">
            <button className="font-medium transition-all duration-300 text-sky-600 hover:font-bold">
              Jobs Listing
            </button>
          </Link>
          <div className="flex items-center justify-center overflow-hidden border rounded-full bg-sky-200 size-10 text-sky-600">
            {user && user.role === "applicant" && user.photoUrl ? (
              <img src={user?.photoUrl} />
            ) : (
              <MdPerson className="size-6" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

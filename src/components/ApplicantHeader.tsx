import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ApplicantHeader() {
  return (
    <header className="bg-white w-full flex justify-center py-4 border-b border-b-gray-300 shadow">
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
          <Link to="/applicant/dashboard">
            <button className="text-sky-600 font-medium">Dashboard</button>
          </Link>
          <Link to="/applicant/my-applications">
            <button className="text-sky-600">My Applications</button>
          </Link>
          <div className="bg-sky-200 p-2 size-10 text-sky-600 rounded-full flex justify-center items-center">
            <MdPerson className="size-6" />
          </div>
        </div>
      </div>
    </header>
  );
}

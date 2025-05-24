import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute top-0 right-0 z-10 flex justify-center w-full py-4 bg-transparent">
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center bg-white size-10 rounded-xl">
              <span className="font-bold text-blue-700">T</span>
            </div>
            <h1 className="text-2xl font-bold text-white">TrabaHope</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 font-medium text-gray-700 bg-white rounded">
              Sign in
            </button>
          </Link>
          <Link to="/signup/applicant">
            <button className="px-4 py-2 font-medium text-white transition-transform duration-300 bg-blue-300 rounded shadow hover:scale-105">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

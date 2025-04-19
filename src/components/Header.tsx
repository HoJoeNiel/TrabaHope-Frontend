import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white w-full flex justify-center py-4">
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
          <Link to="/login">
            <button className="text-teal-600 font-medium">Log in</button>
          </Link>
          <Link to="/signup/applicant">
            <button className="main-gradient-bg font-medium text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition-transform duration-300">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

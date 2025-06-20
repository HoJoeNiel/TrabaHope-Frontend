import interview from "@/assets/undraw_interview_yz52.svg";
import peopleSearch from "@/assets/undraw_people-search_xpq4.svg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-[900px] overflow-hidden">
      {/* bg-cyan-700/80 change main theme color to this color */}
      <div className="w-full h-full bg-cyan-700/80">
        <div className="w-full max-w-[1440px] py-32 grid grid-cols-2 mx-auto">
          <div>
            <h1 className="block mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-8xl">
              <span className="">Finding the perfect job</span>
              <span className="block">has never been smarter</span>
            </h1>
            <p className="mt-3 mb-12 text-base text-gray-100 sm:text-xl lg:text-lg xl:text-xl">
              TrabaHope uses AI to match job seekers with the right
              opportunities and helps recruiters find ideal candidates faster
              than ever before.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => navigate("/signup/applicant")}
                className="flex-1 py-2 text-lg font-medium transition-transform duration-300 bg-white rounded-lg shadow text-dusty-sky-blue hover:scale-105"
              >
                For Applicants
              </button>
              <button
                onClick={() => navigate("/signup/recruiter")}
                className="flex-1 py-2 text-lg font-medium text-white transition-transform duration-300 rounded-lg shadow bg-cyan-500 hover:scale-105"
              >
                For Recruiters
              </button>
            </div>
          </div>
          <div className="relative h-[550px]">
            <img
              src={interview}
              alt="interview"
              className="w-[380px] absolute bottom-0 left-40 z-10"
            />
            <img
              src={peopleSearch}
              alt="interview"
              className="w-[380px] absolute top-0 left-80"
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full h-[150px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,218.7C420,224,480,160,540,117.3C600,75,660,53,720,58.7C780,64,840,96,900,117.3C960,139,1020,149,1080,165.3C1140,181,1200,203,1260,192C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

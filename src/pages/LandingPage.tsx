import Header from "@/components/Header";
import businessDeal from "@/assets/undraw_business-deal_nx2n.svg";
import interview from "@/assets/undraw_interview_yz52.svg";
import peopleSearch from "@/assets/undraw_people-search_xpq4.svg";

export default function LandingPage() {
  return (
    <div>
      <Header />
      {/* Hero section */}
      <section className="relative w-full h-[700px] overflow-hidden">
        <div className="gradient-bg w-full h-full">
          <div className="w-full max-w-[1440px] py-20 grid grid-cols-2 mx-auto">
            <div>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-7xl">
                <span className="">Finding the perfect job</span>
                <span className="block">has never been smarter</span>
              </h1>
              <p className="mt-3 mb-12 text-base text-gray-100 sm:text-xl lg:text-lg xl:text-xl">
                TrabaHope uses AI to match job seekers with the right
                opportunities and helps recruiters find ideal candidates faster
                than ever before.
              </p>
              <div className="flex space-x-6">
                <button className="text-black font-medium flex-1 rounded-lg bg-white py-2 shadow transition-transform duration-300 hover:scale-105">
                  For Applicants
                </button>
                <button className="text-white font-medium flex-1 rounded-lg bg-blue-500 py-2 shadow transition-transform duration-300 hover:scale-105">
                  For Recruiters
                </button>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img
                src={interview}
                alt="interview"
                className="size-52 absolute bottom-4 left-20 z-10"
              />
              <img
                src={peopleSearch}
                alt="interview"
                className="size-96 absolute top-10 left-40"
              />
              <img
                src={businessDeal}
                alt="interview"
                className="size-52 absolute top-0 right-32"
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
            fill-opacity="1"
            d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,218.7C420,224,480,160,540,117.3C600,75,660,53,720,58.7C780,64,840,96,900,117.3C960,139,1020,149,1080,165.3C1140,181,1200,203,1260,192C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}

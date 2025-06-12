import Hero from "@/assets/resume-folder-animate.svg";
import Logo from "@/assets/Blue_White_Professional_Mobile_App_Logo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900">
      <section className="relative h-screen px-6 py-4 overflow-hidden">
        <header className="relative z-10 px-6 py-4 bg-transparent">
          <nav className="flex items-center justify-between mx-auto max-w-7xl">
            <div className="flex items-center mr-2 space-x-1 overflow-hidden transition-all">
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

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 transition-all duration-200 border rounded-lg text-slate-300 hover:text-white border-slate-600 hover:border-slate-500"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/signup/applicant")}
                className="px-4 py-2 text-white transition-all duration-200 rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 hover:scale-105"
              >
                Sign up
              </button>
            </div>
          </nav>
        </header>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900"></div>
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-teal-500/10 blur-3xl animate-pulse"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
                Finding the{" "}
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">
                  perfect job
                </span>{" "}
                has never been{" "}
                <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">
                  smarter
                </span>
              </h1>

              <p className="max-w-lg text-xl leading-relaxed text-slate-300">
                TrabaHope uses AI to match job seekers with the right
                opportunities and helps recruiters find ideal candidates faster
                than ever before.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => navigate("/signup/applicant")}
                  className="px-8 py-4 text-white transition-all duration-200 border bg-slate-700/50 hover:bg-slate-700 border-slate-600 rounded-xl hover:scale-105 backdrop-blur-sm"
                >
                  For Applicants
                </button>
                <button
                  onClick={() => navigate("/signup/recruiter")}
                  className="px-8 py-4 text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 rounded-xl hover:scale-105 hover:shadow-fuchsia-500/25"
                >
                  For Recruiters
                </button>
              </div>
            </div>

            <img src={Hero} alt="Hero" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold tracking-wider uppercase text-cyan-400">
              AI-POWERED PLATFORM
            </p>
            <h2 className="mb-4 text-4xl font-bold text-white">
              Smart matching for better careers
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-slate-300">
              TrabaHope uses advanced AI to streamline the job search and hiring
              process for both applicants and recruiters.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 transition-all duration-300 border bg-slate-700/50 backdrop-blur border-slate-600/50 rounded-2xl hover:bg-slate-700/70 hover:scale-105 group">
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30">
                <span className="text-2xl text-blue-400">📊</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Resume Match Scoring
              </h3>
              <p className="leading-relaxed text-slate-300">
                Automatically calculate how well your resume matches job
                requirements.
              </p>
            </div>

            <div className="p-8 transition-all duration-300 border bg-slate-700/50 backdrop-blur border-slate-600/50 rounded-2xl hover:bg-slate-700/70 hover:scale-105 group">
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30">
                <span className="text-2xl text-cyan-400">🏆</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                AI-Based Ranking
              </h3>
              <p className="leading-relaxed text-slate-300">
                Prioritize applications based on qualifications and relevance.
              </p>
            </div>

            <div className="p-8 transition-all duration-300 border bg-slate-700/50 backdrop-blur border-slate-600/50 rounded-2xl hover:bg-slate-700/70 hover:scale-105 group">
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30">
                <span className="text-2xl text-purple-400">💬</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Resume Feedback
              </h3>
              <p className="leading-relaxed text-slate-300">
                Get insights on missing skills and suggestions for improvement.
              </p>
            </div>

            <div className="p-8 transition-all duration-300 border bg-slate-700/50 backdrop-blur border-slate-600/50 rounded-2xl hover:bg-slate-700/70 hover:scale-105 group">
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-green-500/20 rounded-xl group-hover:bg-green-500/30">
                <span className="text-2xl text-green-400">🛤️</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Career Path Suggestions
              </h3>
              <p className="leading-relaxed text-slate-300">
                Discover potential roles based on your current skills and
                experience.
              </p>
            </div>

            <div className="p-8 transition-all duration-300 border bg-slate-700/50 backdrop-blur border-slate-600/50 rounded-2xl hover:bg-slate-700/70 hover:scale-105 group">
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-teal-500/20 rounded-xl group-hover:bg-teal-500/30">
                <span className="text-2xl text-teal-400">🔍</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Smart Job Discovery
              </h3>
              <p className="leading-relaxed text-slate-300">
                Filter jobs based on your resume content and preferences.
              </p>
            </div>

            <div className="p-8 transition-all duration-300 border bg-slate-700/50 backdrop-blur border-slate-600/50 rounded-2xl hover:bg-slate-700/70 hover:scale-105 group">
              <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30">
                <span className="text-2xl text-orange-400">📋</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Application Tracking
              </h3>
              <p className="leading-relaxed text-slate-300">
                Monitor the status of your applications in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="mb-6 text-4xl font-bold text-white">
                For Job Seekers
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-slate-300">
                Find your dream job faster with TrabaHope's smart tools designed
                for applicants.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded bg-cyan-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Upload your resume
                    </h3>
                    <p className="text-slate-400">
                      Add your PDF resume and let our AI analyze it
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded bg-cyan-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Discover matching jobs
                    </h3>
                    <p className="text-slate-400">
                      Get personalized job recommendations based on your skills
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded bg-cyan-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Track applications
                    </h3>
                    <p className="text-slate-400">
                      Monitor the status of your applications in one place
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded bg-cyan-500">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Get resume feedback
                    </h3>
                    <p className="text-slate-400">
                      Improve your resume with AI-powered suggestions
                    </p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-4 font-semibold text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 rounded-xl hover:scale-105 hover:shadow-cyan-500/25">
                Sign up as Applicant
              </button>
            </div>

            <div className="relative">
              <div className="relative p-8 border shadow-2xl bg-slate-800/50 backdrop-blur border-slate-700/50 rounded-3xl">
                <div className="absolute w-4 h-4 rounded-full top-4 right-4 bg-cyan-400/30 animate-pulse"></div>
                <div className="absolute w-3 h-3 delay-1000 rounded-full bottom-8 left-8 bg-teal-400/30 animate-pulse"></div>
                <div className="absolute w-2 h-2 delay-500 rounded-full top-1/2 right-8 bg-purple-400/30 animate-pulse"></div>

                <div className="flex items-center justify-center h-64">
                  <div className="relative">
                    <div className="relative w-24 h-32 rounded-t-full bg-gradient-to-b from-slate-600 to-slate-700">
                      <div className="absolute w-12 h-12 transform -translate-x-1/2 rounded-full -top-6 left-1/2 bg-gradient-to-br from-pink-400 to-red-400"></div>

                      <div className="absolute w-16 h-20 transform -translate-x-1/2 rounded-t-lg top-8 left-1/2 bg-gradient-to-b from-teal-500 to-cyan-600"></div>

                      <div className="absolute w-12 h-16 border-2 rounded shadow-lg top-12 -right-8 bg-slate-200 border-slate-300">
                        <div className="p-2 space-y-1">
                          <div className="w-full h-1 rounded bg-slate-400"></div>
                          <div className="w-3/4 h-1 rounded bg-slate-400"></div>
                          <div className="w-full h-1 rounded bg-slate-400"></div>
                          <div className="w-1/2 h-1 rounded bg-slate-400"></div>
                        </div>
                      </div>

                      <div className="absolute transform rotate-45 -top-4 -left-12">
                        <div className="w-8 h-8 shadow-lg bg-gradient-to-br from-cyan-300 to-teal-400 clip-path-triangle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="relative p-8 border shadow-2xl bg-slate-800/50 backdrop-blur border-slate-700/50 rounded-3xl">
                <div className="absolute w-3 h-3 rounded-full top-6 left-6 bg-purple-400/30 animate-pulse"></div>
                <div className="absolute w-4 h-4 delay-700 rounded-full bottom-6 right-6 bg-pink-400/30 animate-pulse"></div>
                <div className="absolute w-2 h-2 delay-300 rounded-full top-1/3 left-4 bg-cyan-400/30 animate-pulse"></div>

                <div className="flex items-center justify-center h-64">
                  <div className="relative">
                    <div className="absolute flex items-center justify-center w-12 h-12 border-2 rounded-full -top-8 -left-8 bg-gradient-to-br from-blue-400 to-purple-500 border-slate-600">
                      <span className="text-lg text-white">👤</span>
                    </div>

                    <div className="absolute flex items-center justify-center w-10 h-10 border-2 rounded-full -top-4 left-8 bg-gradient-to-br from-pink-400 to-red-500 border-slate-600">
                      <span className="text-sm text-white">👤</span>
                    </div>

                    <div className="absolute flex items-center justify-center w-8 h-8 border-2 rounded-full top-8 -left-6 bg-gradient-to-br from-green-400 to-teal-500 border-slate-600">
                      <span className="text-xs text-white">👤</span>
                    </div>

                    <div className="relative flex items-center justify-center w-32 h-32 border-4 rounded-full shadow-2xl bg-slate-700/50 border-cyan-400">
                      <span className="text-4xl text-cyan-400">🔍</span>

                      <div className="absolute w-16 h-4 transform rotate-45 rounded-full shadow-lg -bottom-8 -right-8 bg-slate-600"></div>
                    </div>

                    <div className="absolute w-16 h-20 rounded-t-full -bottom-12 right-4 bg-gradient-to-b from-slate-600 to-slate-700">
                      <div className="absolute w-8 h-8 transform -translate-x-1/2 rounded-full -top-4 left-1/2 bg-gradient-to-br from-slate-500 to-slate-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 space-y-8 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-white">
                For Recruiters
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-slate-300">
                Find the perfect candidates and streamline your hiring process
                with TrabaHope.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-purple-500 rounded">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Post job opportunities
                    </h3>
                    <p className="text-slate-400">
                      Create detailed job postings to attract the right talent
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-purple-500 rounded">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      AI-based candidate ranking
                    </h3>
                    <p className="text-slate-400">
                      Let our AI prioritize applicants based on qualifications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-purple-500 rounded">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Review detailed profiles
                    </h3>
                    <p className="text-slate-400">
                      Access comprehensive candidate information
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-purple-500 rounded">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      Manage applications
                    </h3>
                    <p className="text-slate-400">
                      Easily respond to applications and schedule interviews
                    </p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-4 font-semibold text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl hover:scale-105 hover:shadow-purple-500/25">
                Sign up as Recruiter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

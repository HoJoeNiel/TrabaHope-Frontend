import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

import { interests, jobFields, jobTypes } from "@/mocks/mock-data";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useEditApplicantInfo } from "@/services/mutations";
import { isApplicant } from "@/helpers";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

export default function SetupApplicantAccount() {
  const applicant = useLoggedInUserStore((state) => state.user);
  const setUser = useLoggedInUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const {
    mutate: editApplicantInfo,
    isPending,
    isError,
  } = useEditApplicantInfo();

  const [userInterests, setInterests] = useState<string[]>([]);

  if (!isApplicant(applicant)) throw new Error("User is not an applicant.");

  const handleAddInterest = (interest: string) => {
    if (userInterests.includes(interest)) {
      const copy = userInterests.filter((i) => i !== interest);
      setInterests(() => copy);
      return;
    }
    setInterests((prev) => prev.concat(interest));
  };

  const handleSubmit = () => {
    editApplicantInfo({ ...applicant, interest: userInterests });
    setUser({ ...applicant, interest: userInterests });

    if (isError) {
      alert("Failed to submit interests. Please try again.");
      return;
    }

    navigate("/applicant/dashboard");
  };

  return (
    <div className="min-h-screen animate-fadeIn bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {isPending && (
        <div className="absolute flex items-center justify-center w-screen h-screen">
          <Loading />
        </div>
      )}
      {!isPending && (
        <div className="max-w-6xl px-6 py-12 mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">
              Tell us what you're looking for
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400">
              Help us match you with the perfect opportunities by sharing your
              preferences and interests
            </p>
          </div>

          <div className="space-y-12">
            {/* Job Fields Section */}
            <section className="p-8 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Job Fields
                </h2>
                <p className="text-gray-400">
                  Select the areas you'd like to work in
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {jobFields.map((field) => (
                  <div
                    key={field.id}
                    onClick={() => handleAddInterest(field.name)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 group hover:scale-105 ${
                      userInterests.includes(field.name)
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-gray-600/50 bg-gray-700/30 hover:border-gray-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-lg"
                        style={{
                          backgroundColor: `${field.color}20`,
                          color: field.color,
                        }}
                      >
                        <field.icon className="w-6 h-6" />
                      </div>
                      {userInterests.includes(field.name) && (
                        <div className="flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-purple-300">
                      {field.name}
                    </h3>
                    <p className="text-sm text-gray-400">{field.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Job Types Section */}
            <section className="p-8 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Work Preferences
                </h2>
                <p className="text-gray-400">
                  Choose your preferred work arrangements
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {jobTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => handleAddInterest(type.name)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      userInterests.includes(type.name)
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-gray-600/50 bg-gray-700/30 hover:border-gray-500"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <type.icon
                        className={`w-6 h-6 mb-2 ${
                          userInterests.includes(type.name)
                            ? "text-purple-400"
                            : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          userInterests.includes(type.name)
                            ? "text-purple-300"
                            : "text-gray-300"
                        }`}
                      >
                        {type.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests Section */}
            <section className="p-8 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Interests & Technologies
                </h2>
                <p className="text-gray-400">
                  Select topics and technologies you're passionate about
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleAddInterest(interest)}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                      userInterests.includes(interest)
                        ? "border-purple-500 bg-purple-500/20 text-purple-300"
                        : "border-gray-600/50 bg-gray-700/30 text-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="flex items-center justify-end pt-8">
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Complete Setup
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

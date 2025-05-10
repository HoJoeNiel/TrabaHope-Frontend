import { CiFileOn } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import { useRef } from "react";
import ResumeAnalysis from "./ResumeAnalysis";
import { useResumeStore } from "@/stores/useResumeStore";

export default function ResumeSection() {
  const resumeFileRef = useRef<HTMLInputElement | null>(null);
  const resume = useResumeStore((state) => state.resumeFile);
  const setResume = useResumeStore((state) => state.setResume);

  console.log(resume);

  const handleClick = () => {
    resumeFileRef.current?.click();
  };

  const handleUploadResume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];

    if (file) {
      setResume(file);
      console.log("Uploaded file: ", file);
    }

    // TODO: Send the uploaded resume to the backend server.
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Resume</h2>
        <div className="flex space-x-2">
          {resume && (
            <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600">
              <GoDownload size={16} />
              <span>Download</span>
            </button>
          )}

          <input
            type="file"
            className="hidden"
            ref={resumeFileRef}
            onChange={handleUploadResume}
          />
          <button
            onClick={handleClick}
            className="flex items-center space-x-1 text-blue-500 hover:text-blue-600"
          >
            <MdOutlineFileUpload size={16} />
            <span>{resume ? "Update" : "Upload"}</span>
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
        {!resume && <p>No resume uploaded.</p>}
        {resume && (
          <>
            <div className="flex items-center">
              <div className="bg-blue-100 rounded p-2">
                <CiFileOn size={20} className="text-blue-500" />
              </div>

              <div className="ml-3">
                <p className="font-medium">{resume.name}</p>
                <p className="text-sm text-gray-500">
                  Uploaded on {Date.now().toLocaleString()}
                </p>
              </div>
            </div>
            <div className="bg-green-100 text-green-700 text-sm py-1 px-3 rounded-full">
              Active
            </div>
          </>
        )}
      </div>

      {resume && <ResumeAnalysis resume={resume} />}
    </div>
  );
}

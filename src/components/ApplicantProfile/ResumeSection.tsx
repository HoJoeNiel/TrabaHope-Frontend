import { useRef } from "react";
import { CiFileOn } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";

import { isApplicant } from "@/helpers";
import { uploadResumePDFToCloudinary } from "@/services/api";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useResumeStore } from "@/stores/useResumeStore";
import { ResumeData } from "@/types";

import ResumeAnalysis from "./ResumeAnalysis";

export default function ResumeSection() {
  const user = useLoggedInUserStore((state) => state.user);

  if (!isApplicant(user) || !user) throw new Error("User is not an applicant.");

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const resumeFileRef = useRef<HTMLInputElement | null>(null);
  const resume = useResumeStore((state) => state.resume);
  const setResume = useResumeStore((state) => state.setResume);
  const downloadUrl = resume?.secureURL.replace(
    "/upload/",
    "/upload/fl_attachment/"
  );

  const handleClick = () => {
    resumeFileRef.current?.click();
  };

  const handleUploadResume = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0];

    console.log(file);

    if (!file) return;

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);

    const resumepdf = await uploadResumePDFToCloudinary(data);

    const resumeData: ResumeData = {
      secureURL: resumepdf.secure_url,
      fileName: resumepdf.display_name,
      size: resumepdf.bytes,
      createdAt: resumepdf.created_at,
    };

    console.log(resumeData);

    setResume(resumeData);
  };

  return (
    <div className="p-6 my-8 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Resume</h2>
        <div className="flex space-x-2">
          {resume && (
            <a
              href={downloadUrl}
              download={resume.fileName}
              className="flex items-center space-x-1 text-blue-500 hover:text-blue-600"
            >
              <GoDownload size={16} />
              <span>Download</span>
            </a>
          )}

          <input
            type="file"
            accept="application/pdf"
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

      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
        {!resume && <p>No resume uploaded.</p>}
        {resume && (
          <>
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded">
                <CiFileOn size={20} className="text-blue-500" />
              </div>

              <div className="ml-3">
                <p className="font-medium">{resume.fileName}</p>
                <p className="text-sm text-gray-500">
                  Uploaded on {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
              Active
            </div>
          </>
        )}
      </div>

      {resume && <ResumeAnalysis resume={resume} />}
    </div>
  );
}

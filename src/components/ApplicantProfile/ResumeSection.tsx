import { Upload } from "lucide-react";
import { useRef } from "react";
import { GoDownload } from "react-icons/go";

import { uploadResumePDFToCloudinary } from "@/services/api";
import { useEditApplicantInfo } from "@/services/mutations";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useResumeStore } from "@/stores/useResumeStore";
import { ApplicantAuth, ResumeData } from "@/types";

import ResumeTipsCard from "../JobListingPage/ResumeTipsCard";
import Loading from "../Loading";

export default function ResumeSection({ user }: { user: ApplicantAuth }) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const {
    mutate: editApplicantInfo,
    isPending,
    isError,
  } = useEditApplicantInfo();

  const setUser = useLoggedInUserStore((state) => state.setUser);

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
    setResume(null); // remove muna yung prev resume
    const file = event?.target?.files?.[0];

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

    editApplicantInfo({ ...user, resumeFile: resumepdf.secure_url }); // check if edit ba talaga nangyayari
    setUser({ ...user, resumeFile: resumepdf.secure_url }); // check if edit ba talaga nangyayari
    setResume(resumeData);
  };

  return (
    <div className="p-8 mx-6 mb-8 bg-gray-800 border border-gray-700 rounded shadow-xl">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Resume</h2>
          <div className="flex gap-3">
            {user.resumeFile && (
              <a
                href={downloadUrl}
                download={resume?.fileName}
                className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-gray-700 rounded-lg hover:bg-gray-600"
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
              className="flex items-center gap-2 px-4 py-2 text-white transition-colors rounded-lg bg-cyan-600 hover:bg-cyan-700"
            >
              <Upload className="w-4 h-4" />
              {user.resumeFile ? "Update" : "Upload"}
            </button>
          </div>
        </div>
        {!resume && isPending && <p>No uploaded resume.</p>}
        {isPending && <Loading />}
        {isError && <p>An error occured. Failed to upload resume.</p>}
        {user.resumeFile && !isPending && (
          <div className="flex items-center gap-4 p-4 border border-gray-600 rounded bg-gray-700/50">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-500/20">
              <div className="w-6 h-8 bg-red-500 rounded-sm"></div>
            </div>
            <div className="flex-1">
              <a
                href={user.resumeFile ?? ""}
                target="_blank"
                className="font-medium text-white"
              >
                {user.name}_resume.pdf
              </a>
              <p className="text-sm text-gray-400">
                Uploaded on {new Date().toLocaleDateString()}
              </p>
            </div>
            <span className="px-3 py-1 text-sm text-green-400 border rounded-full bg-green-500/20 border-green-500/30">
              Active
            </span>
          </div>
        )}
        {resume && (
          <ResumeTipsCard className="border-gray-600 rounded bg-gray-700/60" />
        )}
      </div>
    </div>
  );
}

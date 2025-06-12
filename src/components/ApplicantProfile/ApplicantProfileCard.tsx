import { Edit, Globe, Mail, MapPin, Phone } from "lucide-react";
import React, { useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

import { formatDate, isRecruiter } from "@/helpers";
import { uploadImageToCloudinary } from "@/services/api";
import { useEditApplicantInfo } from "@/services/mutations";
import { useApplicantInfo } from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { ApplicantAuth } from "@/types";

import Loading from "../Loading";

const openToOptions = [
  { id: "fulltime", label: "Full-time positions" },
  { id: "remote", label: "Remote work" },
  { id: "contract", label: "Contract roles" },
  { id: "freelance", label: "Freelance projects" },
  { id: "parttime", label: "Part-time positions" },
];

export default function ApplicantProfileCard({
  user,
}: {
  user: ApplicantAuth;
}) {
  const setUser = useLoggedInUserStore((state) => state.setUser);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const [editing, setEditing] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const [profilePreview, setProfilePreview] = useState(user.photoURL);

  const { data: applicant } = useApplicantInfo(user.id);

  if (isRecruiter(applicant)) throw new Error("user is company");

  const [applicantInfo, setApplicantInfo] = useState<ApplicantAuth>({
    ...user,
  });

  const {
    mutate: editApplicantInfo,
    isPending,
    isError,
  } = useEditApplicantInfo();

  const profilePhotoRef = useRef<HTMLInputElement | null>(null);

  const bio =
    applicantInfo.description ??
    "No bio added yet. Share something about yourself to help others get to know you!";

  let shortBio;

  if (bio) {
    shortBio = bio.length > 150 ? bio.substring(0, 150) + "..." : bio;
  }

  const handleChangeProfileTrigger = () => {
    profilePhotoRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setApplicantInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePhotoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0];

      if (!file) return;

      const data = new FormData();

      data.append("file", file);
      data.append("upload_preset", uploadPreset);
      data.append("cloud_name", cloudName);

      const image = await uploadImageToCloudinary(data);

      editApplicantInfo({ ...user, photoURL: image.secure_url });
      setUser({ ...applicantInfo, photoURL: image.secure_url });
      setProfilePreview(image.secure_url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    editApplicantInfo(applicantInfo);
    setUser(applicantInfo);
    setEditing(false);
  };

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>An error occured.</div>;
  }

  return (
    <div className="p-6 rounded-lg shadow">
      {!editing ? (
        <>
          <div className="p-8 mb-8 bg-gray-800 border border-gray-700 rounded shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="flex items-center justify-center overflow-hidden border rounded-full bg-gradient-to-br from-gray-600 to-gray-700 size-20">
                    {profilePreview ? (
                      <img
                        src={profilePreview}
                        alt="applicant profile picture"
                        className="object-contain size-20"
                      />
                    ) : (
                      <MdPerson className="size-10" />
                    )}
                  </div>
                  <button
                    onClick={handleChangeProfileTrigger}
                    className="absolute bottom-0 right-0 p-1 bg-blue-500 rounded-full cursor-pointer"
                  >
                    <TbEdit size={12} className="text-white" />
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePhotoChange}
                    ref={profilePhotoRef}
                  />
                </div>
                <div>
                  <h1 className="mb-2 text-3xl font-bold text-white">
                    {applicantInfo.name}
                  </h1>
                  <p className="mb-1 font-medium text-cyan-400">
                    {applicantInfo.jobTitle}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full">
                      <span className="text-xs text-white">✓</span>
                    </div>
                    <span>
                      Member since{" "}
                      {formatDate(
                        new Date(applicantInfo.createdAt).toLocaleDateString()
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setEditing((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-2 text-white transition-colors rounded-lg bg-cyan-600 hover:bg-cyan-700"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-white">
                About Me
              </h3>
              <p className="leading-relaxed text-gray-300">
                {showFullBio ? bio : shortBio}
                {bio.length > 150 && (
                  <button
                    onClick={() => setShowFullBio(!showFullBio)}
                    className="ml-1 font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    {showFullBio ? "Show less" : "Read more"}
                  </button>
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>{applicantInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>
                  {applicantInfo.contactNumber ??
                    "Contact Number not yet provided"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>
                  {applicantInfo.location ?? "Location not yet provided"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Globe className="w-5 h-5" />
                <span>
                  {applicantInfo.portfolioURL ?? "Portfolio URL not provided"}
                </span>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-400">
                Open to
              </h4>
              <div className="flex flex-wrap gap-2">
                {(applicant?.openTo ?? []).map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 text-sm text-blue-300 border border-blue-700 rounded-lg bg-blue-900/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="p-8 space-y-6 bg-gray-800 border border-gray-700 rounded">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-200">
              Edit Profile Information
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setEditing(false);
                  setApplicantInfo(() => ({ ...user }));
                }}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-800 px-3 py-1.5 bg-gray-100 rounded-md"
              >
                <IoIosClose size={16} />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center space-x-1 text-white bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded-md"
              >
                <IoCheckmarkOutline size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Jonel Villaver"
                className="w-full px-3 py-2 border rounded bg-gray-100/70 border-gray-600/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={applicantInfo.name}
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Job Title
              </label>
              <input
                type="text"
                defaultValue="Frontend Developer"
                className="w-full px-3 py-2 border rounded bg-gray-100/70 border-gray-600/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="jobTitle"
                value={applicantInfo.jobTitle ?? ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                defaultValue="jonelvillaver735@gmail.com"
                className="w-full px-3 py-2 border rounded bg-gray-100/70 border-gray-600/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={applicantInfo.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Phone
              </label>
              <input
                type="tel"
                defaultValue="+63 970 807 5290"
                className="w-full px-3 py-2 border rounded bg-gray-100/70 border-gray-600/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="contactNumber"
                value={applicantInfo.contactNumber ?? ""}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Website
              </label>
              <input
                type="url"
                defaultValue="johndoe.dev"
                className="w-full px-3 py-2 border rounded bg-gray-100/70 border-gray-600/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="portfolioURL"
                value={applicantInfo.portfolioURL ?? ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-200">
                Location
              </label>
              <input
                type="text"
                defaultValue="Manila, Philippines"
                className="w-full px-3 py-2 border rounded bg-gray-100/70 border-gray-600/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="location"
                value={applicantInfo.location ?? ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-200">
              About Me
            </label>
            <textarea
              defaultValue={bio}
              rows={4}
              className="w-full px-3 py-2 border rounded bg-gray-100/70 border-gray-600/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="description"
              value={applicantInfo.description ?? ""}
              onChange={(e) =>
                setApplicantInfo((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <p className="mt-1 text-sm text-gray-200">
              Brief description for your profile. URLs are hyperlinked.
            </p>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-100">
              Open to (select all that apply)
            </label>
            <div className="space-y-2">
              {openToOptions.map((option) => (
                <div className="flex items-center" key={option.id}>
                  <input
                    type="checkbox"
                    id={option.id}
                    value={option.label}
                    checked={
                      applicantInfo.openTo?.includes(option.label) || false
                    }
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const value = e.target.value;

                      setApplicantInfo((prev) => {
                        const current = prev.openTo ?? [];
                        const updated = checked
                          ? [...current, value]
                          : current.filter((item) => item !== value);

                        return { ...prev, openTo: updated };
                      });
                    }}
                    className="w-4 h-4 text-gray-200 focus:ring-blue-500"
                  />
                  <label htmlFor={option.id} className="ml-2 text-gray-300">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

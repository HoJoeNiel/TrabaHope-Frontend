import React, { useRef, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiCalendar, CiLocationOn, CiMail } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { TbEdit, TbWorld } from "react-icons/tb";

import { ApplicantAuth } from "@/types";
import { useEditApplicantInfo } from "@/services/mutations";
import { uploadImageToCloudinary } from "@/services/api";
import Loading from "../Loading";
import { useApplicantInfo } from "@/services/queries";
import { isRecruiter } from "@/helpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

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

  console.log(applicantInfo);

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
    <div className="p-6 bg-white rounded-lg shadow">
      {!editing ? (
        <>
          <div className="flex items-start justify-between">
            <div className="flex">
              <div className="relative">
                <div className="flex items-center justify-center overflow-hidden border rounded-full bg-gray-50 size-20">
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

              <div className="ml-5">
                <h1 className="text-2xl font-bold">{applicantInfo.name}</h1>
                <p className="font-medium text-gray-600">
                  {applicantInfo.jobTitle ?? "No title yet"}
                </p>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <CiCalendar size={14} className="mr-1" />
                  <span>
                    Member since{" "}
                    {new Date(applicantInfo.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setEditing(true)}
              className="flex items-center space-x-1 text-blue-500 hover:text-blue-600 px-3 py-1.5 bg-blue-50 rounded-md"
            >
              <TbEdit size={16} />
              <span>Edit Profile</span>
            </button>
          </div>

          <div className="mt-6">
            <h2 className="mb-2 font-medium text-md">About Me</h2>
            <p className="text-gray-700">
              {showFullBio ? bio : shortBio}
              {bio.length > 150 && (
                <button
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="ml-1 font-medium text-blue-500 hover:text-blue-600"
                >
                  {showFullBio ? "Show less" : "Read more"}
                </button>
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center">
              <CiMail size={16} className="mr-2 text-gray-500" />
              <span className="text-gray-700">{applicantInfo.email}</span>
            </div>

            <div className="flex items-center">
              <BsTelephone size={16} className="mr-2 text-gray-500" />
              <span className="text-gray-700">
                {applicantInfo.contactNumber ?? "No contact number"}
              </span>
            </div>

            <div className="flex items-center">
              <CiLocationOn size={16} className="mr-2 text-gray-500" />
              <span className="text-gray-700">
                {applicantInfo.location ?? "No location yet."}
              </span>
            </div>

            <div className="flex items-center">
              <TbWorld size={16} className="mr-2 text-gray-500" />
              <span className="text-blue-500 cursor-pointer hover:text-blue-600">
                {applicantInfo.portfolioURL ?? "No portfolio URL yet."}
              </span>
            </div>
          </div>

          {applicantInfo.openTo && (
            <div className="mt-6">
              <h2 className="mb-2 font-medium text-md">Open to</h2>
              <div className="flex flex-wrap gap-2">
                {applicantInfo.openTo?.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Edit Profile Information</h2>
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
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Jonel Villaver"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={applicantInfo.name}
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                defaultValue="Frontend Developer"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="jobTitle"
                value={applicantInfo.jobTitle ?? ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                defaultValue="jonelvillaver735@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={applicantInfo.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                defaultValue="+63 970 807 5290"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="contactNumber"
                value={applicantInfo.contactNumber ?? ""}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                defaultValue="johndoe.dev"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="portfolioURL"
                value={applicantInfo.portfolioURL ?? ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                defaultValue="Manila, Philippines"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="location"
                value={applicantInfo.location ?? ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              About Me
            </label>
            <textarea
              defaultValue={bio}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="description"
              value={applicantInfo.description ?? ""}
              onChange={(e) =>
                setApplicantInfo((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <p className="mt-1 text-sm text-gray-500">
              Brief description for your profile. URLs are hyperlinked.
            </p>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
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
                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                  />
                  <label htmlFor={option.id} className="ml-2 text-gray-700">
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

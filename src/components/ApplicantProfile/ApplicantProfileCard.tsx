import { useState } from "react";

import { CiCalendar } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useUserStore } from "@/stores/useUserStore";
import { MdPerson } from "react-icons/md";

export default function ApplicantProfileCard() {
  const [editing, setEditing] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const user = useUserStore((state) => state.user);

  const bio =
    "Passionate Frontend Developer with 7+ years of experience creating responsive, user-focused web applications. Specialized in React, TypeScript, and modern CSS frameworks. Strong advocate for accessible design and performance optimization. Previously worked at tech startups and enterprise companies, helping build products used by millions of users worldwide. Currently seeking opportunities to leverage my expertise in creating exceptional user experiences while continually expanding my skillset in emerging frontend technologies.";

  const shortBio = bio.length > 150 ? bio.substring(0, 150) + "..." : bio;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {!editing ? (
        <>
          <div className="flex items-start justify-between">
            <div className="flex">
              <div className="relative">
                <div className="bg-blue-100 rounded-full size-20 flex items-center justify-center overflow-hidden border">
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="applicant profile picture"
                      className="object-contain size-20"
                    />
                  ) : (
                    <MdPerson />
                  )}
                </div>
                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 cursor-pointer">
                  <TbEdit size={12} className="text-white" />
                </div>
              </div>

              <div className="ml-5">
                <h1 className="text-2xl font-bold">Jonel Villaver</h1>
                <p className="text-gray-600 font-medium">Frontend Developer</p>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <CiCalendar size={14} className="mr-1" />
                  <span>Member since April 2025</span>
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
            <h2 className="text-md font-medium mb-2">About Me</h2>
            <p className="text-gray-700">
              {showFullBio ? bio : shortBio}
              {bio.length > 150 && (
                <button
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="text-blue-500 hover:text-blue-600 ml-1 font-medium"
                >
                  {showFullBio ? "Show less" : "Read more"}
                </button>
              )}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center">
              <CiMail size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700">jonelvillaver735@gmail.com</span>
            </div>

            <div className="flex items-center">
              <BsTelephone size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700">+63 970 807 5290</span>
            </div>
            <div className="flex items-center">
              <CiLinkedin size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700 truncate">
                linkedin.com/in/jonelvillaver
              </span>
            </div>
            <div className="flex items-center">
              <CiLocationOn size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700">Manila, Philippines</span>
            </div>
            <div className="flex items-center">
              <TbWorld size={16} className="text-gray-500 mr-2" />
              <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                nelman.dev
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-md font-medium mb-2">Open to</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Full-time positions
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Remote work
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Contract roles
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Edit Profile Information</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setEditing(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-800 px-3 py-1.5 bg-gray-100 rounded-md"
              >
                <IoIosClose size={16} />
                <span>Cancel</span>
              </button>
              <button
                onClick={() => setEditing(false)}
                className="flex items-center space-x-1 text-white bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded-md"
              >
                <IoCheckmarkOutline size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Jonel Villaver"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                defaultValue="Frontend Developer"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="jonelvillaver735@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                defaultValue="+63 970 807 5290"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn
              </label>
              <input
                type="url"
                defaultValue="linkedin.com/in/jonelvillaver"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <input
                type="url"
                defaultValue="johndoe.dev"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                defaultValue="Manila, Philippines"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About Me
            </label>
            <textarea
              defaultValue={bio}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              Brief description for your profile. URLs are hyperlinked.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Open to (select all that apply)
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="fulltime"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                  defaultChecked
                />
                <label htmlFor="fulltime" className="ml-2 text-gray-700">
                  Full-time positions
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remote"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                  defaultChecked
                />
                <label htmlFor="remote" className="ml-2 text-gray-700">
                  Remote work
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="contract"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                  defaultChecked
                />
                <label htmlFor="contract" className="ml-2 text-gray-700">
                  Contract roles
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="freelance"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="freelance" className="ml-2 text-gray-700">
                  Freelance projects
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="parttime"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="parttime" className="ml-2 text-gray-700">
                  Part-time positions
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

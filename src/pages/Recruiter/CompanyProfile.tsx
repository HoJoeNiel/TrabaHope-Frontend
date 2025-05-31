import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isRecruiter } from "@/helpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { CompanyAuth } from "@/types";
import {
  Building2,
  Calendar,
  Camera,
  Edit3,
  ExternalLink,
  Globe,
  MapPin,
  Save,
  Trash,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyProfile() {
  const company = useLoggedInUserStore(
    (state) => state.user
  ) as CompanyAuth | null;
  const setUser = useLoggedInUserStore((state) => state.setUser);

  if (!company) throw new Error("Company data not loaded");

  const coverPhotoRef = useRef<HTMLInputElement>(null);
  const profilePhotoRef = useRef<HTMLInputElement>(null);
  const prevProfilePhotoRef = useRef<string | null>(null);
  const prevCoverPhotoURLRef = useRef<string | null>(null);

  const [previewProfilePhotoURL, setPreviewProfilePhotoURL] = useState<
    string | null
  >(null);
  const [previewCoverPhotoURL, setPreviewCoverPhotoURL] = useState<
    string | null
  >(null);

  const [isEditingMain, setEditingMain] = useState(false);
  const [isEditingDescription, setEditingDescription] = useState(false);
  const [isEditingMission, setEditingMission] = useState(false);
  const [isEditingSpecialities, setEditingSpecialities] = useState(false);

  const [specialtyInput, setSpecialtyInput] = useState("");
  const [companyInfo, setCompanyInfo] = useState<CompanyAuth>({
    id: company.id,
    name: company?.name,
    description: company?.description,
    email: company?.email,
    contactNumber: company?.contactNumber,
    location: company?.location,
    photoURL: company?.photoURL,
    specialties: company?.specialties,
    noOfEmployees: company?.noOfEmployees,
    websiteURL: company?.websiteURL,
    yearFounded: company?.yearFounded,
    createdAt: company.createdAt,
    industry: company?.industry,
    role: company?.role,
    mission: company.mission,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // delete yung prev na nacreate na object url para maavoid memory leaks
    return () => {
      if (prevCoverPhotoURLRef.current) {
        URL.revokeObjectURL(prevCoverPhotoURLRef.current);
      }

      if (prevProfilePhotoRef.current) {
        URL.revokeObjectURL(prevProfilePhotoRef.current);
      }
    };
  }, []);

  if (!company) {
    navigate("/login");
    return null;
  }

  if (!isRecruiter(company)) {
    navigate("/");
    return null;
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0]?.toUpperCase())
      .join("");
  };

  const handleProfilePhotoRefClick = () => {
    profilePhotoRef.current?.click();
  };

  const handleCoverPhotoRefClick = () => {
    coverPhotoRef.current?.click();
  };

  const handleCoverPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (prevCoverPhotoURLRef.current) {
      URL.revokeObjectURL(prevCoverPhotoURLRef.current);
    }

    const newURL = URL.createObjectURL(file);
    console.log(newURL);
    setPreviewCoverPhotoURL(newURL);
    prevCoverPhotoURLRef.current = newURL;

    // TODO: Upload photo sa backend api natin
  };

  const handleProfilePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (prevProfilePhotoRef.current) {
      URL.revokeObjectURL(prevProfilePhotoRef.current);
    }

    const newURL = URL.createObjectURL(file);
    setPreviewProfilePhotoURL(newURL);
    prevProfilePhotoRef.current = newURL;

    // TODO: Upload photo sa backend api natin
  };

  const handleSaveEditChanges = () => {
    console.log("try...");
    setUser(companyInfo);
    console.log("nasasave naman sya ah");
  };

  console.log(companyInfo.specialties);

  return (
    <div className="flex-1 p-4 space-y-6">
      <div className="relative w-full overflow-hidden bg-white border rounded-lg">
        <div className="h-[200px] overflow-hidden relative bg-gradient-to-r from-cyan-400 to-fuchsia-400">
          {company.photoURL || // cover photo dapat to pero since wala pa, eto nalang muna
            (previewCoverPhotoURL && (
              <img
                src={company.photoURL ?? previewCoverPhotoURL ?? ""}
                alt="Company cover"
                className="object-cover w-full h-full"
              />
            ))}

          <button
            className="absolute p-2 bg-white rounded-lg shadow top-6 right-6 hover:bg-gray-100"
            onClick={handleCoverPhotoRefClick}
          >
            <Camera className="text-gray-700 size-4" />
          </button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleCoverPhotoChange}
            ref={coverPhotoRef}
          />
        </div>

        <div className="absolute border-4 border-white rounded-md shadow top-40 left-10 bg-gray-50 size-36">
          <div className="relative w-full h-full">
            {company.photoURL || previewProfilePhotoURL ? (
              <img
                src={company.photoURL ?? previewProfilePhotoURL ?? ""}
                alt="Company logo"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-md">
                <span className="text-4xl font-semibold text-gray-200">
                  {getInitials(company.name)}
                </span>
              </div>
            )}
            <button
              className="absolute z-20 flex items-center justify-center bg-blue-600 rounded-full -right-3 -bottom-3 size-8 hover:bg-blue-700"
              onClick={handleProfilePhotoRefClick}
            >
              <Camera className="text-white size-4" />
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={profilePhotoRef}
              onChange={handleProfilePhotoChange}
            />
          </div>
        </div>

        <div className="flex justify-between p-8 pt-8">
          <div className="space-y-4 px-44">
            <div>
              {isEditingMain && (
                <Input
                  type="text"
                  className="p-0 m-0 text-3xl font-bold shadow-none"
                  value={companyInfo.name}
                  onChange={(e) =>
                    setCompanyInfo((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              )}
              {!isEditingMain && (
                <h1 className="text-3xl font-bold">{company.name}</h1>
              )}

              <div className="flex flex-wrap gap-4 my-2 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Building2 className="size-4" />
                  {isEditingMain ? (
                    <Input
                      type="text"
                      className="p-0 m-0 shadow-none"
                      value={companyInfo.industry}
                      onChange={(e) =>
                        setCompanyInfo((prev) => ({
                          ...prev,
                          industry: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <span>{company.industry}</span>
                  )}
                </div>

                <div className="flex items-center space-x-1">
                  <MapPin className="size-4" />
                  {isEditingMain ? (
                    <Input
                      className="p-0 m-0 border shadow-none"
                      value={companyInfo.location ?? "null"}
                      onChange={(e) =>
                        setCompanyInfo((prev) => ({
                          ...prev,
                          location: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <span>{company.location ?? "null"}</span>
                  )}
                </div>

                <div className="flex items-center space-x-1">
                  <Users className="size-4" />
                  <span>{company.noOfEmployees || 0} employees</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="size-4" />
                  {isEditingMain ? (
                    <Input
                      type="number"
                      className="p-0 m-0 shadow-none"
                      value={companyInfo.yearFounded ?? "null"}
                      onChange={(e) =>
                        setCompanyInfo((prev) => ({
                          ...prev,
                          yearFounded: e.target.valueAsNumber,
                        }))
                      }
                    />
                  ) : (
                    <span>Founded {company.yearFounded ?? "null"}</span>
                  )}
                </div>

                {company.websiteURL && (
                  <a
                    href={company.websiteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 hover:underline"
                  >
                    <Globe className="size-4" />
                    {isEditingMain ? (
                      <Input
                        className="p-0 m-0 shadow-none"
                        value={companyInfo.websiteURL ?? "null"}
                        onChange={(e) =>
                          setCompanyInfo((prev) => ({
                            ...prev,
                            websiteURL: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <span>
                        {company.websiteURL.replace(/^https?:\/\//, "")}
                      </span>
                    )}
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {isEditingMain ? (
            <button
              onClick={() => {
                handleSaveEditChanges();
                setEditingMain((prev) => !prev);
              }}
              className="flex items-center self-start px-4 py-2 space-x-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              <Save className="size-5" />
              <span>Save Changes</span>
            </button>
          ) : (
            <button
              onClick={() => setEditingMain((prev) => !prev)}
              className="flex items-center self-start px-4 py-2 space-x-2 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <Edit3 className="size-5" />
              <span>Edit Profile</span>
            </button>
          )}
        </div>
      </div>

      <SectionCard
        onSave={handleSaveEditChanges}
        isEditing={isEditingDescription}
        title={`About ${company.name}`}
        onEdit={() => setEditingDescription((prev) => !prev)}
      >
        {isEditingDescription ? (
          <Textarea
            className="p-0 m-0 text-sm text-gray-700 whitespace-pre-line"
            value={
              companyInfo.description ??
              "Your company doesn't have description yet. Let others know more about your company!"
            }
            onChange={(e) =>
              setCompanyInfo((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        ) : (
          <p className="text-gray-700 whitespace-pre-line">
            {company.description ||
              "Your company description hasn't been added yet. Let others know more about your company!"}
          </p>
        )}
      </SectionCard>

      <SectionCard
        onSave={handleSaveEditChanges}
        isEditing={isEditingMission}
        title="Our mission"
        onEdit={() => setEditingMission((prev) => !prev)}
      >
        <div className="flex items-start space-x-4">
          {isEditingMission ? (
            <Textarea
              className="p-0 m-0 text-sm text-gray-700 whitespace-pre-line"
              value={
                companyInfo.mission ??
                "Your company hasn't set its mission yet. Share what drives your organization!"
              }
              onChange={(e) =>
                setCompanyInfo((prev) => ({
                  ...prev,
                  mission: e.target.value,
                }))
              }
            />
          ) : (
            <p className="mt-1 text-gray-700 whitespace-pre-line">
              {company.mission ||
                "Your company hasn't set its mission yet. Share what drives your organization!"}
            </p>
          )}
        </div>
      </SectionCard>

      <SectionCard
        onSave={handleSaveEditChanges}
        isEditing={isEditingSpecialities}
        title="Specialties"
        onEdit={() => setEditingSpecialities((prev) => !prev)}
      >
        <div className="flex flex-wrap gap-2">
          {/* Render specialties list */}
          {company.specialties && company.specialties.length > 0 ? (
            (companyInfo?.specialties ?? []).map((specialty, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
              >
                <span>{specialty}</span>
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() =>
                    setCompanyInfo((prev) => ({
                      ...prev,
                      specialties: (prev.specialties ?? []).filter(
                        (item) => item !== specialty
                      ),
                    }))
                  }
                  aria-label={`Remove specialty ${specialty}`}
                >
                  <Trash size={14} />
                </button>
              </div>
            ))
          ) : (
            // Show message if no specialties
            <p className="text-gray-500">
              You haven't added any company specialties yet
            </p>
          )}

          {/* Input for adding new specialties */}
          {isEditingSpecialities && (
            <Input
              type="text"
              placeholder="e.g. React, TypeScript, Tailwind"
              className="flex-grow block px-3 py-2 text-sm border border-gray-300 shadow-sm rounded-l-md focus:border-indigo-500 focus:ring-indigo-500"
              value={specialtyInput}
              onChange={(e) => setSpecialtyInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && specialtyInput.trim() !== "") {
                  e.preventDefault();
                  setCompanyInfo((prev) => ({
                    ...prev,
                    specialties: [
                      ...(prev.specialties ?? []),
                      specialtyInput.trim(),
                    ],
                  }));
                  setSpecialtyInput(""); // clear input after adding
                }
              }}
            />
          )}
        </div>
      </SectionCard>
    </div>
  );
}

function SectionCard({
  title,
  children,
  onEdit,
  onSave,
  isEditing,
}: {
  title: string;
  children: React.ReactNode;
  onEdit: () => void;
  onSave: () => void;
  isEditing: boolean;
}) {
  return (
    <div className="p-6 bg-white border rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {isEditing ? (
          <button
            onClick={() => {
              onSave();
              onEdit();
            }}
            className="text-blue-400 hover:text-blue-600"
          >
            <Save className="size-4" />
          </button>
        ) : (
          <button
            onClick={onEdit}
            className={`${
              isEditing
                ? "text-blue-400 hover:text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {isEditing ? (
              <Save className="size-4" />
            ) : (
              <Edit3 className="size-4" />
            )}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

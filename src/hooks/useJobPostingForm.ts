import { useState } from "react";

export function useJobPostingForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState(false);
  const [employmentType, setEmploymentType] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [benefits, setBenefits] = useState("");
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  return {
    jobTitle,
    setJobTitle,
    location,
    setLocation,
    remote,
    setRemote,
    employmentType,
    setEmploymentType,
    salaryMin,
    setSalaryMin,
    salaryMax,
    setSalaryMax,
    description,
    setDescription,
    requirements,
    setRequirements,
    responsibilities,
    setResponsibilities,
    benefits,
    setBenefits,
    tag,
    setTag,
    tags,
    setTags,
  };
}

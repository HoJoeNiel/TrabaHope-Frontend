import {
  ApplicantAuth,
  ApplicantJob,
  CompanyAuth,
  Job,
  JobWithId,
} from "@/types";

export const verifyTokenWithBackend = async (
  token: string
): Promise<ApplicantAuth | CompanyAuth> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    throw new Error(`API Request failed with status ${response.status}`);
  }

  return response.json();
};

export const postJob = async (companyPostedJob: Job) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/web/jobs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyPostedJob),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to save job. Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const editJobBackend = async (editedJob: JobWithId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/web/jobs/${editedJob.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedJob),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to save job. Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const deleteJobBackend = async (id: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/web/jobs/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to delete job. Status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchCompanyJobs = async (
  companyId: string
): Promise<JobWithId[] | undefined> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/web/${companyId}/jobs`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch jobs. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const editCompanyAuth = async (
  company: CompanyAuth
): Promise<CompanyAuth> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/company/${company.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(company),
    }
  );

  if (!response.ok) {
    throw new Error(`API Request failed with status ${response.status}`);
  }

  return response.json();
};

// Abang lang muna pero dapat may query parameter to sa susunod
export const fetchApplicantJobs = async (): Promise<ApplicantJob[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/web/all_jobs`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`API Request failed with status ${response.status}`);
  }

  return await response.json();
};

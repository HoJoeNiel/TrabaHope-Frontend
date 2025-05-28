import { ApplicantAuth, CompanyAuth } from "@/types";

export const verifyTokenWithBackend = async (
  token: string
): Promise<ApplicantAuth | CompanyAuth> => {
  const response = await fetch(`${import.meta.env.BASE_URL}/sign-in`, {
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

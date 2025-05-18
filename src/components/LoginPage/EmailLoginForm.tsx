import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase";
import { fetchUserDataFromFirestore } from "@/helpers";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmailLoginForm() {
  const navigate = useNavigate();
  const setUser = useLoggedInUserStore((state) => state.setUser);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = credentials;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("No authenticated user found.");

      const userData = await fetchUserDataFromFirestore(currentUser.uid);
      if (!userData)
        throw new Error("Failed to fetch user data from firestore");

      setUser({
        displayName: userData.displayName,
        email: userData.email,
        photoURL: userData.photoURL,
        role: userData.role,
      });

      const redirectPath =
        userData.role === "applicant"
          ? "/applicant/job-listing"
          : "/recruiter/create-new-job";
      navigate(redirectPath, { replace: true });
    } catch (error: unknown) {
      let errorMessage = "Something went wrong: ";
      if (error instanceof Error) {
        errorMessage += error.message;
      }
      setError(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-1.5 mb-4">
        <Label htmlFor="email-address">Email Address</Label>
        <Input
          type="email"
          id="email-address"
          name="email"
          placeholder="Email Address"
          value={credentials.email}
          onChange={handleInputChange}
        />
        {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
      </div>

      <div className="grid w-full items-center gap-1.5 mb-4">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex space-x-2 mb-4">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 w-full py-2 text-lg text-center rounded-lg shadow text-white"
      >
        Log in
      </button>
    </form>
  );
}

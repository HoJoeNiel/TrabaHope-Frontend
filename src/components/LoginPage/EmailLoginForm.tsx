import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { fetchUserDataFromFirestore } from "@/helpers";
import { verifyTokenWithBackend } from "@/services/api";
import { useAuth } from "@/services/auth";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function EmailLoginForm() {
  const setUser = useLoggedInUserStore((state) => state.setUser);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { email, password } = credentials;

      if (!email.trim() || !password.trim()) {
        setError("Email and password are required.");
        return;
      }

      const { token, user } = await login(email, password);

      let userData;
      if (import.meta.env.VITE_USE_FIREBASE === "true") {
        userData = await fetchUserDataFromFirestore(user.uid);
      } else {
        userData = await verifyTokenWithBackend(token);
      }

      if (!userData) throw new Error("User data not found.");

      setUser(userData);

      if (userData.role === "applicant") {
        if (!userData.interest?.length || !userData.interest) {
          navigate("/setup-account", { replace: true });
        } else {
          navigate("/applicant/job-listing", { replace: true });
        }
      } else {
        navigate("/recruiter/dashboard", { replace: true });
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-1.5 mb-4">
        <Label htmlFor="email-address" className="text-gray-200">
          Email Address
        </Label>
        <Input
          type="email"
          id="email-address"
          name="email"
          placeholder="Email Address"
          required
          value={credentials.email}
          className="border bg-slate-700/50 border-slate-600"
          onChange={handleInputChange}
        />
        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      </div>

      <div className="grid w-full items-center gap-1.5 mb-4">
        <Label htmlFor="password" className="text-gray-200">
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          className="border bg-slate-700/50 border-slate-600"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex mb-4 space-x-2 text-gray-200">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <Button
        type="submit"
        className="w-full py-2 text-lg text-center text-white rounded-lg shadow bg-cyan-600 hover:bg-cyan-700"
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="animate-spin" />
            <span>Please wait</span>
          </div>
        ) : (
          "Log in"
        )}
      </Button>
    </form>
  );
}

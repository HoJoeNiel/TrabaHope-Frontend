import { AuthError } from "firebase/auth";

export const handleAuthError = (error: unknown): never => {
  let errorMessage = "Something went wrong: ";

  if (error instanceof Error) {
    errorMessage += error.message;
  }
  throw new Error(errorMessage);
};

export const mapAuthError = (error: AuthError) => {
  switch (error.code) {
    case "auth/invalid-email":
      return new Error("Please enter a valid email address");
    case "auth/user-disabled":
      return new Error("This account has been disabled");
    case "auth/user-not-found":
      return new Error("There's no such user.");
    case "auth/wrong-password":
      return new Error("Invalid email or password");
    case "auth/too-many-requests":
      return new Error("Too many attempts. Please try again later.");
    default:
      return new Error("Login failed. Please try again.");
  }
};

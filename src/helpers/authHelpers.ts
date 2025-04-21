export const handleAuthError = (error: unknown): never => {
  let errorMessage = "Something went wrong: ";

  if (error instanceof Error) {
    errorMessage += error.message;
  }
  throw new Error(errorMessage);
};

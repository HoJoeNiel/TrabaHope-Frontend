import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box sx={{ display: "flex" }} className="flex items-center justify-center w-full">
      <CircularProgress />
    </Box>
  );
}

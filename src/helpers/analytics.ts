import { Application } from "@/types";

export const processJobAnalyticsData = (applications: Application[]) => {
  const jobCounts: Record<string, number> = {};

  applications.forEach((app) => {
    const jobTitle = app.job.title;
    jobCounts[jobTitle] = (jobCounts[jobTitle] || 0) + 1;
  });

  return {
    labels: Object.keys(jobCounts),
    datasets: [
      {
        data: Object.values(jobCounts),
        backgroundColor: [
          "#06B6D4",
          "#8B5CF6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#6366F1",
          "#EC4899",
          "#14B8A6",
          "#F97316",
          "#8B5CF6",
          "#06B6D4",
          "#10B981",
        ],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  };
};

export const processApplicationStatusData = (applications: Application[]) => {
  const statusCounts: Record<string, number> = {
    "Pending Review": 0,
    "Interview Scheduled": 0,
    Hired: 0,
    Rejected: 0,
  };

  applications.forEach((app) => {
    if (app.status === "Pending") statusCounts["Pending Review"]++;
    else if (app.status === "Interview") statusCounts["Interview Scheduled"]++;
    else if (app.status === "Hired") statusCounts["Hired"]++;
    else if (app.status === "Rejected") statusCounts["Rejected"]++;
  });

  return {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: ["#F59E0B", "#3B82F6", "#10B981", "#EF4444"],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  };
};

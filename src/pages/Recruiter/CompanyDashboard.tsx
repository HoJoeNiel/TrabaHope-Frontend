import { useEffect, useMemo, useRef } from "react";
import * as Chart from "chart.js";
import { Search, Filter, ChevronRight, BarChart3 } from "lucide-react";
import { useApplicationsStore } from "@/stores/useApplicationsStore";
import { sortApplicationsByDate, sortInterviewsByDate } from "@/helpers";
import { useNavigate } from "react-router-dom";
import JobStats from "@/components/CompanyDashboard/JobStats";
import RecentApplications from "@/components/CompanyDashboard/RecentApplications";
import { useInterviewsStore } from "@/stores/useInterviewsStore";
import UpcomingInterview from "@/components/CompanyDashboard/UpcomingInterview";

const Dashboard = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const applicationStatusChartRef = useRef<HTMLCanvasElement>(null);

  const jobChartInstance = useRef<Chart.Chart | null>(null);
  const statusChartInstance = useRef<Chart.Chart | null>(null);

  const applications = useApplicationsStore((state) => state.applications);
  const recentApplications = sortApplicationsByDate(applications ?? [])?.slice(
    0,
    4
  );

  const interviews = useInterviewsStore((state) => state.interviews);
  const upcomingInterviews = sortInterviewsByDate(interviews ?? []).slice(0, 3);

  const navigate = useNavigate();

  const jobAnalyticsData = useMemo(
    () => ({
      labels: [
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
        "DevOps Engineer",
        "Data Analyst",
        "Product Manager",
      ],
      datasets: [
        {
          data: [45, 38, 25, 22, 18, 12],
          backgroundColor: [
            "#06B6D4",
            "#8B5CF6",
            "#10B981",
            "#F59E0B",
            "#EF4444",
            "#6366F1",
          ],
          borderWidth: 0,
          cutout: "60%",
        },
      ],
    }),
    []
  );

  const applicationStatusData = useMemo(
    () => ({
      labels: ["Pending Review", "Interview Scheduled", "Hired", "Rejected"],
      datasets: [
        {
          data: [89, 42, 28, 35],
          backgroundColor: ["#F59E0B", "#3B82F6", "#10B981", "#EF4444"],
          borderWidth: 0,
          cutout: "60%",
        },
      ],
    }),
    []
  );

  useEffect(() => {
    Chart.Chart.register(
      Chart.ArcElement,
      Chart.Tooltip,
      Chart.Legend,
      Chart.DoughnutController
    );

    if (chartRef.current) {
      if (jobChartInstance.current) jobChartInstance.current.destroy();
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        jobChartInstance.current = new Chart.Chart(ctx, {
          type: "doughnut",
          data: jobAnalyticsData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) =>
                    `${context.label}: ${context.parsed} applications`,
                },
              },
            },
          },
        });
      }
    }

    if (applicationStatusChartRef.current) {
      if (statusChartInstance.current) statusChartInstance.current.destroy();
      const ctx = applicationStatusChartRef.current.getContext("2d");
      if (ctx) {
        statusChartInstance.current = new Chart.Chart(ctx, {
          type: "doughnut",
          data: applicationStatusData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) =>
                    `${context.label}: ${context.parsed} applications`,
                },
              },
            },
          },
        });
      }
    }

    return () => {
      jobChartInstance.current?.destroy();
      statusChartInstance.current?.destroy();
    };
  }, [applicationStatusData, jobAnalyticsData]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <JobStats />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Recent Applications */}
            <div className="bg-white border border-gray-200 rounded-md shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Applications
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 rounded-md hover:text-gray-600 hover:bg-gray-100">
                      <Search className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 rounded-md hover:text-gray-600 hover:bg-gray-100">
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {recentApplications?.map((application) => (
                  <RecentApplications
                    key={application.applicantId}
                    application={application}
                  />
                ))}
              </div>
              <div className="px-6 py-4 border-t border-gray-200">
                <button
                  onClick={() => navigate("/recruiter/application")}
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View all applications
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <UpcomingInterview interviews={upcomingInterviews} />
          </div>

          <div>
            {/* Applications by Job Role */}
            <div className="bg-white border border-gray-200 rounded-md shadow-sm ">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Applications by Role
                  </h3>
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="relative h-48 mb-4">
                  <canvas ref={chartRef}></canvas>
                </div>
                <div className="space-y-2">
                  {jobAnalyticsData.labels.map((label, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-mdll"
                          style={{
                            backgroundColor:
                              jobAnalyticsData.datasets[0].backgroundColor[
                                index
                              ],
                          }}
                        ></div>
                        <span className="text-gray-600">{label}</span>
                      </div>
                      <span className="font-medium text-gray-900">
                        {jobAnalyticsData.datasets[0].data[index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Application Status */}
            <div className="mt-4 bg-white border border-gray-200 rounded-md shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Application Status
                  </h3>
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="relative h-48 mb-4">
                  <canvas ref={applicationStatusChartRef}></canvas>
                </div>
                <div className="space-y-2">
                  {applicationStatusData.labels.map((label, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-mdll"
                          style={{
                            backgroundColor:
                              applicationStatusData.datasets[0].backgroundColor[
                                index
                              ],
                          }}
                        ></div>
                        <span className="text-gray-600">{label}</span>
                      </div>
                      <span className="font-medium text-gray-900">
                        {applicationStatusData.datasets[0].data[index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import * as Chart from "chart.js";
import { BarChart3, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

import JobStats from "@/components/CompanyDashboard/JobStats";
import RecentApplications from "@/components/CompanyDashboard/RecentApplications";
import UpcomingInterview from "@/components/CompanyDashboard/UpcomingInterview";
import { isRecruiter, sortInterviewsByDate } from "@/helpers";
import {
  processApplicationStatusData,
  processJobAnalyticsData,
} from "@/helpers/analytics";
import {
  useCompanyApplications,
  useCompanyInterviews,
} from "@/services/queries";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";

const Dashboard = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const applicationStatusChartRef = useRef<HTMLCanvasElement>(null);

  const user = useLoggedInUserStore((state) => state.user);

  if (!isRecruiter(user))
    throw new Error("User logged in is not an applicant.");

  const jobChartInstance = useRef<Chart.Chart | null>(null);
  const statusChartInstance = useRef<Chart.Chart | null>(null);

  const { data: applications } = useCompanyApplications(user.id);
  const { data: interviews } = useCompanyInterviews(user.id);

  const upcomingInterviews = sortInterviewsByDate(interviews ?? []).slice(0, 3);

  const navigate = useNavigate();

  const jobAnalyticsData = useMemo(
    () => processJobAnalyticsData(applications ?? []),
    [applications]
  );

  const applicationStatusData = useMemo(
    () => processApplicationStatusData(applications ?? []),
    [applications]
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
    <div className="min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <JobStats applications={applications ?? []} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Recent Applications */}
            <div className="mb-4 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-100">
                    Recent Applications
                  </h2>
                </div>
              </div>

              <div className="">
                {!applications && (
                  <p className="py-8 text-lg text-center text-gray-300">
                    No applications have been received for your job postings
                    yet.
                  </p>
                )}
                {applications?.slice(0, 3).map((application) => (
                  <RecentApplications
                    key={application.job.jobId}
                    application={application}
                  />
                ))}
              </div>
              <div className="px-6 py-4 ">
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
            <div className="border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-100">
                    Applications by Role
                  </h3>
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                {!jobAnalyticsData.datasets[0].data.length && (
                  <p className="py-8 text-lg text-center text-gray-300">
                    There's no data to show since you don't have any job
                    applications.
                  </p>
                )}
                {jobAnalyticsData.datasets[0].data.length !== 0 && (
                  <>
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
                            <span className="text-gray-300">{label}</span>
                          </div>
                          <span className="font-medium text-gray-200">
                            {jobAnalyticsData.datasets[0].data[index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Application Status */}
            <div className="mt-4 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-100">
                    Application Status
                  </h3>
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                {!applicationStatusData.datasets[0].data.length && (
                  <p className="py-8 text-lg text-center text-gray-300">
                    There's no data to show since you don't have any job
                    applications.
                  </p>
                )}
                {applicationStatusData.datasets[0].data.length !== 0 && (
                  <div>
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
                                  applicationStatusData.datasets[0]
                                    .backgroundColor[index],
                              }}
                            ></div>
                            <span className="text-gray-300">{label}</span>
                          </div>
                          <span className="font-medium text-gray-200">
                            {applicationStatusData.datasets[0].data[index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

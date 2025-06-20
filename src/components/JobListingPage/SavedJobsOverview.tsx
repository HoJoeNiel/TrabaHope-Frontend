import { useApplicantJobsStore } from "@/stores/useApplicantJobsStore";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  className?: string;
};

export default function SavedJobsOverview({ className }: Props) {
  // const savedJobs = useApplicantJobsStore((state) => state.savedJobs);
  // const lastThreeItems = savedJobs?.slice(-3).reverse();
  // const navigate = useNavigate();

  return (
    <div></div>
    // <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    //   <div className="flex items-center justify-between mb-4">
    //     <div className="flex items-center gap-2">
    //       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-600">
    //         <FaBookmark />
    //       </div>
    //       <h2 className="text-lg font-bold">Saved Jobs</h2>
    //     </div>
    //     <span className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full">
    //       {savedJobs.length}
    //     </span>
    //   </div>

    //   <div className="space-y-4">
    //     {savedJobs.length === 0 && (
    //       <>
    //         <p>You haven't saved any jobs yet.</p>
    //         <p>Tap the bookmark icon to start saving opportunities you like!</p>
    //       </>
    //     )}
    //     {lastThreeItems?.map((sj) => (
    //       <div key={sj.id} className="pb-3 border-b border-gray-100">
    //         <h3 className="font-medium text-gray-800">{sj.jobTitle}</h3>
    //         <p className="text-sm text-sky-600">{sj.companyName}</p>
    //         <div className="flex items-center justify-between mt-1">
    //           <span className="text-xs text-gray-500">
    //             {sj.timestamps?.posted}
    //           </span>
    //           <button className="text-sm text-sky-600 hover:text-sky-800">
    //             Apply
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <button
    //     onClick={() => navigate("/applicant/saved-jobs")}
    //     className="mt-4 text-sm text-sky-600 hover:text-sky-800"
    //   >
    //     View All Saved Jobs
    //   </button>
    // </div>
  );
}

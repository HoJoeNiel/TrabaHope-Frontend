import { BarChart2, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

type Stats = {
  total: number;
  pending: number;
  interview: number;
  hired: number;
  rejected: number;
};

export default function ApplicationStats({ stats }: { stats: Stats }) {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">Total</h3>
          <h1 className="text-gray-700 text-3xl font-bold">{stats.total}</h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-blue-100 text-blue-400 rounded-full">
          <BarChart2 className="w-4 h-4 text-blue-500" />
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">Pending</h3>
          <h1 className="text-gray-700 text-3xl font-bold">{stats.pending}</h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-blue-100 text-blue-500 rounded-full">
          <Clock className="w-4 h-4 text-blue-500" />
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">Interview</h3>
          <h1 className="text-gray-700 text-3xl font-bold">
            {stats.interview}
          </h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-green-100 text-green-500 rounded-full">
          <Calendar className="w-4 h-4 text-emerald-500" />
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">Hired</h3>
          <h1 className="text-gray-700 text-3xl font-bold">{stats.hired}</h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-green-100 text-green-500 rounded-full">
          <CheckCircle className="w-4 h-4 text-green-500" />
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg flex justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">Rejected</h3>
          <h1 className="text-gray-700 text-3xl font-bold">{stats.rejected}</h1>
        </div>

        <div className="flex items-center justify-center p-4 size-14 bg-red-100 text-red-500 rounded-full">
          <XCircle className="w-4 h-4 text-red-500" />
        </div>
      </div>
    </div>
  );
}

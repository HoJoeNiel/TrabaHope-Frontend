export default function ApplicationAnalytics() {
  return (
    <div className="bg-white rounded-lg shadow p-6 my-8">
      <h2 className="text-lg font-semibold mb-4">Application Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-600">Applications</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
          <p className="text-3xl font-bold text-green-600">3</p>
          <p className="text-sm text-gray-600">Interviews</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-200">
          <p className="text-3xl font-bold text-yellow-600">5</p>
          <p className="text-sm text-gray-600">Pending</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
          <p className="text-3xl font-bold text-red-600">4</p>
          <p className="text-sm text-gray-600">Declined</p>
        </div>
      </div>
    </div>
  );
}

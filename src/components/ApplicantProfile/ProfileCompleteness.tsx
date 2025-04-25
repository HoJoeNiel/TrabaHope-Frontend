import { Progress } from "@/components/ui/progress";
import { FiCheckCircle } from "react-icons/fi";

export default function ProfileCompleteness() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <div className="mb-4 flex justify-between">
        <h1 className="text-xl font-bold">Profile Completeness</h1>
        <span className="text-blue-500 font-medium">{85}%</span>
      </div>

      <Progress value={85} className="w-full my-4" />

      <div className="flex justify-between my-2">
        <div className="flex items-center space-x-2">
          <FiCheckCircle className="text-green-600" />
          <span className="text-green-600">Personal Information</span>
        </div>
        <span className="text-green-500">Completed</span>
      </div>

      <div className="flex justify-between my-2">
        <div className="flex items-center space-x-2">
          <FiCheckCircle className="text-green-600" />
          <span className="text-green-600">Work Experience</span>
        </div>
        <span className="text-green-500">Completed</span>
      </div>

      <div className="flex justify-between my-2">
        <div className="flex items-center space-x-2">
          <FiCheckCircle className="text-yellow-600" />
          <span className="text-yellow-600">Skills</span>
        </div>
        <span className="text-yellow-500">Completed</span>
      </div>

      <div className="flex justify-between my-2">
        <div className="flex items-center space-x-2">
          <FiCheckCircle className="text-gray-600" />
          <span className="text-gray-600">Portfolio Items</span>
        </div>
        <span className="text-gray-500">Completed</span>
      </div>
    </div>
  );
}

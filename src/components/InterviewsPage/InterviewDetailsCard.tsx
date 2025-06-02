import { Interview } from "@/types";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

type InterviewDetailsCardProp = {
  interview: Interview;
};

const InterviewDetailsCard = ({ interview }: InterviewDetailsCardProp) => {
  const {
    applicant,
    date,
    duration,
    interviewer,
    location,
    status,
    time,
    type,
  } = interview;

  return (
    <div className="min-w-[600px] w-full border mx-auto overflow-hidden bg-white shadow-md  rounded-xl">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-blue-500 rounded-full">
              JV
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {applicant.name}
            </h2>
            <p className="text-sm text-gray-600">{applicant.title}</p>
            <div className="flex items-center mt-1">
              <span className="flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <div className="mr-2 bg-green-700 rounded-full size-2 " />
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="flex items-center mb-4 font-semibold text-gray-900">
          <Calendar strokeWidth={1.5} className="mr-2 text-blue-500" />
          Interview Details
        </h3>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                Date
              </p>
              <p className="text-sm font-medium">{date.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                Time
              </p>
              <p className="text-sm font-medium">{time.toString()}</p>
              <p className="text-sm text-gray-500">{duration}</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                Type
              </p>
              <p className="text-sm font-medium">{type}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
              Location
            </p>
            <p className="flex items-center text-sm font-medium">
              <MapPin strokeWidth={1.5} className="mr-2 text-gray-500 size-5" />
              {location}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-gray-200">
        <h3 className="flex items-center mb-4 font-semibold text-gray-900">
          <Mail className="mr-2 text-blue-500 size-5" />
          Contact Info
        </h3>

        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Mail className="mr-2 text-gray-400 size-5" />
            <a
              href={`mailto:${applicant.email}`}
              className="text-blue-600 hover:underline"
            >
              {applicant.email}
            </a>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="mr-2 text-gray-400 size-5" />
            <a href="tel:09708075290" className="text-gray-700">
              {applicant.contactNumber}
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-gray-200">
        <h3 className="mb-4 font-semibold text-gray-900">Interviewer</h3>
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-purple-500 rounded-full">
              SJ
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">{interviewer.name}</p>
            <p className="text-xs text-gray-500">{interviewer.title}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-6 py-4 text-sm bg-gray-50">
        <button className="px-4 py-2 font-medium text-gray-700 transition-colors border border-gray-300 rounded-md hover:bg-gray-100">
          Reschedule
        </button>
        <div className="flex space-x-3">
          <button className="px-4 py-2 font-medium text-gray-700 transition-colors border border-gray-300 rounded-md hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
            Send Reminder
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetailsCard;

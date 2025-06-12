import { Calendar, Clock } from "lucide-react";
import React, { useState } from "react";

import { InterviewData } from "@/types";

interface DateTimeSelectorProps {
  setInterviewDetails: React.Dispatch<React.SetStateAction<InterviewData>>;
  date: string;
  time: string;
}

const DateAndTimePicker: React.FC<DateTimeSelectorProps> = ({
  setInterviewDetails,
  date,
  time,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(date);
  const [selectedTime, setSelectedTime] = useState<string>(time);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    setInterviewDetails((prev) => ({ ...prev, date: newDate }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setSelectedTime(newTime);
    setInterviewDetails((prev) => ({ ...prev, time: newTime }));
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <div className="flex items-center mb-4 items">
          <Calendar className="mr-3 text-blue-600 size-4" />
          <h3 className="text-sm font-semibold text-gray-800">Select Date</h3>
        </div>
        <div className="relative">
          <input
            type="date"
            value={selectedDate}
            required
            onChange={handleDateChange}
            className="w-full px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-200 border-2 border-blue-200 rounded-lg cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-300"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center mb-4">
          <Clock className="mr-3 text-indigo-600 size-4" />
          <h3 className="text-sm font-semibold text-gray-800 ">Select Time</h3>
        </div>
        <div className="relative">
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
            className="w-full px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-200 border-2 border-indigo-200 rounded-lg cursor-pointer focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 hover:border-indigo-300"
          />
        </div>
      </div>
    </div>
  );
};

export default DateAndTimePicker;

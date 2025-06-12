import { Calendar, Edit3 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModifyInterview, useSetInterview } from "@/services/mutations";
import { Application, InterviewData } from "@/types";

import { SelectComponent } from "../SelectComponent";
import DateAndTimePicker from "./DateAndTimePicker";

const INTERVIEW_TYPE = ["On-site", "Video Call"];

type SetInterviewModalProps = {
  applicant?: Application;
  onClick?: () => void;
  isEditing?: boolean;
  applicationData?: InterviewData;
};

export default function SetInterviewModal({
  isEditing,
  applicationData,
  applicant,
  onClick,
}: SetInterviewModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: postInterview, isPending } = useSetInterview();
  const { mutate: modifyInterview } = useModifyInterview();

  const [interviewDetails, setInterviewDetails] = useState<InterviewData>(
    applicationData ?? {
      applicantId: applicant && applicant.applicant.applicantId, // temporary solution, fix later
      jobId: applicant && applicant.job.jobId,
      interviewerName: "",
      interviewerTitle: "",
      status: "Scheduled",
      duration: "",
      date: "",
      time: "",
      type: "",
      location: "",
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInterviewDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const {
      interviewerName,
      interviewerTitle,
      duration,
      date,
      time,
      type,
      location,
    } = interviewDetails;

    if (
      !interviewerName ||
      !interviewerTitle ||
      !duration ||
      !date ||
      !time ||
      !type ||
      !location
    ) {
      alert("Missing field");
      return;
    }

    if (isEditing) {
      modifyInterview(interviewDetails);
    } else {
      postInterview(interviewDetails);
    }

    if (onClick) {
      onClick(); // for setting the application status to -> Interview
    }

    setInterviewDetails(() => ({
      applicantId: "",
      jobId: 0,
      interviewerName: "",
      interviewerTitle: "",
      status: "",
      duration: "",
      date: "",
      time: "",
      type: "",
      location: "",
    }));
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {isEditing ? (
          <button className="p-2 text-gray-400 transition-colors rounded-lg hover:text-white hover:bg-gray-700/50">
            <Edit3 className="w-4 h-4" />
          </button>
        ) : (
          <button className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded">
            <Calendar className="size-4" />
            <span>Interview</span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Interview Schedule</DialogTitle>
          <DialogDescription>
            Provide the interview details below. Applicants will be notified
            once you save the schedule.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="interviewerName">Interviewer Name</Label>
            <Input
              className="text-base"
              id="interviewerName"
              name="interviewerName"
              required
              placeholder="Jonel Villaver"
              value={interviewDetails.interviewerName}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="interviewerName">Interviewer Title</Label>
            <Input
              className="text-base"
              id="interviewerTitle"
              required
              name="interviewerTitle"
              placeholder="Frontend Developer"
              value={interviewDetails.interviewerTitle}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid gap-3">
            <DateAndTimePicker
              date={interviewDetails.date}
              time={interviewDetails.time}
              setInterviewDetails={setInterviewDetails}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="duration">Duration</Label>
            <Input
              className="text-base"
              id="duration"
              required
              name="duration"
              placeholder="3 hours"
              value={interviewDetails.duration}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid gap-3">
          <Label>Type</Label>
          <SelectComponent
            options={INTERVIEW_TYPE}
            defaultValue="On-site"
            className="w-full"
            setFn={(value) =>
              setInterviewDetails((prev) => ({ ...prev, type: value }))
            }
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="location">
            Location{" "}
            <span className="font-light text-gray-600">
              (if online, provide the meeting link)
            </span>
          </Label>
          <Input
            className="text-base"
            id="location"
            required
            name="location"
            placeholder="401 Main Tower, BGC, Taguig"
            value={interviewDetails.location}
            onChange={handleInputChange}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          {isEditing ? (
            <Button disabled={isPending} type="submit" onClick={handleSubmit}>
              Send Invitation
            </Button>
          ) : (
            <Button disabled={isPending} type="submit" onClick={handleSubmit}>
              Send Invitation
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

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
import { Application, InterviewData } from "@/types";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DateAndTimePicker from "./DateAndTimePicker";
import { SelectComponent } from "../SelectComponent";
import { useSetInterview } from "@/services/mutations";

const INTERVIEW_TYPE = ["On-site", "Online, through Zoom meeting"];

type SetInterviewModalProps = {
  applicant: Application;
  onClick: () => void;
};

export default function SetInterviewModal({
  applicant,
  onClick,
}: SetInterviewModalProps) {
  const { mutate: postInterview, isPending, isError } = useSetInterview();

  const [interviewDetails, setInterviewDetails] = useState<InterviewData>({
    applicantId: applicant.applicant.applicantId,
    jobId: applicant.job.jobId,
    interviewerName: "",
    interviewerTitle: "",
    status: "Scheduled",
    duration: "",
    date: "",
    time: "",
    type: "",
    location: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInterviewDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    postInterview(interviewDetails);
    onClick(); // for setting the application status to -> Interview
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
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 border rounded">
          <Calendar className="size-4" />
          <span>Interview</span>
        </button>
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
          <Button disabled={isPending} type="submit" onClick={handleSubmit}>
            Send Invitation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

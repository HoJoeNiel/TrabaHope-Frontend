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
import { Experience } from "@/types";
import { Calendar, Edit, Plus } from "lucide-react";
import { useState } from "react";
import { useAddExperience, useEditExperience } from "@/services/mutations";
import { Textarea } from "../ui/textarea";
import { useLoggedInUserStore } from "@/stores/useLoggedInUserStore";
import { useToggle } from "@/hooks/useToggle";

type AddWorkExperienceModalProps = {
  experience?: Experience;
};

export default function AddWorkExperienceModal({
  experience,
}: AddWorkExperienceModalProps) {
  const { value: open, toggle } = useToggle();
  const { mutate: addExperience, isPending } = useAddExperience();
  const { mutate: editExperience } = useEditExperience();
  const user = useLoggedInUserStore((state) => state.user);

  if (!user) throw new Error("No user authenticated.");

  const [experienceDetails, setExperienceDetails] = useState<Experience>(
    experience ?? {
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    }
  );

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setExperienceDetails((prev) => ({ ...prev, startDate: newDate }));
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setExperienceDetails((prev) => ({ ...prev, endDate: newDate }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExperienceDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (experience) {
      editExperience({ ...experienceDetails, applicantId: user.id });
    } else {
      addExperience({ ...experienceDetails, applicantId: user.id });
    }

    setExperienceDetails({
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    toggle();
  };

  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogTrigger asChild>
        {experience ? (
          <button className="text-cyan-400 hover:text-cyan-300">
            <Edit className="w-5 h-5" />
          </button>
        ) : (
          <button className="flex items-center gap-2 px-4 py-2 mt-6 transition-colors border rounded-lg text-cyan-400 hover:text-cyan-300 border-cyan-600 hover:border-cyan-500">
            <Plus className="w-4 h-4" />
            Add Experience
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Past Job Experience</DialogTitle>
          <DialogDescription>
            Fill out the details of your previous job. This information will
            appear on your profile once saved.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              className="text-base"
              id="jobTitle"
              name="jobTitle"
              placeholder="Frontend Developer"
              value={experienceDetails.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              className="text-base"
              id="companyName"
              name="companyName"
              placeholder="National University - Philippines"
              value={experienceDetails.companyName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <div className="flex items-center mb-4 items">
              <Calendar className="mr-3 text-blue-600 size-4" />
              <h3 className="text-sm font-semibold text-gray-800">
                Start Date
              </h3>
            </div>
            <div className="relative">
              <input
                type="date"
                value={experienceDetails.startDate}
                onChange={handleStartDateChange}
                className="w-full px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-200 border-2 border-blue-200 rounded-lg cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-300"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4 items">
              <Calendar className="mr-3 text-blue-600 size-4" />
              <h3 className="text-sm font-semibold text-gray-800">End Date</h3>
            </div>
            <div className="relative">
              <input
                type="date"
                value={experienceDetails.endDate}
                onChange={handleEndDateChange}
                className="w-full px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-200 border-2 border-blue-200 rounded-lg cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-300"
              />
            </div>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="location">Location</Label>
            <Input
              className="text-base"
              id="location"
              name="location"
              placeholder="BGC, Taguig"
              value={experienceDetails.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="w-full text-base"
              value={experienceDetails.description}
              id="description"
              name="description"
              onChange={(e) =>
                setExperienceDetails((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button disabled={isPending} type="submit" onClick={handleSubmit}>
            Add Experience
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

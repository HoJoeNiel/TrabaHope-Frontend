import { Info, Plus, Trash } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { memo } from "react";

type SkillsAndKeywordsInputProps = {
  tag: string;
  tags: string[];
  setTag: (value: string) => void;
  setTags: (value: string[]) => void;
};

function SkillsAndKeywordsInput({
  tag,
  setTags,
  tags,
  setTag,
}: SkillsAndKeywordsInputProps) {
  const handleAddtag = () => {
    if (tag.trim() !== "" && !tags.includes(tag.trim())) {
      setTags([...tags, tag.trim()]);
      setTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-start justify-between mb-1">
        <Label className="block text-sm font-medium text-gray-700">
          Skills & Keywords
        </Label>
        <div className="flex items-center text-xs text-gray-500">
          <Info className="h-4 w-4 mr-1" />
          <span>
            Adding relevant skills helps our AI match the right candidates to
            your position
          </span>
        </div>
      </div>
      <div className="flex">
        <Input
          type="text"
          placeholder="e.g. React, TypeScript, Tailwind"
          className="block flex-grow rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border text-sm py-2 px-3"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddtag();
            }
          }}
        />
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleAddtag}
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((t, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
          >
            {t}
            <button
              type="button"
              onClick={() => handleRemoveTag(t)}
              className="text-blue-600 hover:text-blue-800"
            >
              <Trash size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(SkillsAndKeywordsInput)

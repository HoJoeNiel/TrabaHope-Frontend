import { Info, Plus, Trash } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { memo } from "react";

type SkillsAndKeywordsInputProps = {
  tag: string;
  tags: string[];
  defaultTags?: string[];
  setTag: (value: string) => void;
  setTags: (value: string[]) => void;
};

function SkillsAndKeywordsInput({
  tag,
  setTags,
  tags,
  defaultTags,
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
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow">
      <div className="flex items-start justify-between mb-1">
        <Label className="block text-sm font-medium text-gray-200">
          Skills & Keywords
        </Label>
        <div className="flex items-center text-xs text-gray-300">
          <Info className="w-4 h-4 mr-1" />
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
          className="flex-grow block px-3 py-2 text-sm text-white bg-gray-700 border border-gray-400 shadow-sm rounded-l-md focus:border-indigo-500 focus:ring-indigo-500"
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
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent shadow-sm rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleAddtag}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {(defaultTags ?? tags).map((t, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
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

export default memo(SkillsAndKeywordsInput);

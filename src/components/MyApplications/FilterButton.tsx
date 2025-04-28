interface FilterButtonProps {
  status: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function FilterButton({
  status,
  onClick,
  isSelected,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium ${
        isSelected ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </button>
  );
}

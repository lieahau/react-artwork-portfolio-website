import { IoArrowBack } from 'react-icons/io5';

interface BackButtonProps {
  onBack: () => void;
}

function BackButton({ onBack }: BackButtonProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-black transition"
      >
        <IoArrowBack className="text-lg" />
        <span className="font-medium">Back</span>
      </button>
    </div>
  );
}

export default BackButton;

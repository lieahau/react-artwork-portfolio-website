import { IoArrowBack } from 'react-icons/io5';

interface BackButtonProps {
  onBack: () => void;
}

export default function BackButton({ onBack }: BackButtonProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className='
          transition
          flex items-center gap-2
          text-gray-600 dark:text-white
          hover:text-black dark:hover:text-gray-300
        '
      >
        <IoArrowBack className='text-lg' />
        <span className='font-medium'>Back</span>
      </button>
    </div>
  );
}

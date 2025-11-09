import { IoArrowBack } from 'react-icons/io5';

interface BackButtonProps {
  onBack: () => void;
}

function BackButton({ onBack }: BackButtonProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className='transition flex items-center gap-2 hover:text-black text-gray-600 dark:text-white dark:hover:text-gray-300'
      >
        <IoArrowBack className='text-lg' />
        <span className='font-medium'>Back</span>
      </button>
    </div>
  );
}

export default BackButton;

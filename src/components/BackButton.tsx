import { IoArrowBack } from 'react-icons/io5';

interface BackButtonProps {
  onBack: () => void;
  label: string;
}

export default function BackButton({ onBack, label }: BackButtonProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className='
          transition
          flex items-center gap-2
          hover:opacity-80
        '
      >
        <IoArrowBack className='text-lg' />
        <span className='font-medium'>{label}</span>
      </button>
    </div>
  );
}

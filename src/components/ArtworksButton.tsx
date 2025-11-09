import { motion } from 'framer-motion';

interface ArtworksButtonProps {
  onNavigate: () => void;
}

export default function ArtworksButton({ onNavigate }: ArtworksButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onNavigate}
      className='
        transition
        mt-4 px-6 py-3
        rounded-full
        text-white text-sm font-medium
        shadow
        hover:bg-gray-800
        bg-black
      '
    >
      My Artworks
    </motion.button>
  );
}

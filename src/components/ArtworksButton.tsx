import { motion } from 'framer-motion';
import { colorsConfig } from '../datas/colorConfig';

interface ArtworksButtonProps {
  onNavigate: () => void;
  label: string;
}

export default function ArtworksButton({
  onNavigate,
  label,
}: ArtworksButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onNavigate}
      className='
        transition
        mt-4 px-6 py-3
        rounded-full
        text-sm font-medium
        shadow
        hover:opacity-90
      '
      style={{
        backgroundColor: colorsConfig.artworksButtonBackground,
        color: colorsConfig.artworksButtonTextColor,
      }}
    >
      {label}
    </motion.button>
  );
}

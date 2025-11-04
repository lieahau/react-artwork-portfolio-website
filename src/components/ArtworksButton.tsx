import { motion } from 'framer-motion';

interface ArtworksButtonProps {
  onNavigate: () => void;
}

function ArtworksButton({ onNavigate }: ArtworksButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onNavigate}
      className="mt-4 px-6 py-3 bg-black text-white rounded-full text-sm font-medium shadow hover:bg-gray-800 transition"
    >
      My Artworks
    </motion.button>
  );
}

export default ArtworksButton;

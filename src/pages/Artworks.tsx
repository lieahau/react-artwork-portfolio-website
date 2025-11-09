import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import OtherArts from '../components/OtherArts';
import CategoryNavbar from '../components/CategoryNavbar';
import Gallery from '../components/Gallery';

interface ArtworksProps {
  onBack: () => void;
}

export default function Artworks({ onBack }: ArtworksProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-stretch m-6"
    >
      {/* Left Column */}
      <div className="flex flex-col justify-between">
        <div className="mb-4 md:mb-0">
          <BackButton onBack={onBack} />
        </div>
        <div>
          <CategoryNavbar />
        </div>
        <div className="hidden md:block">
          <OtherArts />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col overflow-hidden">
        <Gallery />
        <div className="block md:hidden">
          <OtherArts />
        </div>
      </div>
    </motion.div>
  );
}

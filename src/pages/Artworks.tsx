import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import OtherArts from '../components/OtherArts';
import CategoryNavbar from '../components/CategoryNavbar';
import Gallery from '../components/Gallery';
import { useState } from 'react';
import type { Category } from '../types/category';

interface ArtworksProps {
  onBack: () => void;
}

export default function Artworks({ onBack }: ArtworksProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className='
        grid grid-cols-1 md:grid-cols-[1fr_2fr]
        gap-2 md:gap-8 items-stretch
        mx-6 my-4 md:my-6
      '
    >
      {/* Left Column */}
      <div className='flex flex-col justify-between'>
        <div className='mb-4 md:mb-0'>
          <BackButton onBack={onBack} />
        </div>

        <div>
          <CategoryNavbar
            activeCategory={activeCategory}
            onChangeCategory={setActiveCategory}
          />
        </div>

        <div className='hidden md:block'>
          <OtherArts />
        </div>
      </div>

      {/* Right Column */}
      <div className='flex flex-col overflow-hidden gap-2 md:gap-0'>
        <Gallery activeCategory={activeCategory} />
        <div className='block md:hidden'>
          <OtherArts />
        </div>
      </div>
    </motion.div>
  );
}

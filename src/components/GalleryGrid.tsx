import { AnimatePresence, motion } from 'framer-motion';
import type { Art, Category } from '../types/interface';
import { colorsConfig } from '../datas/colorConfig';

const categoryVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? -80 : direction < 0 ? 80 : 0,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? 80 : direction < 0 ? -80 : 0,
    opacity: 0,
  }),
};

interface GalleryGridProps {
  activeCategory: Category;
  emptyCategoryText: string;
  currentItems: Art[];
  currentPage: number;
  direction: number;
  startIndex: number;
  onSelect: (filteredIndex: number) => void;
}

export function GalleryGrid({
  activeCategory,
  emptyCategoryText,
  currentItems,
  currentPage,
  direction,
  startIndex,
  onSelect,
}: GalleryGridProps) {
  return (
    <div className='relative flex-grow overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeCategory}
          variants={categoryVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className='w-full h-full'
        >
          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.75, ease: 'easeInOut' }}
              className='
                grid
                gap-3
                w-full h-full
                grid-cols-1 grid-rows-1
                md:grid-cols-3 md:grid-rows-3
                flex items-center justify-center
              '
            >
              {currentItems.length > 0 ? (
                currentItems.map((art, index) => (
                  <div
                    key={startIndex + index}
                    onClick={() => onSelect(startIndex + index)}
                    className='
                      w-full h-full
                      overflow-hidden
                      aspect-square rounded-lg
                      mx-auto
                      cursor-pointer
                      max-w-[85%] md:max-w-none
                      max-h-[85%] md:max-h-none
                    '
                    style={{
                      backgroundColor: colorsConfig.artworkGridBackground,
                    }}
                  >
                    <img
                      src={art.src}
                      alt={art.name || `Artwork ${startIndex + index + 1}`}
                      className='w-full h-full object-contain hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                ))
              ) : (
                <div className='col-span-1 md:col-span-3 text-center'>
                  {emptyCategoryText}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

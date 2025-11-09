import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const artworks = [
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
  '/uploads/artwork1.png',
];

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [direction, setDirection] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Detect screen size and adjust items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // mobile: 1 image per page
      } else {
        setItemsPerPage(9); // desktop: 9 images per page
      }
      setCurrentPage(1); // reset to first page when layout changes
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(artworks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = artworks.slice(startIndex, startIndex + itemsPerPage);

  // Motion variants for slide transition
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const handleNextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % artworks.length);
  };

  const handlePrevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + artworks.length) % artworks.length);
  };

  const closePopup = () => setSelectedIndex(null);

  return (
    <div className='flex flex-col h-full p-0 overflow-hidden'>
      {/* Grid */}
      <div className='relative flex-grow overflow-hidden'>
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
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
            {currentItems.map((src, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(startIndex + index)}
                className='
                  w-full h-full
                  overflow-hidden
                  aspect-square rounded-lg
                  bg-gray-100 dark:bg-gray-500
                  mx-auto
                  cursor-pointer
                  max-w-[85%] md:max-w-none
                  max-h-[85%] md:max-h-none
                '
              >
                <img
                  src={src}
                  alt={`Artwork ${index + 1}`}
                  className='w-full h-full object-contain hover:scale-105 transition-transform duration-300'
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center mt-0 md:mt-3 space-x-4 text-gray-700'>
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className='
            text-lg font-medium
            disabled:opacity-40
            hover:scale-110 transition-transform
            text-black dark:text-white
          '
        >
          &lt;
        </button>

        <span className='text-sm font-medium text-black dark:text-white'>
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className='
            text-lg font-medium
            disabled:opacity-40
            hover:scale-110 transition-transform
            text-black dark:text-white
          '
        >
          &gt;
        </button>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <div className='relative w-[90%] md:w-[70%]'>
              <img
                src={artworks[selectedIndex]}
                alt='Selected artwork'
                className='w-full h-auto max-h-[85vh] object-contain rounded-lg'
                onClick={e => e.stopPropagation()}
              />

              <button
                onClick={e => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className='
                  absolute left-0 md:left-[-3rem] top-1/2 -translate-y-1/2
                  text-white text-3xl md:text-4xl font-bold
                  opacity-50 md:opacity-100
                  hover:scale-120 transition-transform
                  select-none
                '
              >
                &lt;
              </button>

              <button
                onClick={e => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className='
                  absolute right-0 md:right-[-3rem] top-1/2 -translate-y-1/2
                  text-white text-3xl md:text-4xl font-bold
                  opacity-50 md:opacity-100
                  hover:scale-120 transition-transform
                  select-none
                '
              >
                &gt;
              </button>

              <button
                onClick={e => {
                  e.stopPropagation();
                  closePopup();
                }}
                className='
                  absolute top-[-1rem] right-[-0.5rem]
                  text-white text-xl md:text-2xl font-bold
                  opacity-50 md:opacity-100
                  hover:scale-120 transition-transform
                  select-none
                '
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

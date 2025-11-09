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

  return (
    <div className="flex flex-col h-full p-0 overflow-hidden">
      {/* Grid */}
      <div className="relative flex-grow overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            className="
              grid
              gap-3
              w-full h-full
              grid-cols-1 grid-rows-1
              md:grid-cols-3 md:grid-rows-3
              flex items-center justify-center
            "
          >
            {currentItems.map((src, index) => (
              <div
                key={index}
                className="
                  w-full h-full
                  overflow-hidden
                  aspect-square rounded-lg
                  bg-gray-100 dark:bg-gray-500
                  mx-auto
                  max-w-[85%] md:max-w-none
                  max-h-[85%] md:max-h-none
                "
              >
                <img
                  src={src}
                  alt={`Artwork ${index + 1}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-0 md:mt-3 space-x-4 text-gray-700">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="text-lg font-medium disabled:opacity-40 hover:scale-110 transition-transform text-black dark:text-white"
        >
          &lt;
        </button>

        <span className="text-sm font-medium text-black dark:text-white">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="text-lg font-medium disabled:opacity-40 hover:scale-110 transition-transform text-black dark:text-white"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

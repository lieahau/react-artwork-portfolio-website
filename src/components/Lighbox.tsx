import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { Art } from '../types/interface';

interface LightboxProps {
  items: Art[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  items,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const [popupDirection, setPopupDirection] = useState(0);

  if (selectedIndex === null || !items[selectedIndex]) return null;

  const selected = items[selectedIndex];

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div
            className='
              relative inline-flex 
              max-h-[90vh] md:max-h-[70vh]
              max-w-[90vw] md:max-w-[70vw]
            '
          >
            <AnimatePresence mode='wait' initial={false} custom={selectedIndex}>
              <motion.img
                key={selectedIndex}
                src={selected.src}
                alt={selected.name || `Artwork ${selectedIndex}`}
                className='
                  w-auto h-auto
                  max-h-[85vh] max-w-full
                  object-contain rounded-lg
                '
                onClick={e => e.stopPropagation()}
                custom={popupDirection}
                initial={{
                  x: popupDirection > 0 ? -100 : 100,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: popupDirection > 0 ? 100 : -100,
                  opacity: 0,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </AnimatePresence>

            {/* Prev */}
            <button
              onClick={e => {
                e.stopPropagation();
                setPopupDirection(-1);
                onPrev();
              }}
              className='
                absolute left-0.5 md:left-[-1rem] top-1/2
                -translate-x-full -translate-y-1/2
                text-white text-3xl md:text-4xl font-bold
                opacity-50 md:opacity-100
                hover:scale-120 transition-transform duration-200
                select-none
              '
            >
              &lt;
            </button>

            {/* Next */}
            <button
              onClick={e => {
                e.stopPropagation();
                setPopupDirection(1);
                onNext();
              }}
              className='
                absolute right-0.5 md:right-[-1rem] top-1/2
                translate-x-full -translate-y-1/2
                text-white text-3xl md:text-4xl font-bold
                opacity-50 md:opacity-100
                hover:scale-120 transition-transform duration-200
                select-none
              '
            >
              &gt;
            </button>

            {/* Close */}
            <button
              onClick={e => {
                e.stopPropagation();
                onClose();
              }}
              className='
                absolute -top-4 -right-4
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
  );
}

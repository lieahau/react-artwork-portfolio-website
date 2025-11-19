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
          <div className='relative w-[90%] md:w-[70%]'>
            <AnimatePresence mode='wait' initial={false} custom={selectedIndex}>
              <motion.img
                key={selectedIndex}
                src={selected.src}
                alt='Selected artwork'
                className='w-full h-auto max-h-[85vh] object-contain rounded-lg'
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
                absolute left-0 md:left-[-3rem] top-1/2 -translate-y-1/2
                text-white text-3xl md:text-4xl font-bold
                opacity-50 md:opacity-100
                hover:scale-120 transition-all duration-200
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
                absolute right-0 md:right-[-3rem] top-1/2 -translate-y-1/2
                text-white text-3xl md:text-4xl font-bold
                opacity-50 md:opacity-100
                hover:scale-120 transition-all duration-200
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
  );
}

import { useEffect, useState } from 'react';

const getInitialItemsPerPage = () =>
  typeof window === 'undefined' ? 9 : window.innerWidth < 768 ? 1 : 9;

export function useResponsiveItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(getInitialItemsPerPage);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastMode: 'mobile' | 'desktop' =
      window.innerWidth < 768 ? 'mobile' : 'desktop';
    let frame: number | null = null;

    const handleResize = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const currentMode: 'mobile' | 'desktop' =
          window.innerWidth < 768 ? 'mobile' : 'desktop';

        if (currentMode !== lastMode) {
          setItemsPerPage(currentMode === 'mobile' ? 1 : 9);
          lastMode = currentMode;
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return itemsPerPage;
}

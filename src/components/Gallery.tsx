import { useEffect, useMemo, useState } from 'react';
import { useResponsiveItemsPerPage } from '../hooks/useResponsiveItemsPerPage';
import { GalleryGrid } from './GalleryGrid';
import { GalleryPagination } from './GalleryPagination';
import { Lightbox } from './Lighbox';
import type { Category } from '../types/interface';
import { artworksData } from '../datas/artworkData';

interface GalleryProps {
  activeCategory: Category;
}

export default function Gallery({ activeCategory }: GalleryProps) {
  const itemsPerPage = useResponsiveItemsPerPage();
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Reset when category or layout changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedIndex(null);
    setDirection(0);
  }, [activeCategory, itemsPerPage]);

  // Filtered artworks
  const filteredArtworks = useMemo(
    () =>
      activeCategory === 'All'
        ? artworksData
        : artworksData.filter(a => a.category === activeCategory),
    [activeCategory]
  );

  const totalPages = Math.ceil(filteredArtworks.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredArtworks.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  const handleNextImage = () => {
    if (filteredArtworks.length === 0) return;
    setSelectedIndex(prev =>
      prev === null ? 0 : (prev + 1) % filteredArtworks.length
    );
  };

  const handlePrevImage = () => {
    if (filteredArtworks.length === 0) return;
    setSelectedIndex(prev =>
      prev === null
        ? 0
        : (prev - 1 + filteredArtworks.length) % filteredArtworks.length
    );
  };

  const closePopup = () => setSelectedIndex(null);

  return (
    <div className='flex flex-col h-full p-0 overflow-hidden min-h-[40vh] md:min-h-[67vh]'>
      <GalleryGrid
        activeCategory={activeCategory}
        currentItems={currentItems}
        currentPage={currentPage}
        direction={direction}
        startIndex={startIndex}
        onSelect={setSelectedIndex}
      />

      <GalleryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
      />

      <Lightbox
        items={filteredArtworks}
        selectedIndex={selectedIndex}
        onClose={closePopup}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}

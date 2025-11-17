interface GalleryPaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function GalleryPagination({
  currentPage,
  totalPages,
  onChange,
}: GalleryPaginationProps) {
  return (
    <div className='flex justify-center items-center mt-0 md:mt-3 space-x-4 text-gray-700'>
      <button
        onClick={() => onChange(Math.max(currentPage - 1, 1))}
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
        onClick={() => onChange(Math.min(currentPage + 1, totalPages))}
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
  );
}

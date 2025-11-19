import { categoriesData } from '../datas/artworkData';
import type { Category } from '../types/interface';

interface CategoryNavbarProps {
  activeCategory: Category;
  onChangeCategory: (category: Category) => void;
}

export default function CategoryNavbar({
  activeCategory,
  onChangeCategory,
}: CategoryNavbarProps) {
  return (
    <nav
      className='
        flex md:flex-col 
        overflow-x-auto md:overflow-y-auto
        gap-2 md:gap-1
        scrollbar-hide
        justify-start md:justify-center-safe
        px-2 md:px-0 md:py-2
        md:max-h-[35vh]
        scrollbar
      '
    >
      {categoriesData.map(cat => (
        <button
          key={cat}
          onClick={() => onChangeCategory(cat)}
          className={`
            transition-all duration-200
            relative
            pb-1
            mb-1 md:mb-0
            whitespace-nowrap
            md:text-left
            text-sm md:text-lg
            ${
              activeCategory === cat
                ? `
                    font-bold
                    after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-[2px]
                    after:bg-blue-500 dark:after:bg-white
                  `
                : 'hover:opacity-80'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

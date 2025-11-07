import { useState } from 'react';

const categories = ['All', 'Digital', 'Traditional', 'Photography', 'Sculpture'];

function CategoryNavbar() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <nav className="flex md:flex-col overflow-x-auto lg:overflow-visible gap-2 w-full scrollbar-hide justify-center">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`
            transition-all duration-200
            relative
            pb-1
            whitespace-nowrap
            md:text-left
            text-sm md:text-lg
            text-black dark:text-white
            ${
              activeCategory === cat
                ? 'font-bold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 dark:after:bg-white'
                : 'hover:opacity-75'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default CategoryNavbar;

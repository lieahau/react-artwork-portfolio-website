import { useState } from 'react';

const categories = ['All', 'Digital', 'Traditional', 'Photography', 'Sculpture'];

function CategoryNavbar() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <nav className="flex md:flex-col overflow-x-auto lg:overflow-visible gap-2 w-full scrollbar-hide">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`
            ${activeCategory === cat ? 'font-bold' : ''}
            whitespace-nowrap
          `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default CategoryNavbar;

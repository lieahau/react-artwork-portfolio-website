import type { Category } from './category';

interface Artwork {
  src: string;
  category: Exclude<Category, 'All'>; // All is virtual
}

export const artworks: Artwork[] = [
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
  { src: '/uploads/artwork1.png', category: 'Digital' },
];

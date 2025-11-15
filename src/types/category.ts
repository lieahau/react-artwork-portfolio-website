export const categories = [
  'All',
  'Digital',
  'Traditional',
  'Photography',
  'Sculpture',
  'Doodles',
  '3D',
  'Animation',
  'Concept Art',
] as const;

export type Category = (typeof categories)[number];

import rawCmsColors from '../content/colors.json';
import type { Colors } from '../types/color';

const DEFAULT_COLORS: Colors = {
  background: '#000000',
  cardBackground: '#4b5563',
  textColor: '#ffffff',

  // WIP
  artworksButtonBackground: '#f97316',
  artworksButtonTextColor: '#000000',
  scrollbarTrackBackground: '#050509',
  scrollbarThumbBackground: '#27272f',
  scrollbarThumbBorder: '#050509',
  scrollbarThumbHover: '#3f3f4b',
  categoryLineColor: '#f97316',
  artworkGridEmptyBackground: '#050509',
};

// Remove empty strings ("" / "   ") so defaults can take over
function sanitizeCmsColors(raw: any): Partial<Colors> {
  const clean: Partial<Colors> = {};

  if (!raw || typeof raw !== 'object') return clean;

  (Object.keys(raw) as (keyof Colors)[]).forEach(key => {
    const value = raw[key];

    if (typeof value === 'string' && value.trim() !== '') {
      clean[key] = value;
    }
  });

  return clean;
}

const cmsColors = sanitizeCmsColors(rawCmsColors);

export const colorsConfig: Colors = {
  ...DEFAULT_COLORS,
  ...cmsColors,
};

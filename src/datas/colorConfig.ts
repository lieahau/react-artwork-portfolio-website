import rawCmsColors from '../content/colors.json';
import type { Colors } from '../types/color';

const DEFAULT_COLORS: Colors = {
  background: '#000000',
  cardBackground: '#4b5563',
  textColor: '#ffffff',
  artworksButtonBackground: '#000000',
  artworksButtonTextColor: '#ffffff',
  categoryLineColor: '#ffffff',
  scrollbarTrackBackground: '#2d3748',
  scrollbarThumbBackground: '#718096',
  scrollbarThumbBorder: '#2d3748',
  scrollbarThumbHover: '#8d8d8d',
  artworkGridBackground: '#6b7280',
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

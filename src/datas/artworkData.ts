import artworkCategoriesJson from '../content/artwork-categories.json';
import artworksJson from '../content/gallery.json';
import type { Art, ArtCategories, Arts, Category } from '../types/interface';

const categoriesJSON = artworkCategoriesJson as ArtCategories;
const artsJSON = artworksJson as Arts;

const cmsCategoryNames = categoriesJSON.categories.map(c => c.name);

export const categoriesData: Category[] = ['All', ...cmsCategoryNames];

export const artworksData: Art[] = artsJSON.gallery;

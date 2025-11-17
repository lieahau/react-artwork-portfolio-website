import type { Platform } from './platform';

export interface SiteSettings {
  title?: string;
  favicon?: string;
}

export interface HomeContent {
  role: string;
  name: string;
  bio: string;
  artworksButtonText: string;
  profilePicture: string;
  contactMeText: string;
  contacts: ContactItem[];
}

export interface ArtworksContent {
  backButtonText: string;
  viewMoreText: string;
  viewMoreLinks: ViewMoreLink[];
}

export interface ContactItem {
  label: string;
  url: string;
  platform: Platform;
  useCustomIcon?: boolean;
  customIconImage?: string;
}

export interface ViewMoreLink {
  label: string;
  url: string;
  platform: Platform;
  useCustomIcon?: boolean;
  customIconImage?: string;
}

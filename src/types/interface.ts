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
  platform: ContactPlatform;
  useCustomIcon?: boolean;
  customIconImage?: string;
}

export interface ViewMoreLink {
  label: string;
  url: string;
  platform: ViewMorePlatform;
  useCustomIcon?: boolean;
  customIconImage?: string;
}

type ContactPlatform =
  | 'instagram'
  | 'facebook'
  | 'discord'
  | 'youtube'
  | 'twitter'
  | 'telegram'
  | 'email'
  | 'website'
  | 'other';

type ViewMorePlatform =
  | 'patreon'
  | 'kofi'
  | 'gumroad'
  | 'artstation'
  | 'deviantart'
  | 'behance'
  | 'pixiv'
  | 'instagram'
  | 'twitter'
  | 'youtube'
  | 'website'
  | 'other';

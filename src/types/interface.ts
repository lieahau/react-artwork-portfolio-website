export interface HomeContent {
  role: string;
  name: string;
  bio: string;
  artworksButtonText: string;
  profilePicture: string;
  contactMeText: string;
  contacts: ContactItem[];
}

export interface ContactItem {
  label: string;
  url: string;
  platform: ContactPlatform;
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

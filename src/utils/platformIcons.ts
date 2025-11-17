import {
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaTelegramPlane,
  FaEnvelope,
  FaGlobe,
  FaPatreon,
  FaTwitch,
} from 'react-icons/fa';
import {
  SiKofi,
  SiGumroad,
  SiArtstation,
  SiDeviantart,
  SiBehance,
  SiPixiv,
} from 'react-icons/si';
import type { Platform } from '../types/platform';

export const platformIconMap: Partial<
  Record<Platform, React.ComponentType<{ className?: string }>>
> = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  discord: FaDiscord,
  youtube: FaYoutube,
  twitch: FaTwitch,
  twitter: FaTwitter,
  telegram: FaTelegramPlane,
  email: FaEnvelope,
  website: FaGlobe,

  patreon: FaPatreon,
  kofi: SiKofi,
  gumroad: SiGumroad,
  artstation: SiArtstation,
  deviantart: SiDeviantart,
  behance: SiBehance,
  pixiv: SiPixiv,

  // 'other' intentionally has no icon, will fall back to label text
};

import {
  FaPatreon,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from 'react-icons/fa';
import {
  SiKofi,
  SiGumroad,
  SiArtstation,
  SiDeviantart,
  SiBehance,
  SiPixiv,
} from 'react-icons/si';
import type { ViewMoreLink } from '../types/interface';

interface OtherArtsProps {
  text: string;
  links: ViewMoreLink[];
}

const platformIconMap: Partial<
  Record<ViewMoreLink['platform'], React.ComponentType<{ className?: string }>>
> = {
  patreon: FaPatreon,
  kofi: SiKofi,
  gumroad: SiGumroad,
  artstation: SiArtstation,
  deviantart: SiDeviantart,
  behance: SiBehance,
  pixiv: SiPixiv,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  website: FaGlobe,
};

export default function OtherArts({ text, links }: OtherArtsProps) {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-2 py-2 md:py-4 w-full'>
      <p className='text-sm md:text-base font-bold uppercase text-black dark:text-white'>
        {text}
      </p>

      <div className='flex space-x-5 text-xl'>
        {links.map(link => {
          const IconComponent = platformIconMap[link.platform];
          const showCustomIcon = link.useCustomIcon && !!link.customIconImage;

          return (
            <a
              key={link.label}
              href={link.url}
              aria-label={link.label}
              target='_blank'
              rel='noreferrer'
              className='hover:opacity-80 transition flex items-center justify-center'
            >
              {showCustomIcon ? (
                <img
                  src={link.customIconImage}
                  alt={link.label}
                  className='w-5 h-5 md:w-6 md:h-6 object-contain'
                />
              ) : IconComponent ? (
                <IconComponent className='w-5 h-5 md:w-6 md:h-6 dark:text-white dark:hover:text-black' />
              ) : (
                <span className='text-sm font-medium'>{link.label}</span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

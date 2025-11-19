import type { ContactItem } from '../types/interface';
import { platformIconMap } from '../utils/platformIcons';

interface ContactProps {
  title: string;
  contacts: ContactItem[];
}

export default function Contact({ title, contacts }: ContactProps) {
  return (
    <>
      {/* Contact Label */}
      <h2 className='text-base md:text-lg font-bold uppercase'>{title}</h2>

      {/* Social Media */}
      <div className='flex space-x-5 text-xl'>
        {contacts.map(contact => {
          const IconComponent = platformIconMap[contact.platform];

          const showCustomIcon =
            contact.useCustomIcon && !!contact.customIconImage;

          return (
            <a
              key={contact.label}
              href={contact.url}
              target='_blank'
              rel='noreferrer'
              className='hover:opacity-80 transition flex items-center justify-center'
              aria-label={contact.label}
            >
              {showCustomIcon ? (
                <img
                  src={contact.customIconImage}
                  alt={contact.label}
                  className='w-5 h-5 md:w-6 md:h-6 object-contain'
                />
              ) : IconComponent ? (
                <IconComponent className='w-5 h-5 md:w-6 md:h-6 dark:text-white dark:hover:text-black' />
              ) : (
                // Fallback: just show the label text if no icon available
                <span className='text-sm font-medium'>{contact.label}</span>
              )}
            </a>
          );
        })}
      </div>
    </>
  );
}

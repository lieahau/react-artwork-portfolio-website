import { motion } from 'framer-motion';
import About from '../components/About';
import ArtworksButton from '../components/ArtworksButton';
import ProfilePicture from '../components/ProfilePicture';
import Contact from '../components/Contact';
import homeContent from '../content/home.json';
import type { HomeContent } from '../types/interface';

interface HomeProps {
  onNavigate: () => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const {
    role,
    name,
    bio,
    artworksButtonText,
    profilePicture,
    contactMeText,
    contacts,
  } = homeContent as HomeContent;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 md:gap-8 items-center m-4 md:m-5'
    >
      {/* Left Column */}
      <div className='text-center md:text-left space-y-3 px-1 md:px-3'>
        <About role={role} name={name} bio={bio} />
        <ArtworksButton onNavigate={onNavigate} label={artworksButtonText} />
      </div>

      {/* Right Column */}
      <div className='flex flex-col items-center space-y-3 px-1 md:px-3'>
        <ProfilePicture src={profilePicture} />
        <Contact title={contactMeText} contacts={contacts} />
      </div>
    </motion.div>
  );
}

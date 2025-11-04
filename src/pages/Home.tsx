import { motion } from 'framer-motion';
import About from '../components/About';
import ArtworksButton from '../components/ArtworksButton';
import ProfilePicture from '../components/ProfilePicture';
import Contact from '../components/Contact';

interface HomeProps {
  onNavigate: () => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center m-6"
    >
      {/* Left Column */}
      <div className="text-center md:text-left space-y-3 px-3">
        <About />
        <ArtworksButton onNavigate={onNavigate} />
      </div>

      {/* Right Column */}
      <div className="text-center md:text-left flex flex-col items-center space-y-3 px-3">
        <ProfilePicture />
        <Contact />
      </div>
    </motion.div>
  );
}

export default Home;

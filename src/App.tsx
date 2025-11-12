import { useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import CardContainer from './components/CardContainer';
import Home from './pages/Home';
import Artworks from './pages/Artworks';

export default function App() {
  const [page, setPage] = useState<'home' | 'artworks'>('home');

  return (
    <LayoutGroup>
      <CardContainer size={page === 'artworks' ? 'large' : 'normal'}>
        <AnimatePresence mode='wait'>
          {page === 'home' && (
            <Home key='home' onNavigate={() => setPage('artworks')} />
          )}
          {page === 'artworks' && (
            <Artworks key='artworks' onBack={() => setPage('home')} />
          )}
        </AnimatePresence>
      </CardContainer>
    </LayoutGroup>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { ArtistCard } from './ArtistCard';
import { ArtistModal } from './ArtistModal';
import { artists } from './artists';
import { useArtistModal } from '@/hooks/useArtistModal';

export function ArtistsSection() {
  const { isOpen } = useArtistModal();

  return (
    <section id="artists" className="py-24 bg-gradient-to-b from-primary/95 to-primary/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center mb-12">
          Nossos Artistas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard 
              key={artist.id} 
              artist={artist}
            />
          ))}
        </div>
      </div>
      <ArtistModal />
    </section>
  );
}
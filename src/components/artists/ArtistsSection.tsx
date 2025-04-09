import { motion } from 'framer-motion';
import { ArtistCard } from './ArtistCard';
import { ArtistModal } from './ArtistModal';
import { artists } from './artists';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ArtistsSection() {
  return (
    <section
      id="artists"
      className="py-24 bg-gradient-to-b from-primary/95 to-primary/80"
    >
      <div className="container mx-auto max-w-screen-xl px-8">
        <h2 className="text-4xl font-display text-center mb-12">
          Nossos Artistas
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              variants={itemVariants}
              className="flex justify-center"
            >
              <ArtistCard artist={artist} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ArtistModal />
    </section>

  );
}
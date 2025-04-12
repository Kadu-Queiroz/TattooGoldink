import { motion } from 'framer-motion';
import { ArtistCard } from './ArtistCard';
import { ArtistModal } from './ArtistModal';
import { artists } from './artists';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ArtistsSection() {
  return (
    <section id="artists" className="pt-4 pb-28">
      <div className="mx-auto max-w-[1440px] px-6 section-container">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-16 tracking-wide text-white">
          Artistas
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {artists.map((artist) => (
            <motion.div key={artist.id} variants={itemVariants}>
              <ArtistCard artist={artist} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ArtistModal />
    </section>
  );
}
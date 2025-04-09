import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';
import type { Artist } from '@/types/artist';
import { useArtistModal } from '@/hooks/useArtistModal';

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const { openModal } = useArtistModal();

  const handleCardClick = () => openModal(artist);
  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${artist.name}`}
      className="relative bg-black/60 hover:bg-black/70 transition-all duration-300 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={artist.backgroundArt}
          alt={`Fundo artístico de ${artist.name}`}
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/fallback-tattoo.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      </div>

      <div className="flex flex-col justify-between p-6 h-full text-white text-center">
        {/* Foto do artista */}
        <div className="w-full h-56 overflow-hidden rounded-lg shadow-md mb-4">
          <img
            src={artist.photo}
            alt={`Foto de ${artist.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/default-avatar.jpg';
            }}
          />
        </div>

        {/* Nome e especialidade */}
        <header className="space-y-1">
          <h3 className="text-xl font-bold">{artist.name}</h3>
          {artist.specialty && (
            <p className="text-amber-400 text-xs uppercase tracking-wider">
              {artist.specialty}
            </p>
          )}
        </header>

        {/* Ações / Social */}
        <section className="mt-4 flex justify-center gap-4">
          <a
            href={`https://instagram.com/${artist.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSocialClick}
            className="text-amber-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label={`Instagram de ${artist.name}`}
          >
            <Instagram size={20} />
          </a>
          <a
            href={`https://wa.me/${artist.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSocialClick}
            className="text-amber-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label={`WhatsApp de ${artist.name}`}
          >
            <MessageCircle size={20} />
          </a>
        </section>
      </div>
    </motion.div>
  );
}
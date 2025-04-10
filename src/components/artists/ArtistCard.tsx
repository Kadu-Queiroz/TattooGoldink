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
  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) =>
    e.stopPropagation();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${artist.name}`}
      className="relative w-full max-w-[460px] 
        bg-black/70 backdrop-blur-md 
        rounded-2xl overflow-hidden shadow-xl cursor-pointer group
        border border-amber-500/30 hover:border-amber-400/60
        hover:shadow-[0_0_24px_rgba(255,191,0,0.3)]
        transition-all duration-300"
    >
      {/* Fundo artístico */}
      <div className="absolute inset-0 -z-10">
        <img
          src={artist.backgroundArt}
          alt={`Fundo artístico de ${artist.name}`}
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/fallback-tattoo.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-between px-6 pt-6 pb-4 text-white text-center flex-grow">
        {/* Imagem do artista */}
        <div className="w-full h-[360px] overflow-hidden rounded-xl shadow-inner mb-5">
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
        <header className="space-y-1 mb-4">
          <h3 className="text-2xl font-extrabold">{artist.name}</h3>
          {artist.specialty && (
            <p className="text-amber-400 text-sm uppercase tracking-wider">
              {artist.specialty}
            </p>
          )}
        </header>

        {/* Redes sociais */}
        <section className="mt-4 flex justify-center gap-4">
          <a
            href={`https://instagram.com/${artist.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSocialClick}
            className="text-amber-400 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            aria-label={`Instagram de ${artist.name}`}
          >
            <Instagram size={28} />
          </a>
          <a
            href={`https://wa.me/${artist.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSocialClick}
            className="text-amber-400 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            aria-label={`WhatsApp de ${artist.name}`}
          >
            <MessageCircle size={28} />
          </a>
        </section>
      </div>
    </motion.div>
  );
}
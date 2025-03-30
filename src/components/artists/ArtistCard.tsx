import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';
import type { Artist } from '@/types/artist';
import { useArtistModal } from '@/hooks/useArtistModal';

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const { openModal } = useArtistModal();

  const handleCardClick = () => {
    openModal(artist); 
  };

  const handleSocialLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300,
        damping: 15
      }}
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 h-full"
      onClick={handleCardClick}
      aria-label={`Ver detalhes de ${artist.name}`}
      role="button"
      tabIndex={0}
    >
      {/* Background artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src={artist.backgroundArt}
          alt={`Arte de fundo de ${artist.name}`}
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          draggable="false"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col items-center h-full justify-center">
        {/* Avatar container - adicionado aspect-square para garantir proporção */}
        <motion.div
          className="relative mb-4 aspect-square w-32"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-500 shadow-lg">
            <img
              src={artist.photo}
              alt={`Foto de ${artist.name}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={128}
              height={128}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/default-avatar.jpg';
              }}
            />
          </div>
        </motion.div>

        {/* Artist info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-1">
            {artist.name}
          </h3>
          
          {artist.specialty && (
            <p className="text-amber-400 text-sm mb-4">
              {artist.specialty}
            </p>
          )}
        </div>

        {/* Social links */}
        <div className="flex gap-4 mt-auto pt-4">
          <a
            href={`https://instagram.com/${artist.instagram}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-amber-400 hover:text-amber-300 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
            onClick={handleSocialLinkClick}
          >
            <Instagram size={20} />
          </a>
          <a
            href={`https://wa.me/${artist.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-amber-400 hover:text-amber-300 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
            onClick={handleSocialLinkClick}
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
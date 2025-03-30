import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';
import { Artist } from '@/types/artist';
import { useArtistModal } from '@/hooks/useModal';

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const { openModal } = useArtistModal();

  const handleSocialClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
      onClick={() => openModal(artist)}
      aria-label={`Ver detalhes de ${artist.name}`}
    >
      {/* Background art with low opacity */}
      <div className="absolute inset-0">
        <img
          src={artist.backgroundArt}
          alt={`Arte de fundo de ${artist.name}`}
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>

      {/* Artist content */}
      <div className="relative p-6 flex flex-col items-center">
        {/* Artist profile picture */}
        <img
          src={artist.photo}
          alt={`Foto de ${artist.name}`}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-amber-500"
          loading="lazy"
        />

        {/* Artist name */}
        <h3 className="text-xl font-semibold mb-2 text-center">
          {artist.name}
        </h3>

        {/* Social links */}
        <div className="flex gap-4">
          <a
            href={`https://instagram.com/${artist.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-600 transition-colors"
            onClick={handleSocialClick}
            aria-label={`Instagram de ${artist.name}`}
          >
            <Instagram size={24} />
          </a>
          <a
            href={`https://wa.me/${artist.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-600 transition-colors"
            onClick={handleSocialClick}
            aria-label={`WhatsApp de ${artist.name}`}
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Instagram,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useArtistModal } from '@/hooks/useArtistModal';
import { artists } from './artists';
import 'react-image-gallery/styles/css/image-gallery.css';

export function ArtistModal() {
  const { isOpen, selectedArtist, closeModal, openModal } = useArtistModal();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const currentIndex = useMemo(
    () => artists.findIndex((a) => a.id === selectedArtist?.id),
    [selectedArtist]
  );

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) openModal(artists[currentIndex - 1]);
  }, [currentIndex, openModal]);

  const goToNext = useCallback(() => {
    if (currentIndex < artists.length - 1) openModal(artists[currentIndex + 1]);
  }, [currentIndex, openModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') expandedImage ? setExpandedImage(null) : closeModal();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal, currentIndex, expandedImage, goToPrev, goToNext]);

  const galleryItems: ReactImageGalleryItem[] = useMemo(
    () =>
      selectedArtist?.portfolio.map((item) => ({
        original: item.url,
        thumbnail: item.url,
        description: item.title,
        originalAlt: `Tatuagem de ${selectedArtist.name} - ${item.title}`,
        thumbnailAlt: `Miniatura - ${item.title}`,
        originalClass: 'object-contain max-h-[60vh] w-auto mx-auto',
        thumbnailClass: 'object-cover h-20'
      })) || [],
    [selectedArtist]
  );

  if (!isOpen || !selectedArtist) return null;

  return (
    <AnimatePresence>
      <ModalOverlay closeModal={closeModal}>
        <ModalContent
          selectedArtist={selectedArtist}
          galleryItems={galleryItems}
          currentIndex={currentIndex}
          goToPrev={goToPrev}
          goToNext={goToNext}
          closeModal={closeModal}
          setExpandedImage={setExpandedImage}
        />
        {expandedImage && (
          <ExpandedImage imageUrl={expandedImage} onClose={() => setExpandedImage(null)} />
        )}
      </ModalOverlay>
    </AnimatePresence>
  );
}

const ModalOverlay = ({ children, closeModal }: { children: React.ReactNode; closeModal: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-layer-modal flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
    onClick={closeModal}
    role="dialog"
    aria-modal="true"
  >
    {children}
  </motion.div>
);

const ModalContent = ({
  selectedArtist,
  galleryItems,
  currentIndex,
  goToPrev,
  goToNext,
  closeModal,
  setExpandedImage
}: {
  selectedArtist: typeof artists[0];
  galleryItems: ReactImageGalleryItem[];
  currentIndex: number;
  goToPrev: () => void;
  goToNext: () => void;
  closeModal: () => void;
  setExpandedImage: (url: string | null) => void;
}) => (
  <motion.div
    initial={{ scale: 0.95, y: 40 }}
    animate={{ scale: 1, y: 0 }}
    exit={{ scale: 0.95, y: 40 }}
    transition={{ type: 'spring', damping: 25 }}
    className="relative bg-black/80 backdrop-blur-md text-white rounded-3xl w-full max-w-5xl h-[85vh] shadow-[0_0_50px_rgba(255,215,0,0.15)] border border-amber-600/30 overflow-hidden flex"
    onClick={(e) => e.stopPropagation()}
  >
    <CloseButton onClick={closeModal} />
    <NavigationButtons
      currentIndex={currentIndex}
      artistsLength={artists.length}
      goToPrev={goToPrev}
      goToNext={goToNext}
    />
    <div className="flex flex-col md:flex-row w-full h-full">
      <ArtistProfile artist={selectedArtist} />
      <Gallery
        items={galleryItems}
        portfolioLength={selectedArtist.portfolio.length}
        onImageClick={(e: any) => setExpandedImage(e.target?.src || null)}
      />
    </div>
  </motion.div>
);

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
    aria-label="Fechar modal"
  >
    <X size={24} />
  </button>
);

const NavigationButtons = ({ currentIndex, artistsLength, goToPrev, goToNext }: {
  currentIndex: number;
  artistsLength: number;
  goToPrev: () => void;
  goToNext: () => void;
}) => (
  <>
    {currentIndex > 0 && (
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
        aria-label="Artista anterior"
      >
        <ChevronLeft size={28} />
      </button>
    )}
    {currentIndex < artistsLength - 1 && (
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
        aria-label="Próximo artista"
      >
        <ChevronRight size={28} />
      </button>
    )}
  </>
);

const ArtistProfile = ({ artist }: { artist: typeof artists[0] }) => (
  <div className="md:w-[38%] p-6 md:p-8 bg-gradient-to-br from-black via-zinc-900 to-black border-r border-amber-500/20 overflow-y-auto custom-scrollbar">
    <div className="flex flex-col items-center text-center mb-6">
      <img
        src={artist.photo}
        alt={`Foto de ${artist.name}`}
        className="w-full max-w-xs rounded-xl object-cover border-4 border-amber-500/60 mb-4 shadow-lg"
      />
      <h2 className="text-3xl font-semibold text-amber-400">{artist.name}</h2>
      {artist.specialty && (
        <p className="text-amber-300 mt-1 text-sm uppercase tracking-wide">
          {artist.specialty}
        </p>
      )}
    </div>
    <div className="text-sm text-gray-300 mb-6 max-h-32 overflow-y-auto custom-scrollbar">
      <p>{artist.bio}</p>
    </div>
    <div className="flex justify-center gap-6 pt-4 border-t border-amber-600/20">
      <SocialLink
        href={`https://instagram.com/${artist.instagram}`}
        icon={<Instagram size={28} />}
        text={`@${artist.instagram}`}
      />
      <SocialLink
        href={`https://wa.me/${artist.whatsapp}`}
        icon={<MessageCircle size={28} />}
        text="WhatsApp"
      />
    </div>
  </div>
);

const SocialLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer nofollow"
    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition"
  >
    {icon}
    <span className="text-base">{text}</span>
  </a>
);

const Gallery = ({
  items,
  portfolioLength,
  onImageClick
}: {
  items: ReactImageGalleryItem[];
  portfolioLength: number;
  onImageClick: (e: any) => void;
}) => (
  <div className="md:w-[62%] bg-black/70 backdrop-blur-lg border-l border-amber-500/10 p-4 flex flex-col overflow-y-auto custom-scrollbar">
    <div className="flex-grow flex items-center justify-center">
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={true}
        showBullets={portfolioLength > 5}
        lazyLoad={true}
        additionalClass="artist-gallery w-full h-full"
        onClick={onImageClick}
      />
    </div>
  </div>
);

const ExpandedImage = ({ imageUrl, onClose }: { imageUrl: string; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-layer-expanded-image flex items-center justify-center bg-black/90 p-4"
    onClick={onClose}
  >
    <img
      src={imageUrl}
      alt="Tatuagem ampliada"
      className="max-w-full max-h-full object-contain"
    />
    <button
      onClick={onClose}
      className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
      aria-label="Fechar imagem ampliada"
    >
      <X size={24} />
    </button>
  </motion.div>
);
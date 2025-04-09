import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';
import { useEffect, useState } from 'react';
import { useArtistModal } from '@/hooks/useArtistModal';
import { artists } from './artists';
import 'react-image-gallery/styles/css/image-gallery.css';

export function ArtistModal() {
  const { isOpen, selectedArtist, closeModal, openModal } = useArtistModal();
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const currentIndex = artists.findIndex((a) => a.id === selectedArtist?.id);

  const goToPrev = () => {
    if (currentIndex > 0) openModal(artists[currentIndex - 1]);
  };

  const goToNext = () => {
    if (currentIndex < artists.length - 1) openModal(artists[currentIndex + 1]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') expandedImage ? setExpandedImage(null) : closeModal();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal, currentIndex, expandedImage]);

  if (!isOpen || !selectedArtist) return null;

  const galleryItems: ReactImageGalleryItem[] = selectedArtist.portfolio.map((item) => ({
    original: item.url,
    thumbnail: item.url,
    description: item.title,
    originalAlt: `Tatuagem de ${selectedArtist.name} - ${item.title}`,
    thumbnailAlt: `Miniatura - ${item.title}`,
    originalClass: 'cursor-pointer'
  }));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2"
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="artist-modal-title"
      >
        <motion.div
          initial={{ scale: 0.95, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 40 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl w-full max-w-6xl max-h-[90vh] shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-black/30 overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>

          {currentIndex > 0 && (
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {currentIndex < artists.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div className="flex flex-col md:flex-row h-full max-h-full">
            {/* Perfil do Artista */}
            <div className="md:w-[38%] p-6 md:p-8 bg-gray-800 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-700/60 scrollbar-track-transparent">
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={selectedArtist.photo}
                  alt={`Foto de ${selectedArtist.name}`}
                  className="w-full max-w-xs rounded-xl object-cover border-4 border-amber-500 mb-4 shadow-xl"
                />
                <h2 id="artist-modal-title" className="text-2xl font-bold">
                  {selectedArtist.name}
                </h2>
                {selectedArtist.specialty && (
                  <p className="text-amber-400 mt-1 text-sm uppercase tracking-wide">
                    {selectedArtist.specialty}
                  </p>
                )}
              </div>

              <div className="text-sm text-gray-300 mb-6 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700/50 scrollbar-track-transparent">
                <p>{selectedArtist.bio}</p>
              </div>

              <div className="flex justify-center gap-4 pt-4 border-t border-gray-600">
                <a
                  href={`https://instagram.com/${selectedArtist.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition"
                >
                  <Instagram size={20} />
                  <span>@{selectedArtist.instagram}</span>
                </a>
                <a
                  href={`https://wa.me/${selectedArtist.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition"
                >
                  <MessageCircle size={20} />
                  <span>Contato</span>
                </a>
              </div>
            </div>

            {/* Galeria */}
            <div className="md:w-[62%] bg-gray-900 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700/50 scrollbar-track-transparent">
              <ImageGallery
                items={galleryItems}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={true}
                showBullets={selectedArtist.portfolio.length > 5}
                lazyLoad={true}
                additionalClass="artist-gallery"
                onClick={(e: any) => setExpandedImage(e.target?.src || null)}
              />
            </div>
          </div>
        </motion.div>

        {/* Imagem ampliada */}
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setExpandedImage(null)}
          >
            <img
              src={expandedImage}
              alt="Tatuagem ampliada"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
              aria-label="Fechar imagem ampliada"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
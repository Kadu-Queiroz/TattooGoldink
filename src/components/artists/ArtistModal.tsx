import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, MessageCircle } from 'lucide-react';
import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';
import { useArtistModal } from '@/hooks/useArtistModal';
import type { Artist } from '@/types/artist';
import 'react-image-gallery/styles/css/image-gallery.css';

export function ArtistModal() {
  const { isOpen, selectedArtist, closeModal } = useArtistModal();

  if (!isOpen || !selectedArtist) return null;

  const galleryItems: ReactImageGalleryItem[] = selectedArtist.portfolio.map(
    (item: { url: string; title: string }) => ({
      original: item.url,
      thumbnail: item.url,
      description: item.title,
      loading: 'lazy' as const,
      originalAlt: `Tatuagem de ${selectedArtist.name} - ${item.title}`,
      thumbnailAlt: `Miniatura - ${item.title}`
    })
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="artist-modal-title"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative bg-white dark:bg-gray-900 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
              aria-label="Fechar modal"
            >
              <X size={24} className="text-gray-700 dark:text-gray-300" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 p-6 md:p-8 bg-gray-50 dark:bg-gray-800 flex flex-col">
                <div className="flex flex-col items-center text-center mb-6">
                  <img
                    src={selectedArtist.photo}
                    alt={`Foto de ${selectedArtist.name}`}
                    className="w-40 h-40 rounded-full object-cover border-4 border-amber-500 mb-4"
                    width={160}
                    height={160}
                    loading="lazy"
                  />
                  <h2 
                    id="artist-modal-title"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {selectedArtist.name}
                  </h2>
                  {selectedArtist.specialty && (
                    <p className="text-amber-600 dark:text-amber-400 mt-1">
                      {selectedArtist.specialty}
                    </p>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto">
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {selectedArtist.bio}
                  </p>
                </div>

                <div className="flex justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={`https://instagram.com/${selectedArtist.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                  >
                    <Instagram size={20} />
                    <span>@{selectedArtist.instagram}</span>
                  </a>
                  <a
                    href={`https://wa.me/${selectedArtist.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                  >
                    <MessageCircle size={20} />
                    <span>Contato</span>
                  </a>
                </div>
              </div>

              <div className="md:w-2/3 p-4 bg-white dark:bg-gray-900">
                <ImageGallery
                  items={galleryItems}
                  showPlayButton={false}
                  showFullscreenButton={true}
                  showNav={true}
                  showBullets={selectedArtist.portfolio.length > 5}
                  lazyLoad={true}
                  additionalClass="artist-gallery"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
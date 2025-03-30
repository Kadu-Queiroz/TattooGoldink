import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, MessageCircle } from 'lucide-react';
import ImageGallery from 'react-image-gallery';
import { useArtistModal } from '@/hooks/useModal';
import 'react-image-gallery/styles/css/image-gallery.css';

export function ArtistModal() {
  const { isOpen, selectedArtist, closeModal } = useArtistModal();

  if (!isOpen || !selectedArtist) return null;

  const images = selectedArtist.portfolio.map((item) => ({
    original: item.url,
    thumbnail: item.url,
    description: item.title,
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">{selectedArtist.name}</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X size={24} />
                  </button>
                </div>
                <img
                  src={selectedArtist.photo}
                  alt={selectedArtist.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-amber-500"
                />
                <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedArtist.bio}</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={`https://instagram.com/${selectedArtist.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-amber-500 hover:text-amber-600"
                  >
                    <Instagram size={24} />
                    <span>{selectedArtist.instagram}</span>
                  </a>
                  <a
                    href={`https://wa.me/${selectedArtist.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-amber-500 hover:text-amber-600"
                  >
                    <MessageCircle size={24} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <ImageGallery
                  items={images}
                  showPlayButton={false}
                  showFullscreenButton={true}
                  showNav={true}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
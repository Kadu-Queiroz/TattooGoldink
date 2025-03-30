import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { artists } from '../artists/artists';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64"
          >
            <div className="space-y-3">
              {artists.map((artist) => (
                <a
                  key={artist.id}
                  href={`https://wa.me/${artist.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-gray-800 dark:text-gray-200">{artist.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
}
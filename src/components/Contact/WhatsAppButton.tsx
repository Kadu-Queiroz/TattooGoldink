import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { artists } from '../artists/artists';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-40 whatsapp-button">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute bottom-20 right-0 w-72 bg-zinc-900 border border-amber-500 rounded-xl shadow-xl p-4"
          >
            <p className="text-sm text-gray-400 mb-4">
              Fale direto com um artista:
            </p>
            <div className="space-y-3">
              {artists.map((artist) => (
                <a
                  key={artist.id}
                  href={`https://wa.me/${artist.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 bg-black/30 hover:bg-black/50 rounded-lg transition-colors"
                >
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500"
                  />
                  <span className="text-white">{artist.name}</span>
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
        className="bg-green-500 text-white p-4 md:p-4 sm:p-3 rounded-full shadow-lg"
      >
        <MessageCircle size={24} className="w-6 h-6 md:w-6 md:h-6 sm:w-5 sm:h-5" />
      </motion.button>

    </div>
  );
}
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
  imageUrl: string;
  onClose: () => void;
};

function ArtistModalExpandedImage({ imageUrl, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-layer-expanded-image flex items-center justify-center bg-black/90 p-4 overflow-y-auto min-h-screen"
    >
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 100 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 100) onClose();
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[90vw] max-h-[85vh] w-full touch-pan-y"
      >
        {/* Botão de fechar alinhado com a imagem */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-amber-500 transition"
          aria-label="Fechar imagem ampliada"
        >
          <X size={24} className="text-amber-500" />
        </button>

        <img
          src={imageUrl}
          alt="Tatuagem ampliada"
          className="w-full h-auto object-contain rounded-lg"
          style={{ touchAction: 'manipulation' }}
        />
      </motion.div>
    </motion.div>
  );
}

export default ArtistModalExpandedImage;
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

type Props = {
    imageUrl: string;
    onClose: () => void;
};

function ArtistModalExpandedImage({ imageUrl, onClose }: Props) {
    return (
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
}
export default ArtistModalExpandedImage;
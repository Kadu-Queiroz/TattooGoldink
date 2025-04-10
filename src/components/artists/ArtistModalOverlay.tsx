import { motion } from 'framer-motion';

interface ModalOverlayProps {
    children: React.ReactNode;
    closeModal: () => void;
}

const ArtistModalOverlay = ({ children, closeModal }: ModalOverlayProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-layer-modal flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
    >
        {children}
    </motion.div>
);
export default ArtistModalOverlay;
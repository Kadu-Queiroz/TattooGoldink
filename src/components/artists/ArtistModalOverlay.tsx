import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ModalOverlayProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const ArtistModalOverlay = ({ children, closeModal }: ModalOverlayProps) => {
  useEffect(() => {
    // Adiciona classe no body para mobile (ex: esconder botão WhatsApp)
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden'; // trava o scroll do fundo

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = ''; // libera scroll ao fechar
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="artist-modal-title"
      className="fixed inset-0 z-layer-modal flex justify-center items-center bg-black/80 backdrop-blur-sm px-4 py-12 overflow-y-auto"
    >
      {/* impede o clique de fechar ao clicar dentro do modal */}
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
        {children}
      </div>
    </motion.div>
  );
};

export default ArtistModalOverlay;
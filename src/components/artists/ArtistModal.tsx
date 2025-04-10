import { AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useArtistModal } from '@/hooks/useArtistModal';
import { artists } from './artists';
import ModalOverlay from './ArtistModalOverlay';
import ModalContent from './ArtistModalContent';
import ExpandedImage from './ArtistModalExpandedImage';


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

  if (!isOpen || !selectedArtist) return null;

  return (
    <AnimatePresence>
      <ModalOverlay closeModal={closeModal}>
        <ModalContent
          selectedArtist={selectedArtist}
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

export default ArtistModal;
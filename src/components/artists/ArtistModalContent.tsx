import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { artists } from './artists'
import ArtistProfile from './ArtistProfile'
import ArtistModalGallery from './ArtistModalGallery'

interface ModalContentProps {
  selectedArtist: typeof artists[number]
  currentIndex: number
  goToPrev: () => void
  goToNext: () => void
  closeModal: () => void
  setExpandedImage: (url: string | null) => void
}

export default function ArtistModalContent({
  selectedArtist,
  closeModal,
  setExpandedImage
}: ModalContentProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, y: 40 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.95, y: 40 }}
      transition={{ type: 'spring', damping: 25 }}
      className="relative w-full max-w-5xl h-[85vh] text-white rounded-2xl overflow-hidden
                 border border-amber-500 shadow-[0_0_80px_rgba(0,0,0,0.7)]
                 backdrop-blur-xl bg-black/30 backdrop-saturate-150 backdrop-contrast-125"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Botão de fechar */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 
                 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
        aria-label="Fechar modal"
      >
        <X size={24} />
      </button>

      <div className="flex flex-col md:flex-row w-full h-full">
        <ArtistProfile artist={selectedArtist} />
        <ArtistModalGallery
          images={selectedArtist.portfolio.map((item) => item.url)}
          onImageClick={(src) => setExpandedImage(src)}
        />
      </div>
    </motion.div>
  )
}
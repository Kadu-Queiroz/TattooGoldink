import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ArtistModalGalleryProps {
  images: string[];
  onImageClick: (src: string) => void;
}

export default function ArtistModalGallery({ images, onImageClick }: ArtistModalGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="modal-gallery-container relative flex items-center justify-center">
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {images.map((src, index) => (
          <div key={index} className="keen-slider__slide flex justify-center items-center">
            <img
              src={src}
              alt={`Tattoo ${index + 1}`}
              className="max-h-[60vh] object-contain cursor-pointer rounded-lg shadow-md"
              onClick={() => onImageClick(src)}
            />
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            disabled={currentSlide === images.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}
    </div>
  );
}
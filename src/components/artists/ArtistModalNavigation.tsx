import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  currentIndex: number;
  artistsLength: number;
  goToPrev: () => void;
  goToNext: () => void;
};

export function ArtistModalNavigation({
  currentIndex,
  artistsLength,
  goToPrev,
  goToNext
}: Props) {
  return (
    <>
      {currentIndex > 0 && (
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
          aria-label="Artista anterior"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {currentIndex < artistsLength - 1 && (
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
          aria-label="Próximo artista"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </>
  );
}
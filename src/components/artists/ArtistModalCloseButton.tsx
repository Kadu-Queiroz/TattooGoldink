import { X } from 'lucide-react';

type Props = {
  onClick: () => void;
};

export function ArtistModalCloseButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:ring-2 hover:ring-amber-500 transition"
      aria-label="Fechar modal"
    >
      <X size={24} />
    </button>
  );
}

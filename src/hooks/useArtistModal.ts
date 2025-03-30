import type { Artist } from '@/types/artist';
import { create } from 'zustand';

interface ArtistModalStore {
  isOpen: boolean;
  selectedArtist: Artist | null;
  openModal: (artist: Artist) => void;
  closeModal: () => void;
}

export const useArtistModal = create<ArtistModalStore>((set) => ({
  isOpen: false,
  selectedArtist: null,
  openModal: (artist) => set({ isOpen: true, selectedArtist: artist }),
  closeModal: () => set({ isOpen: false, selectedArtist: null }),
}));
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { ArtistsSection } from '@/components/artists/ArtistsSection';
import { WhatsAppButton } from '@/components/Contact/WhatsAppButton';
import { VirtualTour } from '@/components/features/VirtualTour';
import { Footer } from '@/components/Footer';

import RenanBG from '@/assets/background/Renan_BG.png';

function App() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative font-sans">
      <div className="fixed inset-0 z-0">
        <img
          src={RenanBG}
          alt="Tattoo Background"
          className="absolute inset-0 object-contain h-[120vh] w-full max-w-none opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent backdrop-blur-[2px]" />
      </div>

      <ParticlesBackground />

      {/* Cabeçalho fixo com título estilizado */}
      <header className="fixed top-0 left-0 right-0 z-layer-header bg-black/70 backdrop-blur-md border-b border-amber-500">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-tattoo text-gold drop-shadow-[0_0_12px_rgba(255,215,0,0.4)] text-center">
            Tattoo GoldInk
          </h1>
        </div>
      </header>

      <main className="relative z-10 pt-32">
        <ArtistsSection />
        <VirtualTour />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
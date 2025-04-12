import { ParticlesBackground } from '@/components/ParticlesBackground';
import { ArtistsSection } from '@/components/artists';
import { WhatsAppButton } from '@/components/Contact/WhatsAppButton';
import { VirtualTour } from '@/components/features';
import { Footer } from '@/components/Footer';

import logo from '@/assets/Logo/logo_provisorio.png';

function App() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative font-sans bg-zinc-900">
      <ParticlesBackground />

      <header className="fixed top-0 left-0 right-0 z-layer-header bg-black/50 backdrop-blur-md border-b border-amber-500">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        </div>
      </header>

      <div className="pt-24 flex flex-col items-center z-layer-section">
        <img
          src={logo}
          alt="Logo Gold Ink Tattoo"
          className="h-64 lg:h-80 object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        />
        <hr className="w-32 border-t-2 border-amber-500 mt-4 opacity-70" />
      </div>

      <main className="relative z-10 pt-20">
        <ArtistsSection />
        <VirtualTour />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
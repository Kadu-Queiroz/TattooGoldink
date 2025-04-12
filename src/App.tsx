import { ParticlesBackground } from '@/components/ParticlesBackground';
import { ArtistsSection } from '@/components/artists';
import { WhatsAppButton } from '@/components/Contact/WhatsAppButton';
import { VirtualTour } from '@/components/features';
import { Footer } from '@/components/Footer';
import { FloatingLogo } from '@/components/FloatingLogo';

function App() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative font-sans bg-zinc-900">
      <ParticlesBackground />

      <header className="fixed top-0 left-0 right-0 z-layer-header h-10 bg-black/60 backdrop-blur-md border-b border-amber-500 shadow-md" />
      <FloatingLogo />

      <main className="relative z-10">
        <ArtistsSection />
        <VirtualTour />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
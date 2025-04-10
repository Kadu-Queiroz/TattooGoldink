import { ParticlesBackground } from '@/components/ParticlesBackground';
import { ArtistsSection } from '@/components/artists/ArtistsSection';
import { WhatsAppButton } from '@/components/Contact/WhatsAppButton';
import { VirtualTour } from '@/components/features/VirtualTour';
import { Footer } from '@/components/Footer';

import RenanBG from '@/assets/background/Renan_BG.png';
import Logo from '@assets/LogotesteTattoo.png';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white overflow-hidden">
      {/* Background com imagem fixa + overlay escuro com degradê sutil */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={RenanBG}
            alt="Tattoo Background"
            className="object-contain h-[120vh] max-w-none opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Efeito de partículas */}
      <ParticlesBackground />

      {/* Cabeçalho fixo */}
      <header className="fixed top-0 left-0 right-0 z-layer-header bg-primary/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-display text-center text-gold">
            Tattoo GoldInk
          </h1>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="relative z-10 pt-24">
        <ArtistsSection />
        <VirtualTour />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
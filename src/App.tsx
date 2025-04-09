import React from 'react';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { InkTrail } from '@/components/Cursor/InkTrail';
import { ArtistsSection } from '@/components/artists/ArtistsSection';
import { WhatsAppButton } from '@/components/Contact/WhatsAppButton';
import { VirtualTour } from '@/components/features/VirtualTour';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white overflow-hidden">
      {/* Background decorativo fixo */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=3540')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Efeito de partículas e rastro de tinta */}
      <ParticlesBackground />
      <InkTrail />

      {/* Cabeçalho fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm">
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

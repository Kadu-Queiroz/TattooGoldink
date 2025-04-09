import React from 'react';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { ArtistsSection, artists } from '@/components/artists';
import { WhatsAppButton } from '@/components/Contact/WhatsAppButton';
import { VirtualTour } from '@/components/features/VirtualTour';
import { Footer } from '@/components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Background visual estático */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=3540')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Partículas animadas */}
      <ParticlesBackground />

      {/* Cabeçalho fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-display text-center text-gold">
            Tattoo GoldInk
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Conteúdo principal */}
      <main className="relative z-10">
        <ArtistsSection/>
        <VirtualTour />
      </main>

      {/* Rodapé com localização e infos */}
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;

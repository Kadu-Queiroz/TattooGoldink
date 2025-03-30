import React from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { HeroSection } from './components/HeroSection/HeroSection';
import { ArtistCard } from './components/artists/ArtistCard';
import { ArtistModal } from './components/artists/ArtistModal';
import { WhatsAppButton } from './components/Contact/WhatsAppButton';
import { VirtualTour } from './components/features/VirtualTour';
import { Location } from './components/Footer/Location';
import { artists } from './components/artists/artists';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=3540')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <ParticlesBackground />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-display text-center text-gold">
            Tattoo GoldInk
          </h1>
        </div>
      </header>

      <HeroSection />

      <main className="relative z-10">
        <section id="artists" className="py-24 bg-gradient-to-b from-primary/95 to-primary/80">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-display text-center mb-12">
              Nossos Artistas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </section>

        <VirtualTour />
        <Location />
      </main>

      <footer className="bg-black/50 backdrop-blur-sm py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Tattoo GoldInk. Todos os direitos reservados.
          </p>
          <a
            href="https://wa.me/5511999999990"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80 mt-2 inline-block transition-colors"
          >
            Contato Geral do Estúdio
          </a>
        </div>
      </footer>

      <WhatsAppButton />
      <ArtistModal />
    </div>
  );
}

export default App;
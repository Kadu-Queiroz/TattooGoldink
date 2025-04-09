<section className="min-h-screen bg-black text-white pt-20 px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    {/* Lado Esquerdo - Galeria compacta */}
    <div className="grid grid-cols-2 gap-4">
      <img src="/assets/tattoo1.jpg" className="rounded-lg object-cover w-full h-48" alt="Tattoo 1" />
      <img src="/assets/tattoo2.jpg" className="rounded-lg object-cover w-full h-48" alt="Tattoo 2" />
      <img src="/assets/tattoo3.jpg" className="rounded-lg object-cover w-full h-48" alt="Tattoo 3" />
      <img src="/assets/tattoo4.jpg" className="rounded-lg object-cover w-full h-48" alt="Tattoo 4" />
    </div>

    {/* Lado Direito - Mensagem de impacto */}
    <div className="text-left">
      <h1 className="text-5xl md:text-6xl font-bold text-gold mb-6">
        Arte sob a pele
      </h1>
      <p className="text-gray-300 text-lg mb-6">
        Conheça nossos artistas e descubra o poder da tatuagem autoral e atemporal.
      </p>
      <button
        onClick={() => {
          document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="px-6 py-3 bg-gold text-black rounded-full hover:bg-gold/90 transition"
      >
        Ver Portfólio
      </button>
    </div>
  </div>
</section>

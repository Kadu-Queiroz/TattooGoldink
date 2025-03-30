import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.4)), url('https://images.unsplash.com/photo-1598887142487-3c854d51d185?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/90" />
      </div>

      <div
        ref={ref}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl text-white mb-6"
        >
          Arte sob a pele,
          <br />
          <span className="text-gold">eternizada em ouro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-200 mb-8"
        >
          Transformamos suas ideias em arte única e atemporal
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          onClick={() => {
            document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Conheça nossos artistas
        </motion.button>
      </div>
    </section>
  );
}
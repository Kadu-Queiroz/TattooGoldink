import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const tourImages = [
  {
    url: 'https://images.unsplash.com/photo-1598887142487-3c854d51d185?q=80&w=2070',
    title: 'Recepção',
    description: 'Ambiente acolhedor e moderno para sua chegada'
  },
  {
    url: 'https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?q=80&w=2070',
    title: 'Área de Trabalho',
    description: 'Equipamentos de última geração e ambiente esterilizado'
  },
  {
    url: 'https://images.unsplash.com/photo-1604245439259-aa33c8588462?q=80&w=2070',
    title: 'Sala de Consulta',
    description: 'Espaço privativo para planejamento da sua arte'
  }
];

export function VirtualTour() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display mb-4">Conheça Nosso Espaço</h2>
          <p className="text-gray-400">Um ambiente projetado para sua arte e conforto</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Navigation, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            navigation
            loop
            className="h-[600px] rounded-xl overflow-hidden"
          >
            {tourImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-display text-gold mb-2">{image.title}</h3>
                      <p className="text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
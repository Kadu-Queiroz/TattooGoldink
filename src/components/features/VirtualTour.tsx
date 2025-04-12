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
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2070&q=80',
    title: 'Recepção',
    description: 'Ambiente acolhedor e moderno para sua chegada',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80',
    title: 'Área de Trabalho',
    description: 'Equipamentos de última geração e ambiente esterilizado',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585153943-205fa521e20c?auto=format&fit=crop&w=2070&q=80',
    title: 'Sala de Consulta',
    description: 'Espaço privativo para planejamento da sua arte',
  },
];

export function VirtualTour() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-28">
      <div className="mx-auto max-w-[1440px] px-6 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display mb-4">Nosso Espaço</h2>
          <p className="text-gray-400">Um ambiente projetado para sua arte</p>
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
            className="h-[600px] rounded-xl overflow-hidden shadow-xl"
          >
            {tourImages.map(({ url, title, description }, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <img src={url} alt={title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-display text-gold mb-2">{title}</h3>
                      <p className="text-gray-200">{description}</p>
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
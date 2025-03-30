import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Location() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display mb-4">Localização</h2>
          <p className="text-gray-400">Venha nos visitar</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-gold" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-gray-400">Rua das Artes, 123 - Vila Madalena<br />São Paulo - SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-gold" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-400">
                  Segunda a Sábado: 10h às 20h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-gold" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Contato</h3>
                <p className="text-gray-400">(11) 99999-9990</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="aspect-video rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=2070"
              alt="Fachada do estúdio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
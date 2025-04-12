import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export function FooterContent() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1440px] px-6 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display mb-4">Localização</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-y-2 gap-x-4 items-center">
          {/* Bloco de informações */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 text-base md:text-lg text-gray-300"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-gold" size={24} />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-1 text-white font-display">
                  Endereço
                </h3>
                <p>
                  Rua das Artes, 123 - Vila Madalena<br />
                  São Paulo - SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-gold" size={24} />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-1 text-white font-display">
                  Horário de Funcionamento
                </h3>
                <p>
                  Segunda a Sábado: 10h às 20h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-gold" size={24} />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-1 text-white font-display">
                  Contato
                </h3>
                <p>(11) 99999-9990</p>
              </div>
            </div>
          </motion.div>

          {/* Mapa incorporado */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full aspect-video rounded-xl overflow-hidden border border-amber-500"
          >
            <iframe
              title="Mapa do Estúdio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.495049926362!2d-46.69197768445617!3d-23.58815596831833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57a0f1e54a5b%3A0x6b1b7c13f7e7f8f5!2sRua%20das%20Artes%2C%20123%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1684104031805!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>

            {/* Botão para mobile */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+das+Artes,+123+-+Vila+Madalena,+São+Paulo+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block md:hidden w-full text-center bg-amber-500 text-black font-semibold py-2 px-4 rounded-lg transition hover:bg-amber-400"
            >
              Abrir no Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
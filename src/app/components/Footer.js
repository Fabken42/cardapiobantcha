'use client';

import { Instagram, Facebook, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[var(--green-tea-dark)] text-white pt-12 pb-8"
    >
      <div className="container mx-auto px-6">
        {/* Seções principais */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Informações */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-3xl font-bold text-white">Bantchá Sushi</h3>

            <a
              href="https://www.google.com/maps?q=Calçada+Antares+216,+Santana+de+Parnaíba,+SP,+06541-065"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 hover:underline"
            >
              <MapPin className="w-5 h-5 text-white" />
              <span>Calçada Antares 216, Santana de Parnaíba, SP</span>
            </a>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-white" />
              <p>(11) 99723-6677 | (11) 4153-6677</p>
            </div>

            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/5511997236677"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-[var(--green-tea-light)] text-white font-medium hover:bg-[var(--green-tea)] transition-colors duration-400"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>

          {/* Redes sociais */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-3 text-white">
              Siga-nos em
            </h4>
            <div className="flex justify-center md:justify-end gap-6">
              <a
                href="https://www.instagram.com/bantchasushi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-[var(--green-tea-dark)] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/bantchasushi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-[var(--green-tea-dark)] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha final */}
        <div className="border-t border-white/20 mt-10 pt-4 text-center text-white/80 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bantchá Sushi. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

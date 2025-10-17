'use client';

import { CldImage } from 'next-cloudinary';
import { ChevronDown, MapPin, Phone } from 'lucide-react'; // ícone da seta

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px]">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <CldImage
          src="hero-banner"
          alt="Bantchá Sushi - Comida Japonesa Autêntica"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/50" />
      </div>

      {/* Conteúdo central */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <CldImage
              src="logo-transparente"
              alt="Bantchá Sushi"
              width={400}
              height={120}
              className="max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl"
              priority
            />
          </div>

          {/* Endereço e telefone */}
          <div className="flex flex-col items-center gap-3 mb-8 text-gray-100 text-lg md:text-xl">
            <div className="flex items-start gap-2 text-center md:text-left max-w-sm md:max-w-none">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="leading-snug break-words">
                Calçada Antares 216, Santana de Parnaíba, SP, 06541-065
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a
                href="tel:+5511997236677"
                className="hover:text-white transition-colors duration-200"
              >
                (11) 99723-6677
              </a>
            </div>
          </div>


          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#menu"
              className="bg-[var(--green-tea)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Cardápio
            </a>
            <a
              href="#horarios"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-400"
            >
              Horários
            </a>
          </div>
        </div>
      </div>

      {/* Ícone de seta indicativa (visível em todas as telas) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={48} className="opacity-80" />
      </div>
    </section>
  );
}

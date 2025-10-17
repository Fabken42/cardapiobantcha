'use client';

import { useState } from 'react';
import { CldImage } from 'next-cloudinary';

const navLinks = [
  { href: '#menu', label: 'Cardápio' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-50 bg-[var(--green-tea-dark)]/90 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <CldImage
            src="logo-transparente"
            alt="Bantchá Sushi"
            width={140}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg tracking-wide"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/70"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } bg-[var(--green-tea-dark)] overflow-hidden`}
      >
        <nav className="py-4">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-white hover:text-gray-200 transition-colors duration-300 font-medium text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
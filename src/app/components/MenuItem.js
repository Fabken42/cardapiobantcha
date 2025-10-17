'use client';

import { CldImage } from 'next-cloudinary';
import { Crown, ChefHat, Flame } from 'lucide-react';

export default function MenuItem({ item }) {
  const hasBadge = item.chefChoice || item.mostPopular;
  
  const getBadgeConfig = () => {
    if (item.chefChoice && item.mostPopular) {
      return {
        text: ['Mais', 'Pedido'],
        subtext: ['& Chef'],
        className: 'bg-gradient-to-r from-yellow-500 to-red-500',
        icon: Crown
      };
    } else if (item.chefChoice) {
      return {
        text: ['Escolha', 'do Chef'],
        subtext: [],
        className: 'bg-yellow-500',
        icon: ChefHat
      };
    } else if (item.mostPopular) {
      return {
        text: ['Mais', 'Pedido'],
        subtext: [],
        className: 'bg-red-500',
        icon: Flame
      };
    }
    return null;
  };

  const badgeConfig = getBadgeConfig();
  const IconComponent = badgeConfig?.icon;

  return (
    <div className="relative"> {/* Container externo para o badge */}
      {/* Card principal com overflow-hidden */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
        {/* Imagem */}
        <div className="relative h-52 overflow-hidden">
          <CldImage
            src={item.image || 'menu-banner'}
            alt={item.name}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay escuro para melhor contraste */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
        </div>

        {/* Conteúdo */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-[var(--green-tea-dark)]">{item.name}</h3>
            <span className="text-lg font-bold text-[var(--green-tea-dark)]">
              R$ {item.price.toFixed(2)}
            </span>
          </div>
          <p className="text-[var(--green-tea-dark)] text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Badge no canto superior direito - fora do card com overflow-hidden */}
      {badgeConfig && (
        <div className={`absolute -top-4 -right-4 ${badgeConfig.className} text-white w-16 h-16 rounded-full shadow-xl flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-300 z-10`}>
          {IconComponent && (
            <IconComponent size={16} className="mb-1" />
          )}
          <div className="text-center leading-tight">
            <div className="text-[10px] font-bold whitespace-nowrap">
              {badgeConfig.text[0]}
            </div>
            <div className="text-[10px] font-bold whitespace-nowrap">
              {badgeConfig.text[1]}
            </div>
            {badgeConfig.subtext && badgeConfig.subtext.length > 0 && (
              <div className="text-[8px] font-semibold whitespace-nowrap mt-0.5">
                {badgeConfig.subtext[0]}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
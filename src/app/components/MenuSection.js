'use client';

import { useState } from 'react';
import menuData from '../data/menu.json';
import MenuItem from './MenuItem';
import { UtensilsCrossed, ChefHat } from 'lucide-react';

const categories = [
  { label: 'Entradas - Sushi', value: 'entradas_sushi' },
  { label: 'Entradas - Cozinha', value: 'entradas_cozinha' },
  { label: 'Combinados', value: 'combinados' },
  { label: 'Temaki', value: 'temaki' },
  { label: 'Hot Roll', value: 'hot_roll' },
  { label: 'Uramaki | Hossomaki | Jou', value: 'uramaki_hossomaki_jou' },
  { label: 'Lámen | Udon', value: 'lamen_udon' },
  { label: 'Teishoku | Teppanyaki', value: 'teishoku_teppanyaki' },
  { label: 'Yakisoba | Tempurá', value: 'yakisoba_tempura' },
  { label: 'Acompanhamentos', value: 'acompanhamentos' },
  { label: 'Sobremesas', value: 'sobremesas' },
];

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredItems =
    selectedCategory === 'todos'
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  // Função para mudar categoria e fazer scroll
  const handleCategoryChange = (categoryValue) => {
    setSelectedCategory(categoryValue);

    // Scroll para o topo do MenuSection
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const offsetTop = menuSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="menu" className="bg-gray-50">
      {/* Título */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex items-center justify-center mb-6">
          <UtensilsCrossed className="text-[var(--green-tea)] mr-4" size={32} />
          <h2 className="text-3xl font-bold text-center text-[var(--green-tea)]">
            Nosso Cardápio
          </h2>
          <ChefHat className="text-[var(--green-tea)] ml-4" size={32} />
        </div>
      </div>

      {/* Categorias Sticky */}
      <div className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div
            className="
              flex overflow-x-auto pb-3 space-x-3
              scrollbar-thin scrollbar-thumb-[var(--green-tea)] scrollbar-track-gray-200
              hover:scrollbar-thumb-[var(--green-tea-dark)]
            "
          >
            <button
              onClick={() => handleCategoryChange("todos")}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === "todos"
                ? "bg-[var(--green-tea)] text-white shadow-md"
                : "bg-white text-[var(--green-tea-dark)] hover:bg-gray-100 border border-gray-200"
                }`}
            >
              Todos
            </button>

            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap truncate max-w-[250px] ${selectedCategory === category.value
                  ? "bg-[var(--green-tea)] text-white shadow-md"
                  : "bg-white text-[var(--green-tea-dark)] hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid com background pattern */}
      <div className="relative">
        {/* Background pattern repetido */}
        <div
          className="
      absolute inset-0
      pointer-events-none
      bg-[url('https://res.cloudinary.com/dbbd3chay/image/upload/v1760675304/menu-banner.png')]
      bg-repeat
      bg-[length:auto]
      opacity-20
    "
        ></div>

        {/* Overlay escura para escurecer o pattern */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

        {/* Grid de Itens */}
        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => <MenuItem key={item.id} item={item} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-[var(--green-tea-dark)] text-lg">
                  Nenhum item encontrado nesta categoria!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}

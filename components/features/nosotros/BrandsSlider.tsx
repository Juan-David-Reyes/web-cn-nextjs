'use client'

import Image from 'next/image';

export function BrandsSlider() {
  const logos = [
    { name: 'Advance Derma', file: 'advace-derma.png' },
    { name: 'Apsap', file: 'apsap.png' },
    { name: 'BB Maya', file: 'bbmaya.png' },
    { name: 'CC Solutions', file: 'ccsolutions.png' },
    { name: 'Daniel Psy', file: 'danielpsy.png' },
    { name: 'Mielato', file: 'mielato.png' },
    { name: 'Nacion Podcast', file: 'nacionpodcast.png' },
    { name: 'Paola Akl', file: 'paolaakl.png' },
    { name: 'Paz desde el Vientre', file: 'pazdesdeelvientre.png' },
    { name: 'Seon Me', file: 'seonme.png' },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#0a0a0a] py-24 pb-32 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] dark:text-zinc-100">
          Quienes nos han confiado{' '}
          <span className="font-[family-name:var(--font-playfair)] font-[450] italic tracking-[-0.02em] font-normal">
            sus proyectos
          </span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden max-w-[1200px] mx-auto [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div 
          className="flex w-max animate-[scroll_45s_linear_infinite] hover:[animation-play-state:paused] pl-12 sm:pl-20 md:pl-24" 
          style={{ gap: 'calc(var(--spacing) * 10)' }}
        >
          
          {/* Renderizamos el array 3 veces para garantizar un bucle continuo sin cortes visuales */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="w-[140px] h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-full h-full flex items-center justify-center p-2 relative">
                <Image 
                  src={`/images/logos-clientes/${logo.file}`} 
                  alt={logo.name} 
                  fill
                  sizes="140px"
                  className="object-contain" 
                  unoptimized
                />
              </div>
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </div>
  );
}

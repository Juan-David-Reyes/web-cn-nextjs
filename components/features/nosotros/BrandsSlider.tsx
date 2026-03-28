'use client'

export function BrandsSlider() {
  // Ajusta las rutas a las tuyas cuando subas las imágenes reales.
  const logos = [
    { name: 'Logo 1', file: 'logo1' },
    { name: 'Logo 2', file: 'logo2' },
    { name: 'Logo 3', file: 'logo3' },
    { name: 'Logo 4', file: 'logo4' },
    { name: 'Logo 5', file: 'logo5' },
    { name: 'Logo 6', file: 'logo6' },
    { name: 'Logo 7', file: 'logo7' },
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
          style={{ gap: 'calc(var(--spacing) * 6)' }}
        >
          
          {/* Renderizamos el array 3 veces para garantizar un bucle continuo sin cortes visuales */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="w-[140px] h-[60px] flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-full h-full flex items-center justify-center font-bold text-xl text-zinc-400 border border-dashed border-zinc-300 dark:border-zinc-700/50 rounded-xl">
                {/* 
                  AQUÍ DEBES REEMPLAZAR EL DIV DEL PLACEHOLDER POR LA ETIQUETA IMAGE REAL CUANDO LAS TENGAS:
                  <Image src={\`/images/logos/\${logo.file}.webp\`} alt={logo.name} width={140} height={60} className="object-contain" />
                */}
                {logo.name}
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

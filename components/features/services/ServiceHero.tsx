import Image from 'next/image';
import Link from 'next/link';
import { type ServiceData } from '@/lib/data/services';

interface ServiceHeroProps {
  hero: ServiceData['hero'];
}

export function ServiceHero({ hero }: ServiceHeroProps) {
  return (
    <section
      aria-label={`Hero: ${hero.title}`}
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden"
      style={{ background: 'radial-gradient(150% 120% at bottom, #37588C 0%, #0F1826 45%)' }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

          {/* Contenido principal */}
          <header className="lg:col-span-2 flex flex-col items-start text-left gap-6 md:gap-8">

            <div className="flex flex-col gap-2">
              <span className="text-[14px] uppercase tracking-[4px] leading-[160%] font-normal text-slate-100/80">
                {hero.badge}
              </span>
              <h1 className="font-bold !text-[#F1F5F9] tracking-tight leading-[1.1]">
                {hero.title}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-100/90 font-light leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4">
              <Link
                href={hero.primaryButton.link}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[var(--surface-action)] text-[#0f172a] rounded-full px-8 py-3 text-base font-bold transition-all duration-300 hover:bg-[var(--surface-action-hover)] hover:shadow-[0_8px_16px_-6px_rgba(0,255,140,0.3)]"
              >
                {hero.primaryButton.text}
              </Link>

              {hero.secondaryButton && (
                <Link
                  href={hero.secondaryButton.link}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-slate-100 border border-white/20 rounded-full px-8 py-3 text-base font-medium transition-all duration-300 hover:bg-white/20"
                >
                  {hero.secondaryButton.text}
                </Link>
              )}
            </div>
          </header>

          {/* Imagen del servicio */}
          <figure className="lg:col-span-1 w-full relative min-h-[400px] lg:min-h-[500px] m-0">
            <Image
              src={hero.image}
              alt={`Ilustración: ${hero.title}`}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </figure>

        </div>
      </div>

      {/* Marquee de herramientas */}
      {hero.tools && hero.tools.length > 0 && (
        <div
          className="relative w-full py-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-hidden="true"
        >
          <ul className="flex w-max animate-tools-scroll gap-4 list-none p-0 m-0">
            {[...hero.tools, ...hero.tools, ...hero.tools, ...hero.tools].map((tool, index) => (
              <li
                key={index}
                className="flex items-center gap-3 shrink-0 px-4 py-3 bg-white/[0.08] rounded-lg"
              >
                <div className="w-8 h-8 relative shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain opacity-80"
                    unoptimized
                  />
                </div>
                <span className="text-slate-100 font-medium whitespace-nowrap text-sm">
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

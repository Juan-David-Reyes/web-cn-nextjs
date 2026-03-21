import Image from 'next/image';
import Link from 'next/link';
import { type ServiceData } from '@/lib/data/services';

interface ServiceHeroProps {
  hero: ServiceData['hero'];
}

export function ServiceHero({ hero }: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#f5f7fa]">
      <div className="max-w-[1440px] mx-auto w-full px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#3DBF15] animate-pulse" />
          {hero.badge}
        </div>

        {/* Title & Description */}
        <h1 className="text-5xl md:text-[80px] font-bold text-zinc-900 mb-8 tracking-tight leading-[1.1] max-w-5xl">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-3xl mb-12">
          {hero.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-10">
          <Link 
            href={hero.primaryButton.link}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-zinc-900 text-white rounded-[16px] px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-[#3DBF15] hover:shadow-[0_8px_16px_-6px_rgba(61,191,21,0.4)]"
          >
            {hero.primaryButton.text}
          </Link>
          {hero.secondaryButton && (
            <Link 
              href={hero.secondaryButton.link}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-zinc-900 border border-zinc-200 rounded-[16px] px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm"
            >
              {hero.secondaryButton.text}
            </Link>
          )}
        </div>

        {/* Hero Image / Mockup */}
        <div className="mt-20 w-full max-w-6xl relative">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-white rounded-[24px] md:rounded-[40px] shadow-2xl overflow-hidden border border-zinc-200 relative group">
             {/* Fallback pattern while images don't exist */}
             <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center z-0">
               <span className="text-zinc-400 font-medium">Hero Image Demo ({hero.image})</span>
             </div>
             
             <Image 
               src={hero.image}
               alt="Vista general del servicio"
               fill
               className="object-cover z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" // We handle missing image gracefully
               priority
               sizes="(max-width: 1440px) 100vw, 1440px"
             />
          </div>
        </div>

      </div>
    </section>
  );
}

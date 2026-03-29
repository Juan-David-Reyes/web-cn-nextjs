import Image from 'next/image';
import Link from 'next/link';
import { type ServiceData } from '@/lib/data/services';

interface ServiceHeroProps {
  hero: ServiceData['hero'];
}

export function ServiceHero({ hero }: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-tr from-[#0A101A] to-[#1A2E4C]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 flex flex-col items-start text-left space-y-6 md:space-y-8">

            <div className="flex flex-col gap-2">
              <span className="text-[14px] uppercase tracking-[4px] leading-[160%] inline-block font-normal !text-slate-100/80">
                {hero.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !text-[#F1F5F9] tracking-tight leading-[1.1] w-full">
                {hero.title}
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-slate-100/90 font-light leading-relaxed w-full">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 pt-4">
              <Link 
                href={hero.primaryButton.link}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#3DBF15] text-[#0f172a] rounded-full px-8 py-4 text-base font-bold transition-all duration-300 hover:bg-[#2fa310] hover:shadow-[0_8px_16px_-6px_rgba(61,191,21,0.4)]"
              >
                {hero.primaryButton.text}
              </Link>
              {hero.secondaryButton && (
                <Link 
                  href={hero.secondaryButton.link}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-slate-100 border border-white/20 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-white/20 shadow-sm"
                >
                  {hero.secondaryButton.text}
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-1 w-full relative min-h-[400px] lg:min-h-[500px]">
            <div className="absolute inset-0 overflow-hidden group flex items-center justify-center">
               <span className="text-slate-100/40 font-medium z-0">Hero Image Demo ({hero.image})</span>
               <Image 
                 src={hero.image}
                 alt="Vista general del servicio"
                 fill
                 className="object-contain z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" 
                 priority
                 sizes="(max-width: 1024px) 100vw, 50vw"
               />
            </div>
          </div>
        </div>

      </div>

      {hero.tools && hero.tools.length > 0 && (
        <div className="relative w-full py-6 overflow-hidden z-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-tools-scroll gap-4">
            {[...hero.tools, ...hero.tools, ...hero.tools, ...hero.tools].map((tool, index) => (
              <div key={index} className="flex items-center gap-3 shrink-0 p-[calc(var(--spacing)*3)] bg-[#ffffff14] rounded-[8px]">
                <div className="w-10 h-10 relative rounded-[4px] bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden shrink-0">
                  <div className="relative w-5 h-5">
                     <Image 
                       src={tool.icon} 
                       alt={tool.name} 
                       fill 
                       className="object-contain opacity-80" 
                       unoptimized 
                     />
                  </div>
                </div>
                <span className="text-slate-100 font-medium whitespace-nowrap text-[14px]">{tool.name}</span>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes toolsScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-25%); }
            }
            .animate-tools-scroll {
              animation: toolsScroll 35s linear infinite;
            }
          `}</style>
        </div>
      )}
    </section>
  );
}

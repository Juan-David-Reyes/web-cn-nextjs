import Link from "next/link";
import Image from "next/image";
import { CalendarPopupBtn } from "@/components/features/calendar/CalendarPopupBtn";

interface HeroProps {
  data?: {
    title?: string;
    highlight?: string;
    description?: string;
  };
}

export function HeroSection({ data }: HeroProps) {
  const titleText = data?.title || "Excelencia Digital";
  const highlightText = data?.highlight || "Tu Negocio";
  const descriptionText = data?.description || 
    "Transformamos tu visión en soluciones de software de alto impacto. Creamos experiencias únicas, rápidas y escalables con tecnologías de vanguardia.";

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Bottom White Gradient Blend */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none" />

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] z-0 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[150px] z-0 mix-blend-screen pointer-events-none" />

      {/* Background Image */}
      <Image
        src="/images/bg_herosection.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-left absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-[120px] text-left flex flex-col items-start">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f172a]/5 border border-[#0f172a]/10 backdrop-blur-md mb-8 shadow-lg shadow-purple-900/20">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
          <span className="text-sm font-medium text-[#0f172a]">Innovación continua</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-[65px] lg:text-[80px] font-bold tracking-tight text-[#0f172a] mb-6 leading-[1.1]">
          {titleText} <br className="hidden md:block" />
          para <span className="font-serif italic font-medium text-[#0f172a]">{highlightText}</span>
          <span className="text-purple-600">.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-[#0f172a]/80 mb-10 leading-relaxed">
          {descriptionText}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start justify-start gap-4 mt-8 w-full">
          <Link 
            href="https://wa.me/573126357309?text=Hola,%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 rounded-full border border-[#0f172a] bg-transparent hover:bg-[#0f172a]/5 transition-all duration-300 text-[#0f172a] font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="w-6 h-6 text-[#0f172a] transition-colors"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-1.08L45,214l10.91-32.74a8,8,0,0,0-1.08-6.54A88,88,0,1,1,128,216Z"></path></svg>
            Hablemos
          </Link>
          <CalendarPopupBtn />
        </div>

        {/* Tech Stack Logos */}
        <div className="mt-24 flex flex-col items-start relative z-20 w-full">
          <p className="text-sm text-[#0f172a]/70 mb-8 tracking-wider uppercase font-medium">Revolucionando soluciones con las mejores herramientas</p>
          <div className="flex flex-wrap justify-start items-center gap-6 md:gap-8 opacity-80 max-w-4xl px-0">
            
            {[
              { name: 'Figma', icon: 'figma.svg' },
              { name: 'HTML5', icon: 'html5.svg' },
              { name: 'CSS3', icon: 'css3.svg' },
              { name: 'WordPress', icon: 'wordpress.svg' },
              { name: 'React', icon: 'react.svg' },
              { name: 'TypeScript', icon: 'typescript.svg' },
              { name: 'Node.js', icon: 'node-js.svg' },
              { name: 'Google Analytics', icon: 'google-analytics.svg' }
            ].map((tech) => (
              <div 
                key={tech.name} 
                className="group relative w-10 h-10 flex items-center justify-center hover:-translate-y-2 transition-all duration-300"
                title={tech.name}
              >
                {/* Image using native img tag inside the Next relative structure 
                    (Icons are usually pure SVGs under public/images) */}
                <img 
                  src={`/images/herramientas/${tech.icon}`} 
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
                  loading="lazy"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

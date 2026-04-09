import Link from "next/link";
import Image from "next/image";
import { CalendarPopupBtn } from "@/components/features/calendar/CalendarPopupBtn";

interface HeroProps {
  data?: {
    preTitle?: string;
    title?: string;
    highlight?: string;
    description?: string;
  };
}

export function HeroSection({ data }: HeroProps) {
  const preTitleText = data?.preTitle || "TÚ PONES LA VISIÓN, NOSOTROS EL CÓDIGO";
  const titleText = data?.title || "Activos digitales que impulsan tu próximo";
  const highlightText = data?.highlight || "nivel de crecimiento";
  const descriptionText = data?.description || 
    "Combinamos desarrollo de producto, diseño UX/UI de alta conversión y estrategia digital para transformar empresas en líderes de su sector.";

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-between pt-40 overflow-hidden">
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

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-[120px] text-left flex flex-col items-start max-w-[900px] pb-16">
        
        {/* Top Badge */}
        <span className="text-[14px] uppercase tracking-[4px] leading-[160%] mb-[16px] inline-block font-normal text-[#334155]">{preTitleText}</span>

        {/* Main Headline */}
        <h1 className="font-bold tracking-tight text-[#0f172a] mb-6 leading-[1.1]">
          {titleText}{' '}
          <span className="font-serif italic font-medium text-[#0f172a]">{highlightText}</span>
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-[#0f172a]/80 mb-10 leading-relaxed">
          {descriptionText}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full">
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

      </div>

      {/* Full-width Tech Stack Bar — pinned to bottom of hero */}
      <div className="relative z-20 w-full flex flex-col sm:flex-row items-stretch gap-0 mt-auto">

        {/* Label pill */}
        <div
          className="flex items-center px-8 py-6 shrink-0"
          style={{
            maxWidth: '440px',
            backgroundColor: 'var(--neutral-900)',
            color: 'var(--neutral-50)',
          }}
        >
          <h4 className="font-semibold leading-snug" style={{ color: 'var(--headings-dark)' }}>
            Quienes nos han confiado{' '}
            <span className="font-serif italic font-normal">sus proyectos</span>
          </h4>
        </div>

        {/* Logo marquee strip */}
        <div
          className="flex-1 overflow-hidden flex items-center"
          style={{
            backgroundColor: 'rgb(0 0 0 / 5%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            border: '1px solid rgba(245, 247, 250, 0.07)',
          }}
        >
          {/* Track tripled for seamless loop */}
          <div className="animate-hero-marquee flex items-center gap-10 py-6 w-max">
            {[...Array(3)].flatMap((_, setIdx) =>
              [
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
              ].map((logo) => (
                <div
                  key={`${setIdx}-${logo.name}`}
                  className="w-[120px] h-[50px] shrink-0 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 relative"
                >
                  <Image
                    src={`/images/logos-clientes/${logo.file}`}
                    alt={logo.name}
                    fill
                    sizes="120px"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

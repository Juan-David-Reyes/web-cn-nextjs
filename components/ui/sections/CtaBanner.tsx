import Link from 'next/link';
import Image from 'next/image';
import { CalendarPopupBtn } from '@/components/features/calendar/CalendarPopupBtn';

interface CtaBannerProps {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CtaBanner({ 
  title, 
  description, 
  buttonText = "Iniciar Proyecto", 
  buttonLink = "/contacto" 
}: CtaBannerProps) {
  return (
    <section className="relative w-full py-[140px] px-4 bg-[#0f172a] rounded-b-[24px] overflow-hidden">
      {/* Decorative SVG Circles */}
      <Image src="/images/circle.svg" alt="" aria-hidden="true" fill priority={false} className="absolute bottom-0 -left-[5%] w-full max-w-[350px] object-contain pointer-events-none opacity-50" />
      <Image src="/images/circle.svg" alt="" aria-hidden="true" fill priority={false} className="absolute top-0 -right-[5%] w-full max-w-[350px] object-contain pointer-events-none rotate-180 opacity-50" />



      <div className="w-full max-w-[860px] mx-auto px-4 relative z-10 text-center">
        {title ? (
          <h2 className="text-[clamp(2.625rem,2.1rem+1.6vw,3.75rem)] leading-[1.1] tracking-[-0.02em] font-bold text-[#f1f5f9] mb-6">
            {title}
          </h2>
        ) : (
          <h2 className="text-[clamp(2.625rem,2.1rem+1.6vw,3.75rem)] leading-[1.1] tracking-[-0.02em] font-bold text-[#f1f5f9] mb-6">
            ¿Listo para llevar tu negocio al{" "}
            <span className="font-[family-name:var(--font-playfair)] font-[450] italic tracking-[-0.02em] text-[#f1f5f9]">
              siguiente nivel
            </span>
            ?
          </h2>
        )}
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          {description || "Agenda una consultoría gratuita y descubramos cómo podemos ayudarte a destacar en el mundo digital."}
        </p>

        {buttonLink === "/contacto" ? (
          <CalendarPopupBtn 
            className="inline-flex items-center justify-center px-8 h-[45px] bg-[#00ff8c] rounded-[8px] text-[#1e293b] font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-[0_0_15px_rgba(0,255,140,0.3)] hover:shadow-[0_0_25px_rgba(0,255,140,0.5)] cursor-pointer"
          >
            {buttonText}
          </CalendarPopupBtn>
        ) : (
          <Link 
            href={buttonLink}
            className="inline-flex items-center justify-center px-8 h-[45px] bg-[#00ff8c] rounded-[8px] text-[#1e293b] font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-[0_0_15px_rgba(0,255,140,0.3)] hover:shadow-[0_0_25px_rgba(0,255,140,0.5)]"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  )
}

import Link from 'next/link'

export function CtaBanner() {
  return (
    <section className="w-full bg-[#0f172a] rounded-b-[24px] py-[140px] px-4 relative overflow-hidden">
      {/* Decorative SVG Circles */}
      <img src="/images/circle.svg" alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-full max-w-[350px] h-full object-contain pointer-events-none" />
      <img src="/images/circle.svg" alt="" aria-hidden="true" className="absolute top-0 right-0 w-full max-w-[350px] h-full object-contain pointer-events-none rotate-180" />



      <div className="w-full max-w-[860px] mx-auto px-4 relative z-10 text-center">
        <h2 className="text-[clamp(2.625rem,2.1rem+1.6vw,3.75rem)] leading-[1.1] tracking-[-0.02em] font-bold text-[#f1f5f9] mb-6">
          ¿Listo para llevar tu negocio al{" "}
          <span className="font-[family-name:var(--font-playfair)] font-[450] italic tracking-[-0.02em] text-[#f1f5f9]">
            siguiente nivel
          </span>
          ?
        </h2>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          Agenda una consultoría gratuita y descubramos cómo podemos ayudarte a destacar en el mundo digital.
        </p>

        <Link 
          href="/contacto" 
          className="inline-flex items-center justify-center px-8 h-[45px] bg-[#00ff8c] rounded-[8px] text-[#1e293b] font-semibold transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-[0_0_15px_rgba(0,255,140,0.3)] hover:shadow-[0_0_25px_rgba(0,255,140,0.5)]"
        >
          Iniciar Proyecto
        </Link>
      </div>
    </section>
  )
}

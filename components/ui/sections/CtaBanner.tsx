import Link from 'next/link'

export function CtaBanner() {
  return (
    <section className="bg-neutral-900 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-[#A2EB2F]/10 to-transparent blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          ¿Listo para llevar tu negocio al{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CAE414] to-[#3DBF15]">
            siguiente nivel
          </span>
          ?
        </h2>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          Agenda una consultoría gratuita y descubramos cómo podemos ayudarte a destacar en el mundo digital.
        </p>

        <Link 
          href="/contacto" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-neutral-900 bg-gradient-to-r from-[#CAE414] to-[#3DBF15] rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(162,235,47,0.3)] hover:shadow-[0_0_30px_rgba(162,235,47,0.5)]"
        >
          Iniciar Proyecto
        </Link>
      </div>
    </section>
  )
}

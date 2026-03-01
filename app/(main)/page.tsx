import Image from "next/image";
import { Testimonials } from "@/components/ui/sections/Testimonials";
import { CtaBanner } from "@/components/ui/sections/CtaBanner";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-28 bg-white text-neutral-900 selection:bg-blue-500/30">
      <header className="max-w-4xl text-center space-y-6 px-4">
        <div className="mx-auto block w-[200px] h-[50px] relative mb-8 hover:saturate-150 transition-all duration-300">
          <Image
            src="/images/logoDarkMode.svg"
            alt="Código Nativo - Desarrollo de Software"
            width={200}
            height={50}
            priority={true}
            className="object-contain"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-6">
          Construyendo el <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">futuro digital</span>.
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
          Código Nativo desarrolla soluciones de software escalables, rápidas y diseñadas con foco absoluto en el rendimiento y la experiencia del usuario.
        </p>
      </header>
      
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Features cards using modern minimal Tailwind styles */}
        <div className="p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium mb-3 text-zinc-100">Performance First</h3>
          <p className="text-zinc-400 leading-relaxed font-light">Arquitectura enfocada en SEO técnico y métricas excepcionales en Core Web Vitals.</p>
        </div>
        
        <div className="p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-purple-500/50 hover:bg-zinc-900 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h3 className="text-xl font-medium mb-3 text-zinc-100">Escalabilidad Real</h3>
          <p className="text-zinc-400 leading-relaxed font-light">Sistemas construidos no para hoy, sino para soportar el crecimiento constante.</p>
        </div>
        
        <div className="p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-medium mb-3 text-zinc-100">Clean Code</h3>
          <p className="text-zinc-400 leading-relaxed font-light">Arquitectura mantenible y fuertemente tipada empleando TypeScript estricto.</p>
        </div>
      </section>

      {/* Testimonios */}
      <Testimonials />

      {/* Llamado a la Acción (CTA) */}
      <CtaBanner />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { TeamGrid } from "@/components/features/nosotros/TeamGrid";
import { TestimonialsSection } from "@/components/features/nosotros/TestimonialsSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Código Nativo",
  description: "Conoce nuestra historia, misión y valores. Somos una agencia de marketing digital apasionada por crear experiencias web excepcionales.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 selection:bg-[#3dbf15]/30 overflow-hidden relative z-10 w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          
          <div className="w-full flex justify-center mb-2">
            <Breadcrumbs items={[{ label: 'Sobre Nosotros' }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3dbf15]/10 text-[#3dbf15] border border-[#3dbf15]/20 font-medium text-sm mb-4 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3dbf15] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3dbf15]"></span>
            </span>
            Sobre Nosotros
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Realizamos estrategias, diseño y desarrollo para crear{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3dbf15] to-emerald-400">
              productos de valor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto">
            Cambiando la forma en que la gente piensa sobre UX/UI.
          </p>

          <p className="text-lg text-zinc-500 dark:text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            ¿Quieres más visibilidad para tu marca? ¿Más ventas? ¿Mejores clientes? ¿Más reputación de marca? Conseguimos resultados para que tu negocio genere más ventas usando nuestro Sistema de Marketing Nativo.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Agencia digital con tecnología y diseño</h2>
            <div className="w-20 h-1 bg-[#3dbf15] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#3dbf15]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3dbf15]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-16 h-16 text-[#3dbf15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#3dbf15] transition-colors">Diagnóstico inicial sitio</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Evaluamos seguridad, velocidad, errores y estado general.</p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#3dbf15]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3dbf15]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-16 h-16 text-[#3dbf15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#3dbf15] transition-colors">Configuración de seguridad y backups</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Preparamos tu sitio para prevenir riesgos.</p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#3dbf15]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3dbf15]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-16 h-16 text-[#3dbf15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#3dbf15] transition-colors">Mantenimiento mensual programado</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Actualizaciones, optimización y revisión permanente.</p>
            </div>

            {/* Service 4 */}
            <div className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#3dbf15]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3dbf15]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-16 h-16 text-[#3dbf15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#3dbf15] transition-colors">Soporte y mejoras continuas</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Atención a incidentes y ajustes cuando lo necesites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro equipo</h2>
            <div className="w-20 h-1 bg-[#3dbf15] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Conoce a las mentes detrás de Código Nativo.</p>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-100 dark:bg-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Lo que nuestros clientes dicen de nuestra agencia</h2>
          <TestimonialsSection />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#3dbf15]/10 dark:bg-[#3dbf15]/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Tu sitio web es clave para tu negocio. <span className="text-[#3dbf15]">Cuídalo</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Evita problemas técnicos, pérdida de ventas y riesgos de seguridad. Nosotros nos encargamos del mantenimiento de tu sitio mientras tú te enfocas en crecer tu negocio.
          </p>
          <Link 
            href="/contacto" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-[#3dbf15] hover:bg-[#2fa30e] transition-all duration-300 shadow-lg shadow-[#3dbf15]/25 hover:shadow-[#3dbf15]/40 hover:-translate-y-1"
          >
            Solicitar información
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}

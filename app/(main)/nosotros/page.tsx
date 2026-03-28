import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { TeamGrid } from "@/components/features/nosotros/TeamGrid";
import { BrandsSlider } from "@/components/features/nosotros/BrandsSlider";
import { Testimonials } from "@/components/ui/sections/Testimonials";
import { CtaBanner } from "@/components/ui/sections/CtaBanner";
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

      {/* Banner Image */}
      <div className="w-full relative h-[50vh] max-h-[400px] bg-zinc-200 dark:bg-zinc-800">
        <Image 
          src="/images/fondo-nosotros.webp" 
          alt="Sobre Nosotros: Equipo Código Nativo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="w-full bg-[#FFFFFF] dark:bg-[#0a0a0a] rounded-t-[48px] -mt-12 relative z-10">
        <section className="relative pt-12 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full flex flex-col">
            
            <div className="w-full flex justify-start mb-12 lg:mb-16">
              <Breadcrumbs items={[{ label: 'Sobre Nosotros' }]} />
            </div>

            <div className="space-y-6 flex flex-col items-center text-center w-full max-w-[1200px] mx-auto">
              <span className="text-[14px] uppercase tracking-[4px] leading-[160%] inline-block font-normal text-[#334155] dark:text-zinc-400">
                SOBRE NOSOTROS
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] dark:text-zinc-100 leading-tight text-balance">
                Realizamos <span className="font-[family-name:var(--font-playfair)] font-[450] italic tracking-[-0.02em] font-normal">estrategias, diseño y desarrollo</span> para crear productos de valor
              </h1>

              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mt-2 mx-auto">
                ¿Quieres más visibilidad para tu marca? ¿Más ventas? ¿Mejores clientes? ¿Más reputación de marca? Conseguimos resultados para que tu negocio genere más ventas usando nuestro Sistema de Marketing Nativo.
              </p>
            </div>
          </div>
        </section>
      </div>

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
      <section className="py-24 w-full bg-[#FFFFFF] dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[14px] uppercase tracking-[4px] leading-[160%] mb-[16px] inline-block font-normal text-[#334155] dark:text-zinc-400">
              TEAM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] dark:text-zinc-100 mb-6">
              Nuestro equipo
            </h2>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* Brands Slider Section */}
      <BrandsSlider />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <div className="relative z-20 w-full overflow-hidden">
        <CtaBanner 
          title={
            <>
              Tu sitio web es clave para tu negocio. <span className="font-[family-name:var(--font-playfair)] font-[450] italic tracking-[-0.02em] text-[#f1f5f9]">Cuídalo</span>
            </>
          }
          description="Evita problemas técnicos, pérdida de ventas y riesgos de seguridad. Nosotros nos encargamos del mantenimiento de tu sitio mientras tú te enfocas en crecer tu negocio."
          buttonText="Solicitar información"
        />
      </div>

    </main>
  );
}

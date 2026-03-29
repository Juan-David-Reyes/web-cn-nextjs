import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CtaBanner } from '@/components/ui/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

// Generar meta tags dinámicos y optimizados para SEO On-Page
export const metadata: Metadata = {
  title: 'Nuestros Servicios | Agencia de Desarrollo Web y SEO | Código Nativo',
  description: 'Descubre nuestros servicios profesionales diseñados para escalar tu negocio: Desarrollo Web a Medida, SEO Técnico, y Mantenimiento Web integral.',
  openGraph: {
    title: 'Nuestros Servicios | Código Nativo',
    description: 'Soluciones digitales completas: Rendimiento extremo, SEO avanzado y diseño centrado en la usabilidad.',
  }
};

import { SERVICES_DATA } from '@/lib/data/services';

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 relative z-10 w-full mx-auto overflow-hidden">
      {/* Header aligned with max-width */}
      <div className="max-w-[1440px] mx-auto w-full px-6 pb-16">
        <div className="text-center mb-16 max-w-3xl mx-auto mt-12 flex flex-col items-center">
          
          <div className="w-full flex justify-center mb-6">
            <Breadcrumbs items={[{ label: 'Nuestros Servicios' }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3DBF15] animate-pulse" />
            Descubre qué hacemos
          </div>
          
          <h1 className="text-4xl md:text-[65px] font-bold text-zinc-900 mb-6 tracking-tight leading-tight">
            Nuestros <span className="text-[#3DBF15]">Servicios</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
            Impulsamos tu negocio con soluciones tecnológicas nativas, rápidas y orientadas 100% a resultados y conversión.
          </p>
        </div>

        {/* Services Grid alternated */}
        <section aria-label="Lista de servicios ofrecidos" className="flex flex-col gap-[calc(var(--spacing)*32)] py-12">
          {SERVICES_DATA.map((service, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div 
                key={service.id} 
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-8 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg text-zinc-600 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>
                  
                  <div className={`flex justify-center ${isReverse ? 'lg:justify-end lg:w-full' : 'lg:justify-start'}`}>
                    <Link 
                      href={`/servicios/${service.slug}`}
                      className="inline-flex items-center gap-3 bg-zinc-900 text-white rounded-[16px] px-8 py-4 text-base font-semibold transition-all duration-300 hover:bg-[#3DBF15] hover:shadow-[0_8px_16px_-6px_rgba(61,191,21,0.4)]"
                    >
                      <span>Ver más detalles</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full max-w-2xl">
                  <div className="relative aspect-[4/3] w-full rounded-[32px] overflow-hidden bg-white shadow-xl shadow-zinc-200/50 border border-zinc-100 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-50 opacity-50 z-0"></div>
                    
                    {/* Placeholder content for the image logic until actual photos are added.
                        Using next/image as requested, with priority on the first LCP element. */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-8 bg-zinc-50/80 backdrop-blur-sm">
                      <span className="text-zinc-400 font-medium text-sm flex flex-col items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                        Espacio de Imagen Decorativa
                      </span>
                    </div>

                    <Image
                      src={service.image}
                      alt={`Ilustración del servicio: ${service.title}`}
                      fill
                      className="object-cover z-20 opacity-0 transition-opacity duration-500 hover:opacity-100" // We hide the missing image visually with opacity 0 if not exist, but let Next render it for SEO markup. Use onLoadingComplete in real scenario. Left like this purposefully for placeholder mechanics.
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* CTA Banner Section (Full Width, Flush to Bottom) */}
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

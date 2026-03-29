import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { TeamGrid } from "@/components/features/nosotros/TeamGrid";
import { BrandsSlider } from "@/components/ui/sections/BrandsSlider";
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

      {/* Banner Image - Parallax */}
      <div className="w-full relative h-[480px] bg-zinc-200 dark:bg-zinc-800 [clip-path:inset(0)]">
        <div className="fixed inset-x-0 top-0 h-[480px]">
          <Image 
            src="/images/fondo-nosotros.webp" 
            alt="Sobre Nosotros: Equipo Código Nativo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Hero Content */}
      <section className="w-full bg-[#FFFFFF] dark:bg-[#0a0a0a] rounded-t-[48px] -mt-12 relative z-10 pt-12 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
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
      </section>


      {/* Team Section */}
      <section className="py-24 w-full bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[14px] uppercase tracking-[4px] leading-[160%] mb-[16px] inline-block font-normal text-[#334155]">
              TEAM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
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

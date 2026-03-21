import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES_DATA } from '@/lib/data/services';
import { ServiceHero } from '@/components/features/services/ServiceHero';
import { ServiceFeatures } from '@/components/features/services/ServiceFeatures';
import { ServiceFaq } from '@/components/features/services/ServiceFaq';
import { CtaBanner } from '@/components/ui/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado | Código Nativo',
    };
  }

  return {
    title: `${service.title} | Código Nativo`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Código Nativo`,
      description: service.shortDescription,
    },
  };
}

// Generate static params so the dynamic pages are generated at build time
export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white relative z-10 w-full mx-auto overflow-hidden">
      
      {/* Global Breadcrumb */}
      <div className="absolute top-[100px] md:top-[120px] left-0 right-0 z-20 flex justify-center w-full">
        <Breadcrumbs items={[
          { label: 'Servicios', href: '/servicios' },
          { label: service.title }
        ]} />
      </div>

      <ServiceHero hero={service.hero} />
      
      <ServiceFeatures features={service.features} />

      <ServiceFaq faqs={service.faqs} />

      {/* CTA Banner Section (Full Width, Flush to Bottom) */}
      <div className="relative z-20 w-full overflow-hidden">
        <CtaBanner 
          title={
            <>
              ¿Listo para dar el siguiente paso con <span className="text-[#3DBF15]">{service.title}</span>?
            </>
          }
          description="Escríbenos hoy y descubramos cómo podemos ayudarte a escalar tu negocio a través de la tecnología y el diseño estratégico."
          buttonText="Agendar asesoría gratis"
        />
      </div>

    </main>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES_DATA } from '@/lib/data/services';
import { ServiceHero } from '@/components/features/services/ServiceHero';
import { ServiceFeatures } from '@/components/features/services/ServiceFeatures';
import { ServiceFaq } from '@/components/features/services/ServiceFaq';
import { CtaBanner } from '@/components/ui/sections/CtaBanner';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

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

export const revalidate = 60; // Regenerate page every 60 seconds

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

  const payload = await getPayload({ config: configPromise });
  const payloadFaqsResult = await payload.find({
    collection: 'service-faqs',
    where: {
      serviceSlug: {
        equals: resolvedParams.slug,
      },
    },
    limit: 100,
  });

  const payloadFaqs = payloadFaqsResult.docs.map(doc => ({
    question: String(doc.question),
    answer: String(doc.answer),
  }));

  return (
    <main className="min-h-screen bg-white relative z-10 w-full mx-auto overflow-hidden">
      <ServiceHero hero={service.hero} />
      
      <ServiceFeatures features={service.features} />

      {payloadFaqs.length > 0 && <ServiceFaq faqs={payloadFaqs} />}

      {/* CTA Banner Section (Full Width, Flush to Bottom) */}
      <div className="relative z-20 w-full overflow-hidden">
        <CtaBanner 
          title={
            <>
              {service.cta.titlePrefix} <span className="font-[family-name:var(--font-playfair)] font-[450] italic tracking-[-0.02em] text-[#f1f5f9]">{service.cta.titleHighlight}</span>
            </>
          }
          description={service.cta.description}
          buttonText="Agendar asesoría gratis"
        />
      </div>

    </main>
  );
}

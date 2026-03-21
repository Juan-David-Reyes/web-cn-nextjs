import { type ServiceData } from '@/lib/data/services';

interface ServiceFaqProps {
  faqs: ServiceData['faqs'];
}

export function ServiceFaq({ faqs }: ServiceFaqProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[#f5f7fa] relative">
      <div className="max-w-[800px] mx-auto w-full px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-zinc-600 font-light">
            Todo lo que necesitas saber sobre este servicio.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white rounded-[24px] border border-zinc-200 shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-8 py-6 text-xl font-medium text-zinc-900 transition-colors hover:text-[#3DBF15]">
                {faq.question}
                <span className="ml-6 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="px-8 pb-8 pt-0 text-zinc-600 font-light leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

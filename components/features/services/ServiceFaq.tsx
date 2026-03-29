'use client';

import { useState } from 'react';
import { type ServiceData } from '@/lib/data/services';

interface ServiceFaqProps {
  faqs: ServiceData['faqs'];
}

export function ServiceFaq({ faqs }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[#f5f7fa] relative">
      <div className="max-w-[800px] mx-auto w-full px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#334155] tracking-tight mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-zinc-600 font-light">
            Todo lo que necesitas saber sobre este servicio.
          </p>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="group border-b border-zinc-200 overflow-hidden"
              >
                <button 
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between cursor-pointer px-4 py-6 md:px-8 text-lg font-medium text-[#334155] transition-colors focus:outline-none"
                >
                  <span className="text-left">{faq.question}</span>
                  <span className={`ml-4 md:ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </span>
                </button>
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-6 md:px-8 md:pb-8 pt-0 text-zinc-600 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

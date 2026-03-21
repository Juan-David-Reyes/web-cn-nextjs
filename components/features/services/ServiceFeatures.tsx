import Image from 'next/image';
import { type ServiceData } from '@/lib/data/services';

interface ServiceFeaturesProps {
  features: ServiceData['features'];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto w-full px-6 flex flex-col gap-24 md:gap-40">
        {features.map((feature, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                isReverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 w-full space-y-8">
                {feature.badge && (
                  <div className="inline-flex items-center px-4 py-2 rounded-xl bg-zinc-100 text-sm font-semibold text-zinc-800">
                    {feature.badge}
                  </div>
                )}
                
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.2]">
                  {feature.title}
                </h2>
                
                <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[32px] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-xl shadow-zinc-200/50 group">
                  {/* Fallback */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="text-zinc-400 text-sm">Feature Image ({feature.image})</span>
                  </div>

                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

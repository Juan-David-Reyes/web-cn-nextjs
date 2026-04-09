const diagnosticos = [
  {
    label: 'Tiempos',
    title: 'Baja tasa de conversión',
    description:
      'El 53% de los usuarios abandona un sitio que tarda más de 3 segundos en cargar. Una web lenta no es solo mala experiencia, es pérdida directa de ventas.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4Zm1 12.586V9a1 1 0 1 0-2 0v8a1 1 0 0 0 .293.707l4 4a1 1 0 0 0 1.414-1.414L17 16.586Z" fill="#1e293b"/>
      </svg>
    ),
  },
  {
    label: 'Capacidad',
    title: 'Performance deficiente',
    description:
      'Si tu visitante no entiende qué hacer en menos de 5 segundos, se va. La claridad visual y la jerarquía de contenido son la diferencia entre un lead y un rebote.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.707 15.293 17 4.586A1 1 0 0 0 15.586 6L25.172 15H5a1 1 0 0 0 0 2h20.172l-9.586 9.586A1 1 0 1 0 17 28l10.707-10.707a1 1 0 0 0 0-1.414Z" fill="#1e293b"/>
      </svg>
    ),
  },
  {
    label: 'Avance',
    title: 'Tecnología obsoleta que no escala',
    description:
      'Una web sin estructura semántica, sin Core Web Vitals óptimos y sin metadatos correctos está invisible para los motores de búsqueda, sin importar qué tan bueno sea tu servicio.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.707 28.293 23.32 21.905A11.959 11.959 0 0 0 26 14C26 7.373 20.627 2 14 2S2 7.373 2 14s5.373 12 12 12a11.959 11.959 0 0 0 7.905-2.68l6.388 6.387a1 1 0 0 0 1.414-1.414ZM4 14C4 8.477 8.477 4 14 4s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14Z" fill="#1e293b"/>
      </svg>
    ),
  },
];

export function DiagnosticoSection() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: 'var(--surface-default)',
        paddingTop: '140px',
        paddingBottom: '140px',
      }}
    >
      <div className="w-full px-6 md:px-12 lg:px-[120px] flex flex-col items-center text-center">
        {/* Pre-title */}
        <span className="text-[14px] uppercase tracking-[4px] leading-[160%] mb-4 inline-block font-normal text-[#334155]">
          Diagnóstico
        </span>

        {/* Headline */}
        <h2 className="font-bold tracking-tight text-[#0f172a] leading-tight max-w-4xl mb-20">
          Una web lenta o un diseño confuso es una{' '}
          <span className="font-serif italic font-normal">
            fuga de dinero silenciosa.
          </span>
        </h2>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {diagnosticos.map((item) => (
            <div key={item.label} className="flex flex-col items-start text-left gap-4">
              {/* Icon box */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--neutral-200)',
                }}
              >
                {item.icon}
              </div>

              {/* Label */}
              <span className="text-[13px] uppercase tracking-[3px] font-medium text-[#334155]">
                {item.label}
              </span>

              {/* Title */}
              <h4 className="font-semibold text-[#0f172a] leading-snug">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-[#475569] leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

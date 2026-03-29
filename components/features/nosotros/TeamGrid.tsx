import Image from "next/image";

export function TeamGrid() {
  const team = [
    {
      name: "Juan David Reyes",
      role: "CEO & Co-founder | Head of Product & Design",
      quote: "La estética es el resultado de una función perfectamente ejecutada.",
      description: "Product Designer especializado en crear arquitecturas digitales donde la usabilidad y la conversión convergen. Con una base técnica en desarrollo Frontend y una mentalidad orientada a producto, lidero el diseño de interfaces (UX/UI) que eliminan la fricción y potencian el rendimiento. Mi valor diferencial radica en la capacidad de integrar diseño de vanguardia con viabilidad técnica, asegurando que cada plataforma sea una herramienta de venta escalable, accesible y optimizada para los objetivos de negocio de nuestros clientes.",
      image: "/images/perfiles-nosotros/Juan-David-Reyes.webp",
      linkedin: "https://www.linkedin.com/in/jdavidreyes/",
      gradient: "from-blue-500 to-[#3dbf15]"
    },
    {
      name: "Daniel Felipe Reyes",
      role: "CEO & Co-founder | Head of Strategy & Growth",
      quote: "No diseño campañas, diseño sistemas de decisión.",
      description: "Psicólogo de formación con una visión profunda del comportamiento del consumidor, transformada en estrategias de crecimiento digital de alto impacto. Como Head de Estrategia en Código Nativo, combino la ciencia del comportamiento con el rigor de los datos para orquestar ecosistemas de adquisición (SEO & Ads) y embudos de conversión (CRO) que no solo atraen clics, sino que construyen relaciones rentables. Mi enfoque es claro: entender el porqué humano para maximizar el cuánto del negocio.",
      image: "/images/perfiles-nosotros/Daniel-Reyes-Opt.webp",
      linkedin: "https://www.linkedin.com/in/daniel-felipe-reyes-aristiz%C3%A1bal-a9945a220/",
      gradient: "from-[#3dbf15] to-emerald-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1050px] mx-auto">
      {team.map((member, idx) => (
        <div key={idx} className="group flex flex-col p-8 rounded-[40px] bg-white border border-zinc-200 text-left hover:border-zinc-300 transition-colors">
          
          <div className="relative w-full aspect-[4/3] md:aspect-square max-h-[350px] mb-8">
            {/* Contenedor de Imagen */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-zinc-200 transition-all duration-300">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between w-full mb-2 gap-4">
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#0A66C2] transition-colors shrink-0" aria-label={`Ver el perfil de LinkedIn de ${member.name}`}>
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
          <p className="text-[0.8rem] md:text-sm uppercase tracking-wider font-semibold text-[#3dbf15] mb-4">{member.role}</p>
          <div className="mb-5 italic text-zinc-700 font-medium text-balance">
            "{member.quote}"
          </div>
          <p className="text-zinc-600 leading-relaxed text-sm">
            {member.description}
          </p>
        </div>
      ))}
    </div>
  );
}

import Link from "next/link";

interface HeroProps {
  data?: {
    title?: string;
    highlight?: string;
    description?: string;
  };
}

export function HeroSection({ data }: HeroProps) {
  const titleText = data?.title || "Excelencia Digital";
  const highlightText = data?.highlight || "Tu Negocio";
  const descriptionText = data?.description || 
    "Transformamos tu visión en soluciones de software de alto impacto. Creamos experiencias únicas, rápidas y escalables con tecnologías de vanguardia.";

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0f172a]">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 -z-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg shadow-purple-900/20">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-sm font-medium text-zinc-300">Innovación continua</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-[65px] lg:text-[80px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
          {titleText} <br className="hidden md:block" />
          para <span className="font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">{highlightText}</span>
          <span className="text-purple-400">.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          {descriptionText}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link 
            href="https://wa.me/xxx" 
            target="_blank"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800 transition-all duration-300 text-white font-medium shadow-lg shadow-black/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-1.08L45,214l10.91-32.74a8,8,0,0,0-1.08-6.54A88,88,0,1,1,128,216Z"></path></svg>
            Chat Now
          </Link>
          <Link 
            href="/contacto" 
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 text-white font-medium shadow-lg shadow-purple-900/20"
          >
            Get A Quote
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
          </Link>
        </div>

        {/* Tech Stack Logos */}
        <div className="mt-24 flex flex-col items-center relative z-20">
          <p className="text-sm text-zinc-500 mb-8 tracking-wider uppercase font-medium">Revolucionando soluciones con las mejores herramientas</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-80 max-w-4xl mx-auto px-4">
            
            {[
              { name: 'Figma', icon: 'figma.svg' },
              { name: 'HTML5', icon: 'html5.svg' },
              { name: 'CSS3', icon: 'css3.svg' },
              { name: 'WordPress', icon: 'wordpress.svg' },
              { name: 'React', icon: 'react.svg' },
              { name: 'TypeScript', icon: 'typescript.svg' },
              { name: 'Node.js', icon: 'node-js.svg' },
              { name: 'Google Analytics', icon: 'google-analytics.svg' }
            ].map((tech) => (
              <div 
                key={tech.name} 
                className="group relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:-translate-y-2 transition-all duration-300"
                title={tech.name}
              >
                {/* Image using native img tag inside the Next relative structure 
                    (Icons are usually pure SVGs under public/images) */}
                <img 
                  src={`/images/herramientas/${tech.icon}`} 
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
                  loading="lazy"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

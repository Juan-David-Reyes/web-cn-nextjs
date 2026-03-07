import Image from "next/image";

export function TeamGrid() {
  const team = [
    {
      name: "Juan David Reyes",
      role: "CEO & Co-founder | Head of Design",
      description: "Soy Product Designer con amplia experiencia en diseño de experiencia e interfaces de usuario (UX/UI) para plataformas web y aplicaciones móviles.",
      initials: "JD",
      gradient: "from-blue-500 to-[#3dbf15]"
    },
    {
      name: "Daniel Reyes",
      role: "CEO & Co-founder | Head of Marketing & Strategy",
      description: "Soy psicólogo de formación, con una trayectoria que me ha permitido comprender a fondo la conducta y las motivaciones humanas, un conocimiento que aplico estratégicamente en el mundo digital.",
      initials: "DR",
      gradient: "from-[#3dbf15] to-emerald-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      {team.map((member, idx) => (
        <div key={idx} className="group flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-[#3dbf15]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3dbf15]/10">
          
          <div className="relative mb-8 w-40 h-40">
            {/* Anillo exterior animado */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${member.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
            
            {/* Avatar Placeholder (o imagen en un futuro) */}
            <div className={`relative h-full w-full rounded-full bg-gradient-to-tr ${member.gradient} p-1`}>
              <div className="h-full w-full rounded-full bg-white dark:bg-zinc-950 flex items-center justify-center">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tr text-zinc-800 dark:text-zinc-200">
                  {member.initials}
                </span>
              </div>
            </div>
            
            {/* Icono flotante adornado (Opcional) */}
            <div className="absolute -bottom-2 -right-2 bg-[#3dbf15] text-white p-2 rounded-full border-4 border-white dark:border-zinc-950 shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2 group-hover:text-[#3dbf15] transition-colors">{member.name}</h3>
          <p className="text-sm uppercase tracking-wider font-semibold text-[#3dbf15] mb-4">{member.role}</p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance">
            {member.description}
          </p>
          
          {/* Social Links (Placeholder) */}
          <div className="flex gap-4 mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <a href="#" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-[#3dbf15] hover:text-white transition-colors">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </a>
          </div>
        </div>
      ))}
    </div>
  );
}

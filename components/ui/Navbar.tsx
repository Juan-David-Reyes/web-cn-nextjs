'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const SERVICES_LINKS = [
  {
    title: "Diseño y desarrollo web",
    desc: "Sitios modernos optimizados.",
    href: "/servicios/diseno-web",
    icon: "/images/icon-services/web-design.svg"
  },
  {
    title: "CRO y Optimización",
    desc: "Rendimiento técnico superior.",
    href: "/servicios/cro-optimizacion",
    icon: "/images/icon-services/optimizacion-web.svg"
  },
  {
    title: "Auditorías SEO/UX",
    desc: "Diagnósticos profundos.",
    href: "/servicios/auditorias",
    icon: "/images/icon-services/auditorias.svg"
  },
  {
    title: "Product design",
    desc: "Experiencias UX intuitivas.",
    href: "/servicios/product-design",
    icon: "/images/icon-services/diseno-ux-ui.svg"
  }
];

const MAIN_LINKS = [
  { title: "Inicio", href: "/" },
  { title: "Nosotros", href: "/nosotros" },
  { title: "Servicios", href: "/servicios" },
  { title: "Blog", href: "/blog" }
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside, { passive: true });
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <>
      <nav className="fixed top-0 md:top-4 left-0 right-0 mx-auto w-full max-w-[900px] h-14 z-50 border border-zinc-800/50 rounded-none md:rounded-[100px] bg-[#040f27] transition-all duration-300">
        <div className="mx-auto pl-6 pr-4 h-full flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0 text-white">
            <Link href="/">
              <div className="w-[120px] h-[40px] relative hover:saturate-150 transition-all duration-300">
                <Image
                  src="/images/logoDarkMode.svg"
                  alt="Código Nativo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 h-full">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-white/70 transition-colors duration-200 text-white"
            >
              Inicio
            </Link>

            <Link 
              href="/nosotros" 
              className="text-sm font-medium hover:text-white/70 transition-colors duration-200 text-white"
            >
              Nosotros
            </Link>

            {/* Servicios Mega Menu Wrapper */}
            <div className="group/menu h-full flex items-center" ref={menuRef}>
              {/* Trigger */}
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-controls="services-dropdown"
                className="flex items-center gap-1 text-sm font-medium hover:text-white/70 transition-colors duration-200 py-2 text-white cursor-pointer"
              >
                Servicios
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              <div 
                id="services-dropdown"
                className={`absolute top-full left-0 w-full pt-2 transition-all duration-300 ease-out z-[60] ${
                  isServicesOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible translate-y-2'
                }`}
              >
                {/* Solid Glassmorphism Board */}
                <div 
                  className="bg-[#040f27] backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col gap-2"
                >
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4" style={{ columnGap: 'calc(var(--spacing) * 2)' }}>
                    {SERVICES_LINKS.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        onClick={() => setIsServicesOpen(false)} 
                        className="group/item p-3 flex items-start gap-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-[54px] h-[54px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-[#00ff8c]/50 group-hover/item:bg-[#00ff8c]/10 transition-all duration-300 shadow-sm relative overflow-hidden">
                          <Image src={link.icon} alt={link.title} fill className="object-contain p-2" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover/item:text-[#00ff8c] transition-colors mb-1">{link.title}</h4>
                          <p className="text-[13px] text-zinc-400 leading-relaxed font-normal">{link.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <Link 
                      href="/servicios" 
                      onClick={() => setIsServicesOpen(false)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors group/all"
                    >
                      Ver todos los servicios
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/all:translate-x-1 transition-transform" aria-hidden="true">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/blog" 
              className="text-sm font-medium hover:text-white/70 transition-colors duration-200 text-white"
            >
              Blog
            </Link>
          </div>
          
          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://calendly.com/codigonativo" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black bg-white hover:bg-neutral-200 px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              Agendar Cita
            </a>
          </div>
          
          {/* Mobile Menu Button  */}
          <div className="md:hidden flex items-center text-white">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-white/70 p-2 transition-colors duration-200" 
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[#0f172a] backdrop-blur-lg pt-24 px-6 transition-all duration-300 md:hidden flex flex-col ${
          isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-lg font-medium text-white">
          {MAIN_LINKS.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-white/10 pb-4 hover:text-[#00ff8c] transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <a 
            href="https://calendly.com/codigonativo" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-center text-sm text-black bg-white hover:bg-neutral-200 px-6 py-3 rounded-full font-bold transition-all duration-300"
          >
            Agendar Cita
          </a>
        </div>
      </div>
    </>
  );
}

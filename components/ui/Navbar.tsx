'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CalendarPopupBtn } from "@/components/features/calendar/CalendarPopupBtn";

const SERVICES_LINKS = [
  {
    title: "Diseño y desarrollo web",
    desc: "Sitios modernos y rápidos, optimizados para convertir.",
    href: "/servicios/diseno-web",
    icon: "/images/icon-services/web-design.svg",
    preview: "/images/icon-services/web-design.svg",
    tag: "Web Dev"
  },
  {
    title: "CRO y Optimización",
    desc: "Mejora tu rendimiento técnico y tasas de conversión.",
    href: "/servicios/cro-optimizacion",
    icon: "/images/icon-services/optimizacion-web.svg",
    preview: "/images/icon-services/optimizacion-web.svg",
    tag: "Performance"
  },
  {
    title: "Auditorías SEO/UX",
    desc: "Diagnósticos profundos para detectar oportunidades.",
    href: "/servicios/auditorias",
    icon: "/images/icon-services/auditorias.svg",
    preview: "/images/icon-services/auditorias.svg",
    tag: "SEO & UX"
  },
  {
    title: "Product design",
    desc: "Experiencias UX/UI intuitivas centradas en el usuario.",
    href: "/servicios/product-design",
    icon: "/images/icon-services/diseno-ux-ui.svg",
    preview: "/images/icon-services/diseno-ux-ui.svg",
    tag: "Design"
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
  const [hoveredService, setHoveredService] = useState(0);
  const pathname = usePathname();
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
      <nav className="fixed top-0 md:top-4 left-0 right-0 mx-auto w-full max-w-[900px] h-14 z-50 border border-zinc-800/50 rounded-none md:rounded-[100px] bg-[var(--neutral-900)] transition-all duration-300">
        <div className="mx-auto pl-6 pr-2 h-full flex items-center justify-between">
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
              className={`font-medium transition-colors duration-200 hover:text-[#f5f7fa] ${pathname === '/' ? 'text-[#f5f7fa]' : 'text-[#94a3b8]'}`}
              style={{ fontSize: '14px' }}
            >
              Inicio
            </Link>

            <Link 
              href="/nosotros" 
              className={`font-medium transition-colors duration-200 hover:text-[#f5f7fa] ${pathname === '/nosotros' ? 'text-[#f5f7fa]' : 'text-[#94a3b8]'}`}
              style={{ fontSize: '14px' }}
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
                className={`flex items-center gap-1 font-medium transition-colors duration-200 py-2 hover:text-[#f5f7fa] cursor-pointer ${pathname.startsWith('/servicios') ? 'text-[#f5f7fa]' : 'text-[#94a3b8]'}`}
                style={{ fontSize: '14px' }}
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
                {/* Split Panel Mega Menu */}
                <div 
                  className="bg-[var(--neutral-900)] backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 220px' }}
                >
                  {/* Left: Service list */}
                  <div className="p-5 flex flex-col gap-1 border-r border-white/[0.07]">
                    {SERVICES_LINKS.map((link, index) => (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        onClick={() => setIsServicesOpen(false)}
                        onMouseEnter={() => setHoveredService(index)}
                        className={`group/item px-4 py-3 flex items-center gap-4 rounded-xl transition-all duration-200 ${
                          hoveredService === index ? 'bg-white/[0.06]' : 'hover:bg-white/[0.04]'
                        }`}
                      >
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 relative overflow-hidden border ${
                          hoveredService === index 
                            ? 'bg-[#00ff8c]/10 border-[#00ff8c]/40' 
                            : 'bg-white/5 border-white/10'
                        }`}>
                          <Image src={link.icon} alt={link.title} fill className="object-contain p-2" />
                        </div>
                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-[14px] font-semibold transition-colors duration-200 ${
                            hoveredService === index ? '!text-[#00ff8c]' : '!text-white'
                          }`}>{link.title}</h4>
                          <p className="text-[13px] text-zinc-500 leading-snug mt-0.5 font-normal">{link.desc}</p>
                        </div>
                        {/* Arrow */}
                        <svg 
                          className={`flex-shrink-0 w-4 h-4 transition-all duration-200 ${
                            hoveredService === index ? 'text-[#00ff8c] translate-x-0 opacity-100' : 'text-zinc-600 -translate-x-1 opacity-0'
                          }`} 
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    ))}

                    {/* Footer link */}
                    <div className="mt-2 pt-3 border-t border-white/[0.07]">
                      <Link 
                        href="/servicios" 
                        onClick={() => setIsServicesOpen(false)}
                        className="inline-flex items-center gap-2 text-[13px] font-medium text-zinc-500 hover:text-white transition-colors group/all px-4 w-full justify-center"
                      >
                        Ver todos los servicios
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/all:translate-x-1 transition-transform" aria-hidden="true">
                          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Right: Service preview image */}
                  <div className="relative flex flex-col items-center justify-center p-6 bg-white/[0.02]">
                    {SERVICES_LINKS.map((link, index) => (
                      <div
                        key={link.href}
                        className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300"
                        style={{
                          opacity: hoveredService === index ? 1 : 0,
                          transform: hoveredService === index ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(6px)',
                          pointerEvents: 'none'
                        }}
                        aria-hidden={hoveredService !== index}
                      >
                        {/* Glow blob */}
                        <div 
                          className="absolute inset-0 rounded-r-2xl"
                          style={{ background: 'radial-gradient(ellipse at center, rgba(0,255,140,0.07) 0%, transparent 70%)' }}
                        />
                        {/* Icon large */}
                        <div className="relative w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl mb-4">
                          <Image src={link.icon} alt={link.title} fill className="object-contain p-4" />
                        </div>
                        {/* Tag chip */}
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#00ff8c]/70 bg-[#00ff8c]/10 border border-[#00ff8c]/20 px-3 py-1 rounded-full mb-2">
                          {link.tag}
                        </span>
                        <p className="text-[11px] text-zinc-500 text-center leading-relaxed">{link.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/blog" 
              className={`font-medium transition-colors duration-200 hover:text-[#f5f7fa] ${pathname.startsWith('/blog') ? 'text-[#f5f7fa]' : 'text-[#94a3b8]'}`}
              style={{ fontSize: '13px' }}
            >
              Blog
            </Link>
          </div>
          
          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <CalendarPopupBtn 
              className="text-white text-[13px] font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-white/10 cursor-pointer bg-transparent border border-white/[0.27] shadow-none"
            >
              Consultoría
            </CalendarPopupBtn>
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
          <CalendarPopupBtn 
            onOpen={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-center text-sm text-black bg-white hover:bg-neutral-200 px-6 py-3 rounded-full font-bold transition-all duration-300"
          >
            Agendar Cita
          </CalendarPopupBtn>
        </div>
      </div>
    </>
  );
}

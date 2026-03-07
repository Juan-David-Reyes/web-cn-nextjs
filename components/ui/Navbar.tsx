'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Background layer: Normal blending, captures the page behind it */}
      <div 
        className="fixed top-0 md:top-4 left-0 right-0 mx-auto w-full max-w-[1440px] h-16 z-40 backdrop-blur-md border border-zinc-800/50 rounded-none md:rounded-[100px] pointer-events-none transition-all duration-300"
        style={{ backgroundColor: '#0f172af2' }}
      />
      
      {/* Content layer: Difference blending removed since background is now dark solid */}
      <nav className="fixed top-0 md:top-4 left-0 right-0 mx-auto w-full max-w-[1440px] h-16 z-50 transition-all duration-300">
        <div className="mx-auto px-6 h-full flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0 text-white">
            <Link href="/">
              <div className="w-[160px] h-[40px] relative hover:saturate-150 transition-all duration-300">
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

            {/* Servicios Mega Menu Wrapper */}
            <div className="relative group/menu h-full flex items-center">
              {/* Trigger */}
              <Link 
                href="/servicios" 
                className="text-sm font-medium hover:text-white/70 transition-colors duration-200 py-6 text-white"
              >
                Servicios
              </Link>

              <div className="absolute top-[64px] left-1/2 -translate-x-1/2 w-[900px] opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible translate-y-2 group-hover/menu:translate-y-0 transition-all duration-300 ease-out z-[60]">
                {/* Solid Glassmorphism Board */}
                <div 
                  className="bg-[#0f172a]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col gap-2"
                >
                  
                  <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                    {/* Item 1 */}
                    <Link href="/servicios/diseno-web" className="group/item p-3 flex items-start gap-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-[#00ff8c]/50 group-hover/item:bg-[#00ff8c]/10 transition-all duration-300 shadow-sm">
                        <svg className="w-6 h-6 text-zinc-300 group-hover/item:text-[#00ff8c] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover/item:text-[#00ff8c] transition-colors mb-1">Diseño y desarrollo web</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-normal">Sitios modernos y optimizados para conversión.</p>
                      </div>
                    </Link>

                    {/* Item 2 */}
                    <Link href="/servicios/mantenimiento-wordpress" className="group/item p-3 flex items-start gap-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-[#00ff8c]/50 group-hover/item:bg-[#00ff8c]/10 transition-all duration-300 shadow-sm">
                        <svg className="w-6 h-6 text-zinc-300 group-hover/item:text-[#00ff8c] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover/item:text-[#00ff8c] transition-colors mb-1">Mantenimiento WP</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-normal">Seguridad y actualizaciones constantes.</p>
                      </div>
                    </Link>

                    {/* Item 3 */}
                    <Link href="/servicios/cro-optimizacion" className="group/item p-3 flex items-start gap-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-[#00ff8c]/50 group-hover/item:bg-[#00ff8c]/10 transition-all duration-300 shadow-sm">
                        <svg className="w-6 h-6 text-zinc-300 group-hover/item:text-[#00ff8c] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover/item:text-[#00ff8c] transition-colors mb-1">CRO & Optimización</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-normal">Velocidad y rendimiento técnico superior.</p>
                      </div>
                    </Link>

                    {/* Item 4 */}
                    <Link href="/servicios/auditorias" className="group/item p-3 flex items-start gap-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-[#00ff8c]/50 group-hover/item:bg-[#00ff8c]/10 transition-all duration-300 shadow-sm">
                        <svg className="w-6 h-6 text-zinc-300 group-hover/item:text-[#00ff8c] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover/item:text-[#00ff8c] transition-colors mb-1">Auditorías SEO/UX</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-normal">Diagnóstico completo de tu sitio web.</p>
                      </div>
                    </Link>

                    {/* Item 5 */}
                    <Link href="/servicios/product-design" className="group/item p-3 flex items-start gap-4 rounded-xl hover:bg-white/5 transition-all duration-300 col-span-1">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-[#00ff8c]/50 group-hover/item:bg-[#00ff8c]/10 transition-all duration-300 shadow-sm">
                        <svg className="w-6 h-6 text-zinc-300 group-hover/item:text-[#00ff8c] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover/item:text-[#00ff8c] transition-colors mb-1">Product design</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-normal">Experiencias intuitivas centradas en el usuario.</p>
                      </div>
                    </Link>
                  </div>

                  {/* Footer link */}
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <Link 
                      href="/servicios" 
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors group/all"
                    >
                      Ver todos los servicios
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/all:translate-x-1 transition-transform">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/nosotros" 
              className="text-sm font-medium hover:text-white/70 transition-colors duration-200 text-white"
            >
              Nosotros
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium hover:text-white/70 transition-colors duration-200 text-white"
            >
              Blog
            </Link>
          </div>
          
          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contacto" 
              className="text-sm text-black bg-white hover:bg-neutral-200 px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              Contacto
            </Link>
          </div>
          
          {/* Mobile Menu Button  */}
          <div className="md:hidden flex items-center text-white">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-white/70 p-2 transition-colors duration-200" 
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0f172a] backdrop-blur-lg pt-24 px-6 transition-all duration-300 md:hidden flex flex-col ${
          isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-lg font-medium text-white">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-b border-white/10 pb-4 hover:text-[#00ff8c] transition-colors"
          >
            Inicio
          </Link>
          <Link 
            href="/servicios" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-b border-white/10 pb-4 hover:text-[#00ff8c] transition-colors"
          >
            Servicios
          </Link>
          <Link 
            href="/nosotros" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-b border-white/10 pb-4 hover:text-[#00ff8c] transition-colors"
          >
            Nosotros
          </Link>
          <Link 
            href="/blog" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-b border-white/10 pb-4 hover:text-[#00ff8c] transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/contacto" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-center text-sm text-black bg-white hover:bg-neutral-200 px-6 py-3 rounded-full font-bold transition-all duration-300"
          >
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}

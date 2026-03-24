"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    let ticking = false;
    let isDesktop = window.innerWidth >= 1024;
    let cachedDocHeight = 0;
    let cachedWinHeight = 0;
    let cachedFooterHeight = 0;

    const updateDimensions = () => {
      isDesktop = window.innerWidth >= 1024;
      cachedWinHeight = window.innerHeight;
      cachedDocHeight = document.documentElement.scrollHeight;
      
      if (footerRef.current) {
        cachedFooterHeight = footerRef.current.offsetHeight;
        // Solo actualizamos React state si cambia, para el spacer inicial
        setFooterHeight((prev) => Math.abs(prev - cachedFooterHeight) > 10 ? cachedFooterHeight : prev);
      }

      if (!isDesktop && contentRef.current) {
        contentRef.current.style.transform = 'none';
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }
    resizeObserver.observe(document.body);

    const handleScroll = () => {
      if (!contentRef.current || !isDesktop) return;
      
      const scrollY = window.scrollY;
      const distanceToBottom = cachedDocHeight - (scrollY + cachedWinHeight);
      
      let newOffset = 200;
      if (distanceToBottom < cachedFooterHeight) {
        const progress = 1 - (distanceToBottom / cachedFooterHeight);
        newOffset = 200 * (1 - Math.min(1, Math.max(0, progress)));
      }
      
      contentRef.current.style.transform = `translate3d(0, ${newOffset}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('resize', updateDimensions, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Spacer to allow scrolling past the main content into the fixed footer */}
      <div style={{ height: Math.max(footerHeight, 460) }} className="w-full pointer-events-none hidden lg:block" />
      
      <footer 
        ref={footerRef}
        className="relative lg:fixed bottom-0 left-0 w-full min-h-[460px] flex flex-col bg-white pt-16 pb-4 text-neutral-600 dark:bg-neutral-950 dark:border-neutral-900/50 dark:text-neutral-300 z-0"
      >
        <div 
          ref={contentRef}
          className="container mx-auto px-4 max-w-[1440px] will-change-transform transform-gpu flex-1 flex flex-col justify-between"
          style={{ transform: 'none' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-8 md:mb-16">
          
          {/* Brand & Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image 
                src="/images/logoLightMode.svg" 
                alt="Logo" 
                width={140} 
                height={44} 
              />
            </Link>
            
            <p className="text-neutral-600 leading-relaxed max-w-full md:max-w-sm dark:text-neutral-400 text-[14px]">
              En <strong className="text-neutral-900 font-semibold dark:text-white">Código Nativo</strong> creamos experiencias digitales inolvidables para tus usuarios, con un enfoque en la usabilidad, el diseño intuitivo y la optimización del rendimiento.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <h4 className="text-neutral-900 font-semibold mb-3 dark:text-white ">Certificados en:</h4>
              <a 
                href="https://www.credential.net/6e48a1a4-101e-4b2e-a9e9-475150e8f2ec" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Google Analytics Certification - Verificar credencial"
                className="inline-block hover:scale-105 transition-transform duration-300"
              >
                <Image 
                  src="https://pdf.ms.credential.net/badge/image?env=production&credential=d4owsyfx" 
                  alt="Google Analytics Certification" 
                  width={70} 
                  height={70}
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-8 mt-4 lg:mt-0">
            
            {/* Nav Column 1 */}
            <div className="border-b border-neutral-200 dark:border-neutral-800/50 md:border-none">
              <h3 
                onClick={() => toggleMenu('nav')}
                className="text-[16px] font-semibold text-neutral-900 py-4 md:py-0 md:mb-6 flex items-center justify-between cursor-pointer md:cursor-auto dark:text-white select-none"
              >
                Navegación
                <svg className={`w-5 h-5 text-neutral-400 transition-transform duration-300 md:hidden ${openMenu === 'nav' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h3>
              <div className={`grid transition-all duration-300 ease-in-out md:!grid-rows-[1fr] ${openMenu === 'nav' ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0 md:opacity-100 md:mb-0'}`}>
                <ul className="flex flex-col gap-2 text-[14px] overflow-hidden md:pb-0">
                  <li><Link href="/" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">Inicio</Link></li>
                  <li><Link href="/nosotros" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">Nosotros</Link></li>
                  <li><Link href="/blog" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">Blog</Link></li>
                  <li><Link href="/servicios" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">Servicios</Link></li>
                </ul>
              </div>
            </div>

            {/* Nav Column 2 */}
            <div className="border-b border-neutral-200 dark:border-neutral-800/50 md:border-none">
              <h3 
                onClick={() => toggleMenu('services')}
                className="text-[16px] font-semibold text-neutral-900 py-4 md:py-0 md:mb-6 flex items-center justify-between cursor-pointer md:cursor-auto dark:text-white select-none"
              >
                Servicios
                <svg className={`w-5 h-5 text-neutral-400 transition-transform duration-300 md:hidden ${openMenu === 'services' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h3>
              <div className={`grid transition-all duration-300 ease-in-out md:!grid-rows-[1fr] ${openMenu === 'services' ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0 md:opacity-100 md:mb-0'}`}>
                <ul className="flex flex-col gap-2 text-[14px] overflow-hidden md:pb-0">
                  <li><Link href="/servicios/diseno-web" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">Diseño y desarrollo Web</Link></li>
                  <li><Link href="/servicios/cro-optimizacion" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">CRO & Optimización</Link></li>
                  <li><Link href="/servicios/product-design" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">Product Design UX/UI</Link></li>
                  <li><Link href="/servicios/auditorias" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">Auditoría SEO/UX</Link></li>
                </ul>
              </div>
            </div>

            {/* Nav Column 3 */}
            <div>
              <h3 
                onClick={() => toggleMenu('contact')}
                className="text-[16px] font-semibold text-neutral-900 py-4 md:py-0 md:mb-6 flex items-center justify-between cursor-pointer md:cursor-auto dark:text-white select-none"
              >
                Hablemos
                <svg className={`w-5 h-5 text-neutral-400 transition-transform duration-300 md:hidden ${openMenu === 'contact' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h3>
              <div className={`grid transition-all duration-300 ease-in-out md:!grid-rows-[1fr] ${openMenu === 'contact' ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0 md:opacity-100 md:mb-0'}`}>
                <ul className="flex flex-col gap-2 text-[14px] overflow-hidden md:pb-0">
                  <li className="flex gap-1">
                    <span className="text-neutral-800 font-semibold">Email:</span>
                    <a href="mailto:contacto@codigonativo.com" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-300">contacto@codigonativo.com</a>
                  </li>
                  <li className="flex gap-1">
                    <span className="text-neutral-800 font-semibold">WhatsApp:</span>
                    <a href="https://wa.me/573126357309" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-300">(+57) 312 6357309</a>
                  </li>
                  <li className="flex gap-1">
                    <span className="text-neutral-800 font-semibold">Ubicación:</span>
                    <address className="not-italic text-[#64748b] dark:text-neutral-300">Calle 66C # 60 - 65,<br/>Bogotá D.C., Colombia.</address>
                  </li>
                  <li className="flex gap-1 mt-2">
                    <span className="text-neutral-800 font-semibold">Social:</span>
                    <a href="https://www.linkedin.com/company/codigonativo" target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:text-neutral-400">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-4 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 dark:border-neutral-900/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p><strong className="text-neutral-900 font-medium dark:text-neutral-400">© 2026 Código Nativo</strong>. Todos los derechos reservados.</p>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-800">|</span>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2 sm:mt-0">
              <Link href="/politicas-de-privacidad" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:hover:text-neutral-300">Privacidad</Link>
              <Link href="/terminos-y-condiciones" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:hover:text-neutral-300">Términos</Link>
              <Link href="/politica-de-cookies" className="text-[#64748b] hover:underline underline-offset-4 transition-all dark:hover:text-neutral-300">Cookies</Link>
            </div>
          </div>
          <div className="text-center md:text-right text-[#334155] font-medium dark:text-[#A2EB2F]/70">
            Diseño y Desarrollo Web en Colombia y Latam.
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

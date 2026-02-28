import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="w-[160px] h-[40px] relative hover:saturate-150 transition-all duration-300">
              <Image
                src="/images/logoLightMode.svg"
                alt="Código Nativo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link 
            href="/servicios" 
            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200"
          >
            Servicios
          </Link>
          <Link 
            href="/nosotros" 
            className="text-sm text-zinc-300 hover:text-white transition-colors duration-200"
          >
            Nosotros
          </Link>
        </div>
        
        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/contacto" 
            className="text-sm text-white bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Contacto
          </Link>
        </div>
        
        {/* Mobile Menu Button (Minimal placeholder for now) */}
        <div className="md:hidden flex items-center">
          <button className="text-zinc-300 hover:text-white p-2" aria-label="Abrir menú">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 px-6">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-center shadow-lg shadow-zinc-200/50 dark:shadow-none">
        
        {/* Icon */}
        <div className="w-20 h-20 mx-auto bg-red-100 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold tracking-tight mb-3">Algo no salió como esperábamos</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed text-sm">
          Ha ocurrido un error inesperado al cargar esta sección. Puedes intentar de nuevo o volver a la página principal.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 text-white text-sm font-semibold transition-colors"
          >
            Reintentar
          </button>
          
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-transparent text-zinc-900 dark:text-white text-sm font-semibold transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

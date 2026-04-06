import { getPayload } from "payload";
import configPromise from "@payload-config";
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Código Nativo",
  description: "Lee nuestra política sobre el uso de cookies.",
};

export default async function CookiesPolicyPage() {
  const payload = await getPayload({ config: configPromise });
  
  // Fetch data dynamically from Payload CMS (Singleton)
  const data = await payload.findGlobal({ slug: "cookies-policy" });
  
  return (
    <main className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 selection:bg-[#3dbf15]/30 overflow-hidden relative z-10 w-full pt-32 pb-24">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {data.breadcrumb ? (
              <span dangerouslySetInnerHTML={{ __html: data.breadcrumb.split('>').map((s: string, i: number, arr: string[]) => i === arr.length - 1 ? `<span class="text-zinc-900 dark:text-zinc-100">${s.trim()}</span>` : `<a href="/" class="hover:text-[#3dbf15] transition-colors">${s.trim()}</a>`).join(' <span class="mx-2 text-zinc-300 dark:text-zinc-700">/</span> ') }} />
            ) : (
              <>
                <Link href="/" className="hover:text-[#3dbf15] transition-colors">Inicio</Link>
                <span className="mx-2 text-zinc-300 dark:text-zinc-700">/</span>
                <span className="text-zinc-900 dark:text-zinc-100">Política de Cookies</span>
              </>
            )}
          </p>
        </nav>

        {/* Header */}
        <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="font-bold tracking-tight text-balance">
            {data.title || 'Política de Cookies'}
          </h1>
          <div className="w-20 h-1 bg-[#3dbf15] rounded-full mt-6"></div>
        </header>

        {/* Content (Rich Text) */}
        <div className="rich-text prose prose-zinc dark:prose-invert max-w-none">
          {data.content ? (
             <RichText data={data.content} />
          ) : (
            <p className="text-zinc-500 italic">No hay contenido configurado. Por favor ingresa a Payload CMS e inserta tu política de cookies.</p>
          )}
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import { PostCard } from '@/components/features/blog/PostCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBanner } from '@/components/ui/sections/CtaBanner';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { BlogPagination } from '@/components/features/blog/BlogPagination';

export const metadata: Metadata = {
  title: 'Blog y Recursos | Código Nativo',
  description: 'Artículos y Novedades sobre Diseño Web, SEO y Marketing Digital.',
};

export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const resolvedSearchParams = await searchParams;
  const pageParam = typeof resolvedSearchParams.page === 'string' ? resolvedSearchParams.page : '1';
  const currentPage = parseInt(pageParam, 10) || 1;
  const limit = 18;

  const payload = await getPayload({ config: configPromise });
  const postsData = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'publish',
      },
    },
    sort: '-publishedDate',
    limit,
    page: currentPage,
  });

  const { totalPages, hasNextPage, hasPrevPage } = postsData;

  const POSTS = postsData.docs.map((doc: any) => ({
    id: doc.id,
    title: doc.title,
    slug: doc.slug,
    category: doc.category,
    publishedDate: doc.publishedDate,
    excerpt: doc.excerpt,
    featuredImage: doc.featuredImage,
  }));

  return (
    <main className="min-h-screen bg-[#f5f7fa] pt-32 relative z-10 w-full mx-auto overflow-hidden">
      {/* Container aligned with max-width */}
      <div className="max-w-[1440px] mx-auto w-full px-6 pb-24">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto mt-12 flex flex-col items-center">
          
          {/* Breadcrumb Global */}
          <div className="w-full flex justify-center mb-6">
            <Breadcrumbs items={[{ label: 'Blog y Recursos' }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3DBF15] animate-pulse" />
            Novedades y guías
          </div>
          
          <h1 className="text-4xl md:text-[65px] font-bold text-zinc-900 mb-6 tracking-tight leading-tight">
            Blog y <span className="text-[#3DBF15]">Recursos</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
            Descubre artículos, estrategias y las últimas tendencias sobre Desarrollo Web, Mantenimiento WP, Emprendimiento y SEO Técnico.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 px-4">
          <button className="bg-slate-700 text-white rounded-[16px] px-5 py-3 text-sm font-medium transition-all duration-500 cursor-pointer hover:shadow-[0_11px_16px_-10px_#d4afff]">
            Ver todos
          </button>
          
          <button className="flex items-center gap-2 bg-white text-slate-700 rounded-[16px] px-5 py-3 text-sm font-medium transition-all duration-500 cursor-pointer hover:shadow-[0_11px_16px_-10px_#d4afff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 flex-shrink-0">
              <defs>
                <linearGradient id="SVGpFOXGdpp" x1="62.102%" x2="108.197%" y1="0%" y2="37.864%"><stop offset="0%" stopColor="#4285eb"></stop><stop offset="100%" stopColor="#2ec7ff"></stop></linearGradient>
                <linearGradient id="SVG0Zta6duI" x1="69.644%" x2="54.043%" y1="0%" y2="108.457%"><stop offset="0%" stopColor="#29cdff"></stop><stop offset="37.86%" stopColor="#148eff"></stop><stop offset="100%" stopColor="#0a60ff"></stop></linearGradient>
                <linearGradient id="SVGmVk7Keuh" x1="69.691%" x2="16.723%" y1="-12.974%" y2="117.391%"><stop offset="0%" stopColor="#fa816e"></stop><stop offset="41.473%" stopColor="#f74a5c"></stop><stop offset="100%" stopColor="#f51d2c"></stop></linearGradient>
                <linearGradient id="SVGzo0qGUPO" x1="68.128%" x2="30.44%" y1="-35.691%" y2="114.943%"><stop offset="0%" stopColor="#fa8e7d"></stop><stop offset="51.264%" stopColor="#f74a5c"></stop><stop offset="100%" stopColor="#f51d2c"></stop></linearGradient>
              </defs>
              <g fill="none">
                <path fill="url(#SVGpFOXGdpp)" d="M116.85 4.545L4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568s-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c1.503-1.501 3.784-1.501 5.287 0l35.702 35.673c5.408 5.404 14.176 5.404 19.584 0s5.408-14.164 0-19.568l-47.09-47.05c-6.063-5.904-15.82-5.856-21.835.154"></path>
                <path fill="url(#SVG0Zta6duI)" d="M116.85 4.545L4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568s-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c3.742-3.226 9.849-9.76 18.815-11.29q9.996-1.703 21.857 7.5L138.686 4.39c-6.064-5.903-15.82-5.855-21.836.155"></path>
                <path fill="url(#SVGmVk7Keuh)" d="M196.647 173.754c5.408 5.404 14.176 5.404 19.584 0l34.739-34.71a15.396 15.396 0 0 0 0-21.812l-35.041-34.89c-5.421-5.397-14.192-5.389-19.603.018c-5.408 5.404-5.408 14.164 0 19.568l23.667 23.648c1.503 1.502 1.503 3.781 0 5.283l-23.346 23.327c-5.408 5.404-5.408 14.165 0 19.568"></path>
                <ellipse cx="128.327" cy="128.242" fill="url(#SVGzo0qGUPO)" rx="30.327" ry="30.302"></ellipse>
              </g>
            </svg>
            Diseño Web
          </button>
          
          <button className="flex items-center gap-2 bg-white text-slate-700 rounded-[16px] px-5 py-3 text-sm font-medium transition-all duration-500 cursor-pointer hover:shadow-[0_11px_16px_-10px_#d4afff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="w-4 h-4 flex-shrink-0">
              <g fill="none">
                <path fill="#fff" d="M5.5 3.312a3.25 3.25 0 0 0-1.436 3.9c.12.335.48.503.824.412c1.737-.46 3.505-1.705 4.58-2.675c.284-.257.343-.687.09-.975A3.25 3.25 0 0 0 5.5 3.312"></path>
                <path fill="#d7e0ff" fillRule="evenodd" d="M9.5 11v3h-5v-3.1a5.5 5.5 0 1 1 8-4.9v4a1 1 0 0 1-1 1zM4.064 7.212a3.248 3.248 0 0 1 5.494-3.238c.253.288.195.718-.09.975c-1.075.97-2.843 2.215-4.58 2.675a.68.68 0 0 1-.824-.412" clipRule="evenodd"></path>
                <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M9.5 13.5V11h2a1 1 0 0 0 1-1V6a5.5 5.5 0 1 0-8 4.9v2.6" strokeWidth="1"></path>
                <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M5.5 3.312a3.25 3.25 0 0 0-1.436 3.9c.12.335.48.503.824.412c1.737-.46 3.505-1.705 4.58-2.675c.285-.257.343-.687.09-.975A3.25 3.25 0 0 0 5.5 3.312" strokeWidth="1"></path>
              </g>
            </svg>
            Emprendimiento
          </button>
          
          <button className="flex items-center gap-2 bg-white text-slate-700 rounded-[16px] px-5 py-3 text-sm font-medium transition-all duration-500 cursor-pointer hover:shadow-[0_11px_16px_-10px_#d4afff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 flex-shrink-0">
              <defs>
                <linearGradient id="SVGCmOW1cKl" x1="0%" x2="99.999%" y1="50%" y2="50%">
                  <stop offset="0%" stopColor="#246fdb"></stop>
                  <stop offset="5.52%" stopColor="#2973df"></stop>
                  <stop offset="27.81%" stopColor="#377deb"></stop>
                  <stop offset="54.91%" stopColor="#3f83f2"></stop>
                  <stop offset="100%" stopColor="#4285f4"></stop>
                </linearGradient>
              </defs>
              <path fill="#ea4335" d="M173.2 82.8c25 25 25 65.5 0 90.5c-12.5 12.5-12.5 32.8 0 45.2c12.5 12.5 32.8 12.5 45.3 0c50-50 50-131 0-181z"></path>
              <path fill="url(#SVGCmOW1cKl)" d="M218.4 37.5c-50-50-130.9-50-180.9 0s-50 131 0 181l45.3-45.2c-25-25-25-65.5 0-90.5s65.5-25 90.5 0c12.5 12.5 32.8 12.5 45.3 0c12.3-12.5 12.3-32.8-.2-45.3"></path>
              <path fill="#fbbc04" d="m218.4 218.5l-45.3-45.2c-25 25-65.5 25-90.5 0l-45.3 45.2c50.2 50 131.1 50 181.1 0"></path>
              <path fill="#ea4335" d="M173.2 173.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.8 0 45.3s-32.7 12.5-45.2 0s-12.5-32.8 0-45.3"></path>
              <path fill="#34a853" d="M37.5 173.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.8 0 45.3s-32.7 12.5-45.2 0s-12.5-32.8 0-45.3"></path>
            </svg>
            Marketing Digital
          </button>
          
          <button className="flex items-center gap-2 bg-white text-slate-700 rounded-[16px] px-5 py-3 text-sm font-medium transition-all duration-500 cursor-pointer hover:shadow-[0_11px_16px_-10px_#d4afff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 284" className="w-4 h-4 flex-shrink-0">
              <path fill="#f9ab00" d="M256.003 247.933a35.224 35.224 0 0 1-39.376 35.161c-18.044-2.67-31.266-18.371-30.826-36.606V36.845C185.365 18.591 198.62 2.881 216.687.24a35.22 35.22 0 0 1 39.316 35.16z"></path>
              <path fill="#e37400" d="M35.101 213.193c19.386 0 35.101 15.716 35.101 35.101c0 19.386-15.715 35.101-35.101 35.101S0 267.68 0 248.295s15.715-35.102 35.101-35.102m92.358-106.387c-19.477 1.068-34.59 17.406-34.137 36.908v94.285c0 25.588 11.259 41.122 27.755 44.433a35.16 35.16 0 0 0 42.146-34.56V142.089a35.22 35.22 0 0 0-35.764-35.282"></path>
            </svg>
            SEO
          </button>
          
          <button className="flex items-center gap-2 bg-white text-slate-700 rounded-[16px] px-5 py-3 text-sm font-medium transition-all duration-500 cursor-pointer hover:shadow-[0_11px_16px_-10px_#d4afff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="w-4 h-4 flex-shrink-0">
              <g fill="none">
                <path fill="#d7e0ff" d="M10.5 2.5h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></path>
                <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M10.5 2.5h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-8 6.333H.679m12.642 0H11.5m-9-3.666H.679m12.642 0H11.5M5.167 2.5V.679m0 12.642V11.5m3.666-9V.679m0 12.642V11.5" strokeWidth="1"></path>
                <path fill="#fff" d="M4.667 7.25c-.281-.048-.281-.452 0-.5a2.55 2.55 0 0 0 2.05-1.965l.018-.077c.06-.278.457-.28.52-.003l.02.09a2.56 2.56 0 0 0 2.057 1.953c.283.05.283.455 0 .504a2.56 2.56 0 0 0-2.057 1.952l-.02.09c-.063.278-.46.276-.52-.002l-.017-.077a2.55 2.55 0 0 0-2.051-1.964Z"></path>
                <path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M4.667 7.25c-.281-.048-.281-.452 0-.5a2.55 2.55 0 0 0 2.05-1.965l.018-.077c.06-.278.457-.28.52-.003l.02.09a2.56 2.56 0 0 0 2.057 1.953c.283.05.283.455 0 .504a2.56 2.56 0 0 0-2.057 1.952l-.02.09c-.063.278-.46.276-.52-.002l-.017-.077a2.55 2.55 0 0 0-2.051-1.964Z" strokeWidth="1"></path>
              </g>
            </svg>
            Tecnología
          </button>
        </div>

        {/* Grid of Posts */}
        <section aria-label="Artículos del blog" className="pb-24">
          
          {/* Mobile Grid (1 column) */}
          <div className="flex flex-col gap-8 md:hidden">
            {POSTS.map((post, index) => (
               <div key={post.id} className={`w-full ${index % 2 === 0 ? "h-[470px]" : "h-[300px]"}`}>
                 <PostCard post={post} />
               </div>
            ))}
          </div>

          {/* Tablet Grid (2 columns) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 items-start">
            {[0, 1].map((colIndex: number) => (
              <div key={colIndex} className="flex flex-col gap-8">
                {POSTS.filter((_: any, i: number) => i % 2 === colIndex).map((post: any) => {
                  const originalIndex = POSTS.indexOf(post);
                  return (
                    <div key={post.id} className={`w-full ${originalIndex % 2 === 0 ? "h-[470px]" : "h-[300px]"}`}>
                      <PostCard post={post} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Desktop Grid (3 columns) */}
          <div className="hidden lg:grid grid-cols-3 gap-8 items-start">
            {[0, 1, 2].map((colIndex: number) => (
              <div key={colIndex} className="flex flex-col gap-8">
                {POSTS.filter((_: any, i: number) => i % 3 === colIndex).map((post: any) => {
                  const originalIndex = POSTS.indexOf(post);
                  return (
                    <div key={post.id} className={`w-full ${originalIndex % 2 === 0 ? "h-[470px]" : "h-[300px]"}`}>
                      <PostCard post={post} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

        </section>

        {totalPages > 1 && (
          <BlogPagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
          />
        )}
      </div>

      {/* CTA Banner Section (Full Width, Flush to Bottom) */}
      <div className="relative z-20 w-full overflow-hidden">
        <CtaBanner />
      </div>
    </main>
  );
}

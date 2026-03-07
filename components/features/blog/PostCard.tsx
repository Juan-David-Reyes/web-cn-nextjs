import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: string | number;
  category?: string | null;
  publishedDate?: string | null;
  title: string;
  excerpt?: string | null;
  slug: string;
  featuredImage?: any;
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group relative flex flex-col h-full bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:border-[#3DBF15]/50 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(61,191,21,0.15)] hover:-translate-y-1">
      {/* Image Container Dummy */}
      <div className="relative w-full aspect-[4/3] bg-zinc-100 overflow-hidden flex items-center justify-center border-b border-zinc-100">
        
        {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url ? (
          <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-out">
            <Image 
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-zinc-200/50 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center relative">
            <Image 
              src="/images/logoDarkMode.svg" 
              alt="Código Nativo Placeholder"
              width={120}
              height={40}
              className="opacity-20 grayscale brightness-0"
            />
          </div>
        )}
        
        <div className="absolute top-5 left-5 z-20">
          <span className="px-3.5 py-1.5 text-[11px] font-bold text-white bg-zinc-900/90 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-widest shadow-md">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-zinc-500 mb-4 font-semibold uppercase tracking-widest">
          <span>
            {post.publishedDate
              ? new Date(post.publishedDate).toLocaleDateString('es-ES', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })
              : 'Sin fecha'}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-zinc-900 mb-4 leading-snug group-hover:text-[#3DBF15] transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-8 flex-grow">
          {post.excerpt || 'Sin resumen disponible'}
        </p>

        <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#3DBF15] group/btn">
          Leer artículo
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1.5 transition-transform duration-300">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}

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

export function PostCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  // Calculte reading time roughly based on excerpt length or default to 4 min
  const readingTime = post.excerpt ? Math.max(1, Math.ceil(post.excerpt.split(' ').length / 50)) : 4;

  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group flex flex-col w-full h-full overflow-hidden transition-all duration-300 relative rounded-2xl"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full bg-zinc-900 overflow-hidden z-0">
        {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url ? (
          <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-in-out">
            <Image 
              src={post.featuredImage.url.replace(/^http:\/\/localhost:300[0-9]/, '').replace(/^http:\/\/127\.0\.0\.1:300[0-9]/, '')}
              alt={post.featuredImage.alt || post.title}
              fill
              priority={priority}
              className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-in-out flex items-center justify-center relative">
            <Image 
              src="/images/logoDarkMode.svg" 
              alt="Código Nativo Placeholder"
              width={120}
              height={40}
              className="opacity-10 grayscale brightness-0"
            />
          </div>
        )}
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Content Container (Overlay) */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
        
        <div className="mt-auto w-full">
          {/* Meta Info: Date & Reading Time */}
          <div className="flex items-center gap-3 text-xs text-zinc-300 mb-4 font-medium tracking-wide">
            <span>
              {post.publishedDate
                ? new Date(post.publishedDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'August 5, 2024'}
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
            <span>
               {readingTime} min read
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-[24px] font-bold text-white mb-6 leading-tight transition-colors duration-300 line-clamp-3">
            {post.title}
          </h3>
          
          {/* Tags / Categories (Badges - Glassmorphic) */}
          <div className="flex flex-wrap gap-2">
            <span className="text-white font-normal bg-white/20 backdrop-blur-md px-[14px] py-[4px] rounded-full text-[14px] capitalize tracking-normal">
               {post.category || 'Recursos'}
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
}

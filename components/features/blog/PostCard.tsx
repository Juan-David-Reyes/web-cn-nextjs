import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: string | number;
  category?: string | null;
  publishedDate?: string | null;
  title: string;
  slug: string;
  featuredImage?: any;
}

export function PostCard({ post, priority = false, className = '' }: { post: Post; priority?: boolean; className?: string }) {
  const readingTime = 4;

  const formattedDate = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'August 5, 2024';

  return (
    <article className={`group flex flex-col w-full overflow-hidden transition-all duration-300 relative rounded-2xl ${className}`}>
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col h-full"
        aria-label={post.title}
      >
        {/* Background Image */}
        <figure className="absolute inset-0 w-full h-full bg-zinc-900 overflow-hidden z-0 m-0">
          {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url ? (
            <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-in-out">
              <Image
                src={post.featuredImage.url.replace(/^http:\/\/localhost:300[0-9]/, '').replace(/^http:\/\/127\.0\.0\.1:300[0-9]/, '')}
                alt={post.featuredImage.alt || post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority}
                className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
            </div>
          ) : (
            <div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-in-out flex items-center justify-center relative">
              <Image
                src="/images/logoDarkMode.svg"
                alt=""
                aria-hidden="true"
                width={120}
                height={40}
                className="opacity-10 grayscale brightness-0 w-auto h-auto"
              />
            </div>
          )}
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" aria-hidden="true" />
        </figure>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 mt-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-zinc-300 mb-4 font-medium tracking-wide">
            <time dateTime={post.publishedDate || ''}>{formattedDate}</time>
            <span className="w-1 h-1 rounded-full bg-zinc-500" aria-hidden="true" />
            <span>{readingTime} min read</span>
          </div>

          <h3 className="text-[24px] font-bold !text-[#F1F5F9] mb-6 leading-tight line-clamp-3">
            {post.title}
          </h3>

          {/* Category */}
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            <li>
              <span className="text-white font-normal bg-white/20 backdrop-blur-md px-[14px] py-[4px] rounded-full text-[14px] capitalize tracking-normal">
                {post.category || 'Recursos'}
              </span>
            </li>
          </ul>
        </div>
      </Link>
    </article>
  );
}

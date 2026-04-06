import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import Image from 'next/image';
import { CtaBanner } from '@/components/ui/sections/CtaBanner';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { ShareButtons } from '@/components/features/blog/ShareButtons';
import { PostCard } from '@/components/features/blog/PostCard';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  const postsData = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  const post = postsData.docs[0];

  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  const meta = post.meta || {};

  return {
    title: meta.title || `${post.title} | Código Nativo`,
    description: meta.description || 'Artículo técnico por Código Nativo.',
    openGraph: {
      title: meta.title || `${post.title} | Código Nativo`,
      description: meta.description || 'Artículo técnico por Código Nativo.',
      images: meta.image && typeof meta.image === 'object' && meta.image.url ? [
        {
          url: meta.image.url,
          width: 1200,
          height: 630,
          alt: meta.image.alt || meta.title || post.title,
        }
      ] : post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url ? [
        {
          url: post.featuredImage.url,
          width: 1200,
          height: 630,
          alt: post.featuredImage.alt || post.title,
        }
      ] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  
  const postsData = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'publish',
      },
    },
    limit: 1,
  });

  const post = postsData.docs[0];

  let relatedPosts: any[] = [];
  if (post && post.category) {
    const relatedData = await payload.find({
      collection: 'posts',
      where: {
        and: [
          {
            category: {
              equals: post.category,
            },
          },
          {
            slug: {
              not_equals: slug,
            },
          },
          {
            status: {
              equals: 'publish',
            },
          },
        ],
      },
      limit: 3,
      sort: '-publishedDate',
    });
    relatedPosts = relatedData.docs;
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 relative z-10 w-full mx-auto">
      
      <div className="max-w-[1000px] mx-auto w-full px-6 pb-24 flex flex-col lg:flex-row gap-8 lg:gap-12 relative lg:items-start lg:min-h-screen">
        
        {/* Sticky Sidebar with Share Buttons */}
        <aside className="lg:w-16 flex-shrink-0 lg:sticky lg:top-40 hidden lg:flex flex-col items-center z-20">
            <ShareButtons title={post.title} slug={post.slug} />
        </aside>

        <article className="w-full flex-1 max-w-[800px] mx-auto lg:mx-0">
          {/* Header Section */}
        <header className="mb-10 text-center max-w-[900px] mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mb-6 font-semibold uppercase tracking-widest">
            <span>{post.category || 'Categoría'}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
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
          
          <h1 className="font-bold text-zinc-900 mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Featured Image */}
        {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url && (
          <div className="relative w-full aspect-[16/9] mb-12 rounded-3xl overflow-hidden shadow-sm border border-zinc-200">
            <Image 
              src={post.featuredImage.url.replace(/^http:\/\/localhost:300[0-9]/, '').replace(/^http:\/\/127\.0\.0\.1:300[0-9]/, '')}
              alt={post.featuredImage.alt || post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        )}

          {/* Rich Text Content */}
          <div className="rich-text max-w-none text-zinc-800 text-lg leading-relaxed">
            {post.content && <RichText data={post.content} />}
          </div>

          {/* Share Buttons Mobile / Tablet */}
          <div className="mt-16 lg:hidden flex justify-center w-full px-4 py-6 border-t border-b border-zinc-200 bg-white/50 rounded-2xl">
             <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </article>
      </div>

      {/* Related Posts Section (Full Width with Max-Width) */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 pt-16 pb-24 border-t border-zinc-200/60 w-full relative z-20">
          <div className="max-w-[1440px] mx-auto w-full px-6">
            <h2 className="font-bold text-zinc-900 mb-8 text-center lg:text-left">
              Te podría interesar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="h-[380px] w-full">
                  <PostCard post={relatedPost} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner Section */}
      <div className="relative z-20 w-full">
        <CtaBanner />
      </div>
    </main>
  );
}

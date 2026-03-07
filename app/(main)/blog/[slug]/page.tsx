import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import Image from 'next/image';
import { CtaBanner } from '@/components/ui/sections/CtaBanner';
import { RichText } from '@payloadcms/richtext-lexical/react';

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
    description: meta.description || post.excerpt,
    openGraph: {
      title: meta.title || `${post.title} | Código Nativo`,
      description: meta.description || post.excerpt,
      images: meta.image && typeof meta.image === 'object' && meta.image.url ? [
        {
          url: meta.image.url,
          width: 1200,
          height: 630,
          alt: meta.image.alt || meta.title || post.title,
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

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f7fa] pt-32 relative z-10 w-full mx-auto overflow-hidden">
      <article className="max-w-[800px] mx-auto w-full px-6 pb-24">
        {/* Header Section */}
        <header className="mb-10 text-center">
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
          
          <h1 className="text-4xl md:text-5xl lg:text-[55px] font-bold text-zinc-900 mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url && (
          <div className="relative w-full aspect-[16/9] mb-12 rounded-3xl overflow-hidden shadow-sm border border-zinc-200">
            <Image 
              src={post.featuredImage.url.replace(/^http:\/\/localhost:300[0-9]/, '').replace(/^http:\/\/127\.0\.0\.1:300[0-9]/, '')}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Rich Text Content */}
        <div className="rich-text max-w-none text-zinc-800 text-lg leading-relaxed">
          {post.content && <RichText data={post.content} />}
        </div>
      </article>

      {/* CTA Banner Section */}
      <div className="relative z-20 w-full overflow-hidden">
        <CtaBanner />
      </div>
    </main>
  );
}

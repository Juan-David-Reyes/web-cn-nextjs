'use client';

import { Facebook, Linkedin, Link2, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Only access window on the client side
    setCurrentUrl(window.location.href);
  }, [slug]);

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    if (!currentUrl) return;

    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(title);

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
        break;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  const handleCopyLink = async () => {
    if (!currentUrl) return;

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  const baseButtonClasses = "flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-600 transition-all duration-300 hover:text-[#3DBF15] hover:border-[#3DBF15] hover:shadow-sm hover:-translate-y-1";

  return (
    <div className="flex lg:flex-col gap-4 items-center">
      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest lg:mb-2 [writing-mode:vertical-rl] flex-shrink-0">
        Compartir
      </span>
      
      <div className="h-px w-8 bg-zinc-200 hidden lg:block mb-2"></div>
      
      <button 
        onClick={() => handleShare('twitter')}
        className={baseButtonClasses}
        aria-label="Compartir en X (Twitter)"
        title="Compartir en X"
      >
        <Twitter className="w-4 h-4" />
      </button>

      <button 
        onClick={() => handleShare('linkedin')}
        className={baseButtonClasses}
        aria-label="Compartir en LinkedIn"
        title="Compartir en LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </button>

      <button 
        onClick={() => handleShare('facebook')}
        className={baseButtonClasses}
        aria-label="Compartir en Facebook"
        title="Compartir en Facebook"
      >
        <Facebook className="w-4 h-4" />
      </button>

      <div className="h-px w-8 bg-zinc-200 hidden lg:block my-2"></div>

      <button 
        onClick={handleCopyLink}
        className={`${baseButtonClasses} ${copied ? 'bg-green-50 text-[#3DBF15] border-[#3DBF15]' : ''}`}
        aria-label="Copiar Enlace"
        title={copied ? "¡Copiado!" : "Copiar Enlace"}
      >
        <Link2 className="w-4 h-4" />
      </button>
      
      {copied && (
         <span className="absolute mt-[180px] lg:mt-0 lg:ml-28 text-xs text-[#3DBF15] font-medium bg-green-50 px-2 py-1 rounded-md animate-in fade-in zoom-in duration-200">
           ¡Copiado!
         </span>
      )}
    </div>
  );
}

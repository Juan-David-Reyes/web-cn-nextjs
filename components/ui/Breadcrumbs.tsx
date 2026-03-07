import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 w-full">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-zinc-500">
        <li>
          <Link 
            href="/" 
            className="hover:text-[#3DBF15] transition-colors duration-300 flex items-center gap-1 font-medium"
          >
            Inicio
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.label} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-zinc-400" />
              {isLast || !item.href ? (
                <span 
                  className="text-zinc-900 font-semibold"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="hover:text-[#3DBF15] transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

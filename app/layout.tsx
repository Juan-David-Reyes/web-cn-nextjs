import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const SITE_URL = process.env.SITE_URL || 'https://codigonativo.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Código Nativo | Desarrollo de Software",
    template: "%s | Código Nativo"
  },
  description: "Código Nativo es una marca de desarrollo de software y tecnología. Soluciones modernas, escalables y orientadas al rendimiento.",
  openGraph: {
    title: "Código Nativo | Desarrollo de Software",
    description: "Desarrollo de software y tecnología con enfoque en escalabilidad y rendimiento.",
    url: SITE_URL,
    siteName: "Código Nativo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Código Nativo | Desarrollo de Software",
    description: "Desarrollo de software y tecnología con enfoque en escalabilidad y rendimiento.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}

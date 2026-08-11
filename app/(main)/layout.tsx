import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/sections/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  display: 'swap',
});

// ... (metadata config continues) ...
// (Retaining all the constants from before down to metadata)
const SITE_URL = process.env.SITE_URL || 'https://codigonativo.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Diseño Web y Product Design UX/UI en Bogotá | Código Nativo",
    template: "%s | Código Nativo"
  },
  description: "Agencia de diseño y desarrollo web en Bogotá. Creamos sitios rápidos, UX/UI de alta conversión y auditorías SEO. Agenda tu consultoría gratis.",
  openGraph: {
    title: "Diseño Web y Product Design UX/UI en Bogotá | Código Nativo",
    description: "Agencia de diseño y desarrollo web en Bogotá. Creamos sitios rápidos, UX/UI de alta conversión y auditorías SEO. Agenda tu consultoría gratis.",
    url: SITE_URL,
    siteName: "Código Nativo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web y Product Design UX/UI en Bogotá | Código Nativo",
    description: "Agencia de diseño y desarrollo web en Bogotá. Creamos sitios rápidos, UX/UI de alta conversión y auditorías SEO. Agenda tu consultoría gratis.",
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
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics - async optimizado */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-8DDYN9VZKZ`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8DDYN9VZKZ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* GTM - async optimizado */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W6R7NGFS');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased font-sans`} suppressHydrationWarning>
        {/* GTM (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6R7NGFS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

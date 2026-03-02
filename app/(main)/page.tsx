import { HeroSection } from "@/components/ui/sections/HeroSection";
import { ServicesBento } from "@/components/ui/sections/ServicesBento";
import { Testimonials } from "@/components/ui/sections/Testimonials";
import { CtaBanner } from "@/components/ui/sections/CtaBanner";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function Home() {
  const payload = await getPayload({ config: configPromise });
  // Fetch data dynamically from Payload CMS (Singleton)
  const homeData = await payload.findGlobal({ slug: "home-page" });
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FFF] text-zinc-100 selection:bg-purple-500/30 overflow-hidden">
      
      {/* Nuevo Hero Section estilo Glassmorphism/Dark */}
      <HeroSection data={homeData.hero} />
      
      {/* Componente Bento Grid para Servicios */}
      <ServicesBento data={homeData.services} />

      {/* Testimonios */}
      <Testimonials />

      {/* Llamado a la Acción (CTA) */}
      <CtaBanner />
    </main>
  );
}

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/sections/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="relative z-10 bg-[var(--background)] shadow-2xl shadow-black/10">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

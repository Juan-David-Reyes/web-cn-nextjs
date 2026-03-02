import Image from 'next/image'

export function Testimonials() {
  return (
    <section className="relative w-full py-24 px-4 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-[#CAE414] to-[#3DBF15] text-transparent bg-clip-text mb-4 inline-block">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6">
            Lo que nuestros clientes dicen de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A2EB2F] to-[#3DBF15]">
              nuestra agencia
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Testimonial Card */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300">
            {/* The previous architecture commented out the image, so we're keeping it as a placeholder just in case */}
            {/* <div className="mb-6 relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500">
              <Image 
                src="/assets/images/testimonio-1.jpg" 
                alt="Testimonio de cliente" 
                fill 
                className="object-cover" 
              />
            </div> */}

            <p className="text-neutral-700 dark:text-neutral-300 mb-8 italic leading-relaxed relative">
              <span className="text-4xl text-[#CAE414]/20 absolute -top-4 -left-2 font-serif">"</span>
              Wow... estoy muy feliz de usar esta VPN, superó mis expectativas y hasta ahora no ha habido problemas. LaslesVPN siempre es la mejor.
              <span className="text-4xl text-[#CAE414]/20 absolute -bottom-6 font-serif">"</span>
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center font-bold text-neutral-500 dark:text-neutral-400">
                L
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white">LaslesVPN</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">CEO, LaslesVPN</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

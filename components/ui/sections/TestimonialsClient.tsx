'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Testimonial = {
  text: string
  name: string
  role: string
}

export function TestimonialsClient({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (testimonials.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="relative w-full py-[120px] px-4 bg-[#FFF] overflow-hidden">
      {/* Decorative Images */}
      <div className="absolute top-[8%] left-0 hidden lg:block opacity-80 pointer-events-none">
        <Image 
          src="/images/testimonios1.webp" 
          alt="" 
          width={300} 
          height={400} 
          className="object-contain"
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </div>
      <div className="absolute top-[8%] right-0 hidden lg:block opacity-80 pointer-events-none">
        <Image 
          src="/images/testimonios2.webp" 
          alt="" 
          width={300} 
          height={400} 
          className="object-contain"
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </div>

      <div className="mx-auto px-4 relative z-10" style={{ maxWidth: '680px' }}>
        {/* Header Section */}
        <div className="text-center">
          <span className="text-[14px] uppercase tracking-[4px] leading-[160%] mb-[16px] inline-block font-normal text-[#334155]">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            Lo que nuestros clientes dicen de{" "}
            <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 450, fontStyle: 'italic' }}>
              nuestra agencia
            </span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative text-center">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <p 
                    className="text-neutral-600 mb-8"
                    style={{
                      fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                      fontSize: 'clamp(1rem, .95rem + .35vw, 1.125rem)',
                      lineHeight: 1.5,
                      letterSpacing: '0%',
                      margin: '0 0 2rem 0',
                      fontStyle: 'italic'
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h3 
                      className="text-[#0f172a]"
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: 'clamp(1rem, 0.8rem + 1vw, 1.125rem)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        fontWeight: 700
                      }}
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'bg-[#3DBF15] w-6' 
                        : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Ir al testimonio ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

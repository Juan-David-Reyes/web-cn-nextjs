export function TestimonialsSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative p-10 md:p-14 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 overflow-hidden group">
        
        {/* Decorative Quotes */}
        <div className="absolute -top-6 -left-6 text-9xl text-zinc-100 dark:text-zinc-800 font-serif opacity-50 group-hover:scale-110 transition-transform duration-500">
          &quot;
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex gap-1 mb-6 text-[#3dbf15]">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed mb-10">
            "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. <span className="text-[#3dbf15] font-bold">LaslesVPN always the best.</span>"
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center font-bold text-xl text-zinc-600 dark:text-zinc-300 ring-4 ring-white dark:ring-zinc-900 shadow-md">
              LV
            </div>
            <div className="text-left">
              <h4 className="font-bold text-lg dark:text-zinc-100">LaslesVPN</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">CEO, LaslesVPN</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

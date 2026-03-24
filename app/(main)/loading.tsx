export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-zinc-200 dark:border-zinc-800 border-t-[#3DBF15] rounded-full animate-spin"></div>
        <p className="text-zinc-500 text-sm font-medium tracking-wide animate-pulse">Cargando...</p>
      </div>
    </div>
  );
}

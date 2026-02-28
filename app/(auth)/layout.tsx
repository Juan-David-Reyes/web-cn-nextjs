export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {children}
    </main>
  )
}

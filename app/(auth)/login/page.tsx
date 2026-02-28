import Link from 'next/link'
import { LoginForm } from '@/components/ui/forms/LoginForm'

export const metadata = {
  title: 'Iniciar Sesión | Código Nativo',
  description: 'Accede a tu cuenta de Código Nativo para gestionar tus servicios.',
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-1 ring-black/5 group-hover:scale-105 transition-transform duration-300">
              CN
            </div>
            <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Código Nativo
            </span>
          </Link>
        </div>
        
        <h2 className="mt-8 text-center text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          Bienvenido de nuevo
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Ingresa tus credenciales para acceder a tu panel
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-neutral-900 py-8 px-4 shadow-xl shadow-black/[0.03] sm:rounded-2xl sm:px-10 border border-neutral-100 dark:border-neutral-800">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

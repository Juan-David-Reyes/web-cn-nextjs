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
          <Link href="/" className="flex items-center gap-2 group justify-center mb-6">
            <svg
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 group-hover:scale-105 transition-transform duration-300"
            >
              <g clipPath="url(#clip0_23_32)">
                <path
                  d="M106.666 42.666C106.666 49.7354 100.935 55.466 93.866 55.466H76.7993V72.5327H94.9327V93.866H76.7993V117.333H93.866C100.935 117.333 106.666 123.063 106.666 130.133C106.666 137.202 100.935 142.933 93.866 142.933H68.266A25.6026 25.6026 0 0 1 42.666 117.333V42.666C42.666 28.528 54.128 17.066 68.266 17.066H93.866C100.935 17.066 106.666 22.7967 106.666 29.866V42.666Z"
                  fill="url(#paint0_linear_23_32)"
                />
                <path
                  d="M58.666 29.8667C58.666 26.3307 61.5307 23.4667 65.066 23.4667C68.6013 23.4667 71.466 26.3307 71.466 29.8667L71.466 42.6667L58.666 42.6667V29.8667Z"
                  fill="#CAE414"
                />
                <path
                  d="M106.666 42.6667V29.8667C106.666 26.3307 103.801 23.4667 100.266 23.4667C96.7307 23.4667 93.866 26.3307 93.866 29.8667V42.6667L106.666 42.6667Z"
                  fill="#A2EB2F"
                />
                <path
                  d="M106.666 130.133L106.666 117.333L93.866 117.333L93.866 130.133C93.866 133.669 96.7307 136.533 100.266 136.533C103.801 136.533 106.666 133.669 106.666 130.133Z"
                  fill="#CAE414"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_23_32"
                  x1="42.666"
                  y1="17.066"
                  x2="106.666"
                  y2="142.933"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CAE414" />
                  <stop offset="1" stopColor="#3DBF15" />
                </linearGradient>
                <clipPath id="clip0_23_32">
                  <rect width="160" height="160" fill="white" />
                </clipPath>
              </defs>
            </svg>
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

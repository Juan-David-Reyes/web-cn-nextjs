---
trigger: always_on
---

# 💻 Workspace Rules: Next.js 15 & React Architecture

## 🏗️ Project Structure & Patterns

- **App Router:** Uso mandatorio de la estructura `app/`. Layouts anidados y carga selectiva.
- **Server Components (RSC):** Todo componente es Server por defecto. Usa `'use client'` solo si hay hooks (`useState`, `useEffect`) o eventos de usuario.
- **Co-location:** Mantén archivos relacionados juntos: `component.tsx`, `component.test.ts`, `component.types.ts`.
- **UI Atomic Design:** Componentes base en `components/ui/` y lógica de negocio en `components/features/`.

## 🚀 Performance & SEO (Hard-rendering)

- **Metadata:** Implementa `generateMetadata` dinámico para SEO técnico superior.
- **Optimización de Media:** Uso obligatorio de `next/image` con prioridades de carga y `next/font`.
- **Streaming UI:** Utiliza `loading.tsx` y React `Suspense` para evitar bloqueos de renderizado.
- **Caching:** Aprovecha el Data Cache de Next.js y `revalidatePath` para mantener la frescura de los datos.

## 🛡️ Execution & Safety

- **Server Actions:** Todas las mutaciones de datos (POST, PUT, DELETE) deben ser Server Actions.
- **Data Validation:** Valida props y esquemas de API con **Zod**.
- **Error Boundaries:** Usa `error.tsx` para fallos a nivel de ruta y `ErrorBoundary` para componentes críticos.
- **Optimistic Updates:** Implementa `useOptimistic` para mejorar la percepción de velocidad en la UI.

## 📋 Delivery Checklist

- Antes de entregar, verifica:
  1. ¿Es accesible (A11y/Aria roles)?
  2. ¿Pasa el chequeo de tipos de TS?
  3. ¿Tiene impacto negativo en el SEO?
  4. ¿Sigue la convención de commits `feat:`, `fix:`, `refactor:`?

import { getPayload } from 'payload'
import configPromise from '../payload.config.ts'

async function run() {
  const payload = await getPayload({ config: configPromise })

  const redirectsToSeed = [
    {
      from: '/agencia-de-diseno-web-bogota',
      to: {
        type: 'custom',
        url: '/servicios/diseno-web',
      },
      type: '301', // La interfaz por defecto en @payloadcms/plugin-redirects suele usar este formato
    },
    {
      from: '/servicios/diseno-ux-ui',
      to: {
        type: 'custom',
        url: '/servicios/product-design',
      },
      type: '301',
    },
    {
      from: '/servicios/optimizacion-web',
      to: {
        type: 'custom',
        url: '/servicios/cro-optimizacion',
      },
      type: '301',
    },
    {
      from: '/servicios/agencia-de-diseno-web-colombia',
      to: {
        type: 'custom',
        url: '/servicios/diseno-web',
      },
      type: '301',
    },
    {
      from: '/servicios-de-alto-valor-agregado',
      to: {
        type: 'custom',
        url: '/blog/servicios-de-alto-valor-agregado',
      },
      type: '301',
    },
    {
      from: '/marketing-de-conversiones',
      to: {
        type: 'custom',
        url: '/blog/marketing-de-conversiones',
      },
      type: '301',
    },
  ]

  console.log('Migrando redirecciones a la base de datos...')

  for (const r of redirectsToSeed) {
    try {
      const existing = await payload.find({
        collection: 'redirects',
        where: {
          from: {
            equals: r.from,
          },
        },
      })

      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'redirects',
          data: r as any,
        })
        console.log(`Redirección creada: ${r.from} -> ${r.to.url}`)
      } else {
        console.log(`La redirección ya existe: ${r.from}`)
      }
    } catch (err) {
      console.error(`Error creando la redirección para ${r.from}:`, err)
    }
  }

  console.log('Migración completa.')
  process.exit(0)
}

run()

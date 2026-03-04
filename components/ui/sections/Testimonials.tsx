import { getPayload } from "payload"
import configPromise from "@payload-config"
import { TestimonialsClient } from "./TestimonialsClient"

export async function Testimonials() {
  const payload = await getPayload({ config: configPromise })
  
  // Fetch testimonials matching our collection name
  const { docs } = await payload.find({
    collection: "testimonials",
    depth: 1,
    limit: 10,
  })

  // Format the docs to match the expected format in the client
  let testimonialsData = docs.map((doc: any) => ({
    name: doc.name || '',
    role: doc.role || '',
    text: doc.text || '',
  }))

  // Mostrar datos de prueba si el administrador aún no ha cargado testimonios en Payload
  if (testimonialsData.length === 0) {
    testimonialsData = [
      {
        text: "Wow... estoy muy feliz de usar sus servicios, superaron mis expectativas y hasta ahora no ha habido problemas. Son definitivamente los mejores.",
        name: "Juan Pérez",
        role: "CEO, TechNova"
      },
      {
        text: "El nivel de detalle y el enfoque en el performance nos ayudó a escalar nuestras ventas un 300% en los primeros 3 meses.",
        name: "María Gómez",
        role: "Directora de Marketing, Innova"
      },
      {
        text: "Trabajar con ellos fue un cambio total para nuestra empresa. Siempre están un paso adelante en diseño y tecnología.",
        name: "Carlos Rivera",
        role: "Fundador, StartUp Latam"
      }
    ]
  }

  return <TestimonialsClient testimonials={testimonialsData} />
}

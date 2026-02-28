import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()

    // Intentamos hacer una consulta a una tabla cualquiera, en este caso probamos
    // con la vista interna o simplemente sacamos la hora actual de la BD
    const { data, error } = await supabase.rpc('version')

    if (error && error.code === 'PGRST202') {
         // Si la funcion no se encuentra pero la base de datos responde el error, ES UN EXITO!
         return NextResponse.json({
            success: true,
            status: "Connected to Supabase successfully!",
            details: "Database responded to RPC call."
        })
    }
    
    // Si obtenemos error de conexion:
    if (error && error.message.includes("FetchError") || error?.message.includes("Failed to fetch")) {
       throw error;
    }

    return NextResponse.json({
      success: true,
      status: "Connected to Supabase successfully!",
      data,
      error
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, status: "Connection Failed", error: error.message || error },
      { status: 500 }
    )
  }
}

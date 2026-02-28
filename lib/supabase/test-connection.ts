import { createClient } from './server'

export async function testConnection() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from('testing_connection').select('*').limit(1)

    // Even if the table doesn't exist, we'll get an error back (meaning it hit the DB!).
    console.log("Supabase Fetch Attempted:", { data, error })

    return { success: true, message: 'Connection attempted', details: error || data }
  } catch (err) {
    console.error("Supabase Connection Error:", err)
    return { success: false, message: 'Failed to connect', error: err }
  }
}

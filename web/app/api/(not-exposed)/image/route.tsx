import { DEBUG_MODE } from "@/debug_mode"
import { NextResponse } from "next/server"

export async function GET() {
    const api = process.env.CLIENT_ID
    const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${api}` , {cache:"no-cache"})
    const data = await res.json()
    if(DEBUG_MODE) console.info(await data.urls.raw)
    return  NextResponse.json( {image:await data.urls.raw})
}
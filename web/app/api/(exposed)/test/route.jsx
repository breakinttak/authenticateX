import { NextResponse } from 'next/server'
export function GET(){
    console.log("TEST FROM API");
    return new NextResponse("oK" , {status:200})

}
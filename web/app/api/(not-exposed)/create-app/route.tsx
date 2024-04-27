import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

async function POST(req:Request){

    const data = await req.json()
    console.log(data);
    const apiKey = process.env.CLIENT_ID
    const userid =     cookies().get("userId")?.value
    const image = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
    console.log(image);
    
    const res = await db.app.create({
        data:{
            name:data.app as string,
            image : "image",
            // AppId:randomUUID() as string,
            app:{
                connect:{
                    UserDevId:userid 
                }
            }
        }
            
    })
    console.log(res);
    

    return NextResponse.json({image:"ok"})
}
export {POST}
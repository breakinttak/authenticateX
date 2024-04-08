import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const data = await req.json()

    const {name , email,password,jwtToken} = data
    const res = await db.userDev.create({
        data:{
            name,
            email,
            password,
            jwtToken:jwtToken,
        }
    })

    console.log(res);

    return new NextResponse("Ok",{status:201})
    
}
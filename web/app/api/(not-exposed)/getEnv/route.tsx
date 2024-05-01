import { db } from "@/lib/db"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req:Request){
    // const {cookie} = await req.json()
    const userId = cookies().get("userId")?.value
    // const userId = await cookie
    const res = await db.app.findFirst({
        where:{
            AppId:userId,
        }
    })

    if(userId && res){
        return NextResponse.json(res,{status:201})
    }else{
        return NextResponse.json({why:"bro"})
    }
}
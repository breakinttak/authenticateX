import { db } from "@/lib/db";
import { cookies } from "next/headers";
import {DEBUG_MODE} from "@/debug_mode"
import { NextResponse } from "next/server";
export async function POST(req:Request) {
    const data = await req.json()
 const cookie = cookies().get("userId")?.value
    // const cookie = data.cookie
    if(data.some === "00000" ){
        const res = await db.app.findMany({
            where:{
              AppId:  cookie
            } 
        })

        if(DEBUG_MODE) console.log(res);
        
        return NextResponse.json(res,{status:200})
    }
    return NextResponse.json({bro:"why"},{status:503})
}
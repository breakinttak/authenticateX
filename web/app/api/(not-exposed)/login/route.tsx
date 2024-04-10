import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function POST(req:Request){
    const {name,password} = await req.json();
    const res = await db.userDev.findFirst({
        where:{
            OR:[
                {
                    name:name,
                    password:password,
                },
                {
                    email:name,
                    password:password,
                }
            ]
        }
        
    })
    if (res == (undefined || null )){
        return NextResponse.json("Error",{status:400})
    }
    cookies().set("data", JSON.stringify(res))
    return NextResponse.json(res);
}

export {POST}
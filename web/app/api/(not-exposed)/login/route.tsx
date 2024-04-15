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
    cookies().set("name", await res.name)
    cookies().set("userId",res.UserDevId as string)
    cookies().set("email",res.email)

    return NextResponse.json(res);
}

export {POST}
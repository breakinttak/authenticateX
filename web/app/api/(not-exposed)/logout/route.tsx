import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    const cookie = cookies()
    const res = cookie.delete("userId")
    console.log(res);

    return new NextResponse("ok")
    
}
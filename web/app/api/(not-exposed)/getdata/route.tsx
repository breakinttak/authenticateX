import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
async function GET() {
    const userId: string = cookies().get("userId")?.value!
    if (userId) {

        const res = await db.userDev.findUnique({
            where: {
                UserDevId: userId,
            }
        })

        if (!res?.name || !res.email) {
            return NextResponse.json({ "bro": "why" }, { status: 503 })
        }
        return NextResponse.json(await res, { status: 202 })
        
    }
    return NextResponse.json({ "bro": "why" }, { status: 503 })

}
export { GET }
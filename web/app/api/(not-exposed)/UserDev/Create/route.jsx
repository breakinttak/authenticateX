import { db } from "../../../../../lib/db"
import {v4 as uuidv4} from "uuid"
import {NextResponse} from "next/server"
export const POST = async(req) => {
    const data = await req.json()
    console.log(data);

    const res = await db.userDev.create({
        data:{
            name:data.name,
            email:data.email,
            imageUrl:"Not-provided",
            // UserDevId:uuidv4(),
            password:data.password
        }
    })

    console.log(res);

    return NextResponse.json({message:"Ok"})
}
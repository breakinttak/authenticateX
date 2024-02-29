import { NextResponse } from "next/server"
export const GET = ({params}) => {
    return NextResponse.json({data:params,name:"Ashish"})
}
import { NextResponse } from "next/server"
export const GET = ({params}:{params:{clientId:string}}) => {
    return NextResponse.json({data:params.clientId,name:"Ashish"})
}
import { Metadata } from "next";
import React from "react";
// import "./style.scss"

export const metadata : Metadata = {
    title:"Dashboard",
    description:"Dashboard of authenticateX"
}

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <>
        {children}
        </>
    )
}
"use client"
import { Button } from "../ui/button";

export default function Logout(){
    return(
        <>
        <Button className="absolute right-6 top-2" onClick={async()=>{
            const res = await fetch("/api/logout")
            window.location.reload()
        }} >
            Logout ?
        </Button>
        </>
    )
}
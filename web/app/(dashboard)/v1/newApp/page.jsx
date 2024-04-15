"use client"

import { useEffect, useState } from "react"


export default function Page(){

    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    })

    if (!mounted) return null

    return (
        <>
        <main className="w-full h-full flex items-center justify-center ">
                <image 
                src="https://picsum.photos/id/1/200/300"
                />
        </main>
        </>
    )
}
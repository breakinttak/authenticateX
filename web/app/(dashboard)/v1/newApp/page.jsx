"use client"
import {Input} from "@/components/ui/input"
import { useEffect, useState } from "react"


export default function Page(){

    // const [mounted,setMounted] = useState(false)

    // useEffect(()=>{
    //     setMounted(true)
    // })

    // if (!mounted) return null

    return (
        <>
        <main className="w-full h-full flex items-center justify-center  ">
                <div className=" p-[200px]  top-4 right-4">
                    <p>Enter your app &apos s name</p>
                    <Input />
                </div>
        </main>
        </>
    )
}
"use client"
import { Navbar } from "@/_components/Navbar"
import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import { useRouter } from "next/navigation"
// import { useEffect, useState } from "react"

export default function Page(){

    // const [mounted,setMounted] = useState(false)

    // useEffect(()=>{
    //     setMounted(true)
    // })

    // if (!mounted) return null
    const router = useRouter()
    const handleClick = async () => {
        const app = document.getElementById("appname").value
        const res = await fetch("/api/create-app",{
            method:"POST",
            body:JSON.stringify({app:app})
        })
        console.log(await res.json());
        router.push("/v1")
    }

    return (
        <>
            <div className="overflow-hidden  h-full w-full absolute bg-[#494646]  ">
                <Navbar showLogin={false} className="" big={false} />
                <div className="h-full w-full flex items-center  justify-center ">
                    <div className="border-2 border-gray-300 p-6 py-[30px] rounded-[25px] ">
                        {/* <Input  /> */}
                           <p className="text-3xl text-white font-bold  "> Create a new app with us</p>
                            <p className="  p-[30px] text-xl text-gray-300 mt-[10px]"> It can be literally anything </p>

                            <div className="text-gray-300 ">
                                {/* <p className="mt-[40px] text-xl">
                                    Enter your apps name
                                </p> */}
                                <p className="mt-[30px]">
                                <Input className="bg-gray-100 mt-[30px]" id="appname" />
                                </p>
                                
                                <Button onClick={handleClick} className="mt-[10px] w-full" >Submit</Button>
                           </div>
                        </div>
                </div>
            </div>
        </>
    )
}
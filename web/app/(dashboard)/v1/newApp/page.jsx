"use client"
import { Navbar } from "@/_components/Navbar"
import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input"
// import { useEffect, useState } from "react"

export default function Page(){

    // const [mounted,setMounted] = useState(false)

    // useEffect(()=>{
    //     setMounted(true)
    // })

    // if (!mounted) return null

    const handleClick = async () => {
        const app = document.getElementById("appname").value
        const res = await fetch("/api/create-app",{
            method:"POST",
            body:JSON.stringify({app:app})
        })
        console.log(await res.json());
    }

    return (
        <>
            <div className="overflow-hidden  mt-[300px]  h-full w-full absolute bg-[#494646]  ">
                <Navbar showLogin={true} className="" big={false} />
                <div className="h-full w-full flex  items-center justify-center ">
                    <div className="border-2 border-gray-300 p-6 py-[30px] rounded-[25px] ">
                        {/* <Input  /> */}
                           <p className="text-xl text-white font-bold mt-[20px]"> Create a new app with us</p>
                            <p className=" mt-[30px] p-[30px] text-gray-500"> It can be literally anything </p>

                            <div className="text-gray-300 ">
                                <p className="">
                                    Enter your apps name
                                </p>
                                <Input className="bg-gray-100" id="appname" />
                                <Button variant={"default"} onClick={handleClick} className="mt-[10px] bg-green-500" >Submit</Button>
                           </div>
                        </div>
                </div>
            </div>
        </>
    )
}
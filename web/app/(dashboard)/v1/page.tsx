"use client"
import NewApp from "@/_components/newapp"
import Logout from "@/components/logout/logout"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { AppWindow, Orbit, Plus, User, User2, UserPlus } from "lucide-react"
import { useState } from "react"

export default function Page(){
    const name = "ashish"
    const image = "imageurl"
    const email = "15678ashish@"
    // const apps = [<User />,<User2/>]
    const currApp = "new1"
    return(
        <>
            <div className="w-full h-[70px] flex items-center  bg-zinc-800 ">
                <p className="left-0 p-[20px] text-2xl">{email}</p>
                
                <p className="right-0 lg:ml-[75%] md:ml-[50%]">
                    <Logout / >
                </p>
            </div>

            <div className="w-full h-full flex items-center justify-center ">
                <div className=" w-[360px] h-full left-0 bg-[#151519]">
                    <div className="flex flex-2/3 items center justify-center w-full ">
                        {/* icons start here */ }
                        <div className="flex flex-col bg-zinc-800 left-0 ml-0 w-[72px]  h-[522px]">
                            <div 
                            className="py-[4px] px-[2px] rounded-xl hover:text-zinc-400 cursor-pointer">
                                <NewApp />
                            </div>
                            {/* {apps.map((app)=>{
                                return(
                                    <div key={app.key}>
                                    <div className="pt-[30px] ml-[10px] ">{app}</div>
                                    </div>
                                )
                            })} */}
                        </div>
                        <div className="flex flex-col right-0 w-full h-full">
                            <div className="ml-[10px]">
                                
                            <p className="flex flex-1 p-[7.5px] ">Check users <User className="ml-[20px] " /></p>
                            <p className="flex flex-1 p-[7.5px] "> Get organizations <Orbit className="ml-[20px]" /> </p>
                            </div>
                            {/* <p>welcome</p> */}
                        </div>
                    </div>
                </div>

                <div className="w-full bg-blue-500 h-full  right-0 ">
                    right section
                </div>
            </div>
        </>
    )
}
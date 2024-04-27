"use client"
import NewApp from "@/_components/newapp"
import Logout from "@/components/logout/logout"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { UploadButton } from "@/utils/uploadthing"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { AppWindow, Orbit, Plus, User, User2, UserPlus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"

// async function reqdata(userId:string){
//     const res = await fetch("/api/reqdata", {
//         method:"POST",
//         body:JSON.stringify({"userId":userId})
//     })
    

//     const {UserDevId , name ,email} = await res.json()
//     return {UserDevId,name,email}
    

// }

async function GETDATA(){
    const router = useRouter()
    const {name,email,UserDevId} = await (await fetch("/api/get-data")).json()
    if(name == undefined || name == null ){
    router.push("/")
    return null
    }
    if(name && email){
        
        const res = {name,email,UserDevId}
        // console.log("*********");
        // console.log(name,email,UserDevId);
        // console.log("*********");
        return res
    }

   
}
export default async function Page(){

        const router = useRouter()
        if(GETDATA()==null || GETDATA == undefined){
            return null
        }
            const data = await GETDATA() || {email:"",name:"",userId:""}
        

  
    
    
    // if(!email || !name){
    //     router.push("/")
    //     return null
    // }

        const fetchapps = async() => {
            const res = await fetch("/api/fetch-users" , {
                method:"POST",
                body:JSON.stringify({some:"00000"})
            })
            
            return await res.json()
            
        }

        const res = await fetchapps()
    return(
        <>
            <div className="w-full h-[70px] flex items-center  dark:bg-zinc-800 bg-zinc-500 ">
                <p className="left-0 p-[20px] text-2xl dark:text-gray-400 text-gray-100">{data.email}</p>
                    {/* <UploadButton 
                    onClientUploadComplete={()=>{
                        console.log("upload complete");
                        
                    }}
                    onUploadError={()=>{
                        alert("Upload error")
                    }}
                    endpoint="imageUploader"
                    />             */}
                    <ModeToggle />
                <p className="right-0 lg:ml-[75%] md:ml-[50%]">
                    <Logout / >
                </p>
            </div>

            <div className="w-full h-full flex items-center justify-center ">
                <div className=" w-[360px] h-full left-0 dark:bg-[#151519] dark:text-zinc-300 text-gray-100  bg-[#54545a] ">
                    <div className="flex flex-2/3 items center justify-center w-full ">
                        {/* icons start here */ }
                        <div className="flex flex-col dark:bg-zinc-800 
                         bg-zinc-500 left-0 ml-0 w-[72px]  h-[522px]">
                            
                            <p>
                                {res.map((e:any)=>{
                                    console.log(e);
                                    
                                    return (
                                        <>
                                        <div className="w-full justify-center p-[10px] bg-gray-700 rounded-2xl mb-[5px] cursor-pointer">
                                        <p className=" z-2 ml-[10px]">{Array.from(e.name as string)[0].toUpperCase()}</p>
                                        </div>
                                        </>
                                    )
                                })}
                            </p>

                            <div 
                            className="py-[4px] px-[2px] rounded-xl hover:text-gray-400 cursor-pointer">
                                <button 
                                onClick={()=>{
                                    router.push("/v1/newApp")
                                }}
                                className="w-full  h-[40px] flex dark:bg-gray-800 bg-gray-400 hover:bg-gray-500 text-white  rounded-xl  text-gray-400 hover:text-gray-200 dark:hover:bg-gray-700  justify-center items-center ">
                                <Plus className="mr-[4px]" />
                                </button>
                                {/* <NewApp /> */}
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
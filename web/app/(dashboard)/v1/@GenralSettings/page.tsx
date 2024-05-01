import { Input } from "@/components/ui/input"
import { DEBUG_MODE } from "@/debug_mode"
import { GETDATA } from "../page"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import { Loader } from "@/components/loading"
import Image from "next/image"

export const fetchapps = async() => {
    const res = await fetch("/api/fetch-users" , {
        method:"POST",
        body:JSON.stringify({some:"00000"})
    })
    const data = await res.json()
    return await data
    
}

// const getImage = async function getimage() {
//     const res = await fetch("/api/image")
//     const data = await res.json()
//     console.log(await data);
    
//     return data
// }
// getImage()



export interface forComp{
    comp:"GeneralSettings" | "EnvironmentKey"
}
export function Change({comp }:any){

    function ChangeGet(){
        if("GeneralSettings" == comp){
            return(
                <>
                <Suspense fallback={<Loader/>}>
                <GeneralSettings  />
                </Suspense>
                </>
            )
        }else if("EnvironmentKey" == comp){
            return(
                <>
                 <Suspense fallback={<Loader/>}>
                <EnvironmentKeys />
                </Suspense>
                </>
            )
        }
    }

    return (
        <>
        <div className="h-full w-full flex  dark:bg-inherit bg-slate-400">
            {
               ChangeGet()
            }
        </div>
        </>
    )
}

export async function GeneralSettings({}){
    const data = await fetchapps()
    if(DEBUG_MODE) console.log({data:data});
    
    return(
        <>
        <div className="mt-[10px] w-full">
            <p className="text-2xl px-6 pt-6  font-extrabold"> 
                General Settings
            </p>
            <p className="dark:text-[#acaaaa] text-gray-700 ml-6 ">
                You can change some normal settings over here!
            </p>

            <div className="mt-[2rem] ml-6">
                <p className="font-bolder text-white text-xl" > 
                    App name:
                </p>
                <Input className="lg:max-w-[600px] max-w-[300px] mt-[10px]" value={data[0].name} />

                <p className="font-bolder text-white text-xl mt-[2rem]" > 
                    App URL :
                </p>
                <Input className="lg:max-w-[600px] max-w-[300px] mt-[10px]" value={data[0].AppUrl} />

               {/* <Image 
               src={await getImage()}
               alt="image"
               width={100}
               height={100}
               /> */}

                <div className="mt-[2rem]" >
                    <Button className="bg-[#76da48] hover:bg-[#66c043] text-xl px-4" >Submit</Button>
                </div>
            </div>
        </div>
        </>
    )
}




export async function EnvironmentKeys(){
    async function getEnv() {
        const res = await fetch("/api/getEnv",)
    
        return res.json()
    }
    
    if(DEBUG_MODE) console.log({newdata : await getEnv()});
    const data  = await getEnv()
    return (
        <>
  
        <div className="">
        <p className="mt-[20px] ml-6 text-white font-extrabold text-3xl">
                Environment keys
                </p>
                {/* {data.envId} */}
                <p className="mt-[40px] ml-[30px] text-gray-300 font-bold text-xl">
                    <code className="bg-gray-700 px-[100px] py-4">
                        {data.envId}
                    </code>
                </p>
        </div>
        </>
    )
}

export default function Page(){
    return (
        <>
        </>
    )
}
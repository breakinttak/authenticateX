import { Input } from "@/components/ui/input"
import { DEBUG_MODE } from "@/debug_mode"
import { GETDATA,fetchapps } from "../page"
import { Button } from "@/components/ui/button"

export interface forComp{
    comp:"GeneralSettings" | "EnvironmentKey"
}
export function Change({comp }:any){

    function ChangeGet(){
        if("GeneralSettings" == comp){
            return(
                <>
                <GeneralSettings  />
                </>
            )
        }else if("EnvironmentKey" == comp){
            return(
                <>
                <EnvironmentKeys />
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
            <p className="text-[#acaaaa] ml-6 ">
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
        const res = await fetch("/api/getEnv",{
            method:"POST",
            body:JSON.stringify({cookie:"cookie"})
        })
    
        return res.json()
    }
    
    if(DEBUG_MODE) console.log({newdata : await getEnv()});
    const data  = await getEnv()
    return (
        <>
  
        <p className="mt-[20px] ml-6 text-white font-extrabold text-3xl">
        Environment keys
        </p>
        {data.envId}
        </>
    )
}
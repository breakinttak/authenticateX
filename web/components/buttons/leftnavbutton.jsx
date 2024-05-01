// import { KeySquareIcon  } from "lucide-react";
import { Button } from "../ui/button";

export function NavButton({name,onclick,icon}){
    return(
        <div className="ml-[10px] w-[250px] bg-[#292828]">
                                
        {/* <p className="flex flex-1 p-[7.5px] ">Check users <User className="ml-[20px] " /></p>
        <p className="flex flex-1 p-[7.5px] "> Get organizations <Orbit className="ml-[20px]" /> </p> */}
        <Button variant={"ghost"} onClick={onclick} className="p-4 mt-[8px] lg:w-[242px] 
        space-x-2
        md:w-[142px]  bg-[#292828] " > {name} <p className = "ml-[10px]">{icon }</p> </Button>
        </div>
    )
}
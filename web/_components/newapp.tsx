"use client"
import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState ,useEffect } from "react";




export default function NewApp(){
    const [mounted,setMounted ] = useState(false)
    
    useEffect(()=>{
        setMounted(true)
    })
    
    if(!mounted){
        return false
    }

    return(
        <>
        <Dialog  >
            <DialogTrigger >
                <Button className="" variant={"ghost"}>
                    <Plus/>
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full h-full" >
            <DialogHeader>
                <DialogTitle>
                    Create new App
                </DialogTitle>
            </DialogHeader>
            </DialogContent>
        </Dialog>
        </>
    )
}
"use client"
import { SignUpForm } from "@/components/dialog/sign-up-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";




export default function Home() {

  const [isMounted,setIsMounted] = useState(false)


  useEffect(()=>{
    setIsMounted(true)
  },[])

  if(!isMounted){
    return null
  }
  
  return (
      <main>
        <div className="flex flex-1 items-center justify-center w-full h-[80vh] space-x-[50px]">
          <div className={cn("p-[20px] text-xl py-[50px]  group rounded-md border-[3px] hover:border-zinc-800 transition-all border-zinc-900")}  >
              <p className={cn("text-zinc-800 dark:text-zinc-100 max-w-[350px] text-center")}>
                Create a new project with us which will enhance your project like never ?
              </p>

              {/* get started dialog starts here */}
              <SignUpForm/>
            
          </div>
          <div className={cn("p-[20px] py-[40px] text-xl  hover:border-zinc-800 transition-all group rounded-md  border-[3px] border-zinc-900")}  >
              <p className={cn("text-zinc-800 dark:text-zinc-100 max-w-[350px] text-center ")}>
              Checkout our latest docs for all latest information about everything
              </p>
              <Button variant={"test"} className="mt-[20px] group-hover:bg-zinc-700 
              group-hover:text-white text-zinc-300 p-[20px] w-full mb-[20px]">Docs </Button>
          </div>

          
          <div></div>
        </div>
      </main>
  );
}

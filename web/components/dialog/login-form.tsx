"use client"
import { Dialog,DialogTrigger,DialogContent,DialogTitle,DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Eye , User } from "lucide-react"
import { useRouter } from "next/navigation"
export const LoginForm = () => {
    const [password,setPassword] = useState("password")
    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
      setMounted(true)
    },[])

    if(!mounted){
      return null
    }
    const router = useRouter()
    const onLogin  = () => {
      router.push("/v1")
    }
    return(
        <Dialog>
        <DialogTrigger className="w-full max-w-[350px]">
        <Button className="bg-zinc-600 text-zinc-300 p-[20px] hover:text-zinc-100 hover:bg-zinc-600 text-xl
                 font-bolder ml-[150px] bg-transparent right-2 bottom-8 absolute">Login <User/></Button>
        </DialogTrigger>
        <DialogContent className="group">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Login Form
            </DialogTitle>
          </DialogHeader>
          {/* <DialogDescription>
            Setting you up real quick
          </DialogDescription> */}
        <p className="mt-[20px]"> Enter your name or email</p>
        <Input placeholder="Enter your name or email" 
        className="invalid:text-red-500
        invalid:border-red-500 border-2"
        />

 
        <p className="mt-[20px]">Enter your Password</p>
        <Input type={password} placeholder="Enter your Password" className="invalid:text-red-500
         invalid:border-red-500 border-2 " /> 
         <Eye  className="absolute right-8 cursor-pointer bottom-[7rem]" onClick={()=>{
          if(password=="password") setPassword("text")
          setPassword("password")
         }} />
        
        <Button className="w-full bg-green-700 group-hover:bg-green-600 text-zinc-800 mt-[20px] hover:bg-green-600 hover:text-white" 
        onClick={onLogin}
        >
            Login </Button>
        </DialogContent>
       </Dialog>
    )
}
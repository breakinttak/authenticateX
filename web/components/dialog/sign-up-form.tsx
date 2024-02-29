import { Dialog,DialogTrigger,DialogContent,DialogTitle,DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Eye } from "lucide-react"
export const SignUpForm = () => {
    const [password,setPassword] = useState("password")
    return(
        <Dialog>
        <DialogTrigger className="w-full max-w-[350px]">
        <Button variant={"test"} className="mt-[20px] group-hover:bg-zinc-700 
        group-hover:text-white text-zinc-300 p-[20px] w-full">Get started Now</Button>
        </DialogTrigger>
        <DialogContent className="group">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              SignUp Form
            </DialogTitle>
          </DialogHeader>
          {/* <DialogDescription>
            Setting you up real quick
          </DialogDescription> */}
        <p className="mt-[20px]"> Enter your name</p>
        <Input placeholder="Enter your name" 
        className="invalid:text-red-500
        invalid:border-red-500 border-2"
        />

        <p className="mt-[20px]">Enter your Email Id</p>
        <Input type="email" placeholder="Enter your Email" className="invalid:text-red-500
         invalid:border-red-500 border-2 " />
        
        <p className="mt-[20px]">Enter your Password</p>
        <Input type={password} placeholder="Enter your Password" className="invalid:text-red-500
         invalid:border-red-500 border-2 " /> 
         <Eye  className="absolute right-8 cursor-pointer bottom-[7rem]" onClick={()=>{
          if(password=="password") setPassword("text")
          setPassword("password")
         }} />
        
        <Button className="w-full bg-green-700 group-hover:bg-green-600 text-zinc-800 mt-[20px] hover:bg-green-600 hover:text-white" >Create Account</Button>
        </DialogContent>
       </Dialog>
    )
}
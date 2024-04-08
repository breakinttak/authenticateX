import { Dialog,DialogTrigger,DialogContent,DialogTitle,DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Eye } from "lucide-react"
export const SignUpForm = () => {
    const [dot,setDot] = useState(false)

    function generateAlphanumericCode(length:number) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }
  

    async function SignUP(){
      const text = document.getElementById("textContent")!
      const name = (document.getElementById("Name") as HTMLInputElement ).value 
      const password = (document.getElementById("Password") as HTMLInputElement ).value 
      const email = (document.getElementById("Email") as HTMLInputElement ).value 
      const token =  generateAlphanumericCode(32)

      if(!name || !password || !email || !token){
        text.innerText = "Not enough details provided"
        console.log(name,email,password);
        
        // console.log("reached here");
        
        return
      } 

      const res = await fetch("/api/sign-up",{
        method:"POST",
        body:JSON.stringify({name:name,password:password,email:email,token:token}),
        headers:{
          "Content-type":"Application/JSON"
        }
      })

      console.log(res);
      text.innerHTML = "Account created succesfully !!! , Please Login"
    }

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

        id="Name"
        />

        <p className="mt-[20px]">Enter your Email Id</p>
        <Input type="email" placeholder="Enter your Email" className="invalid:text-red-500
         invalid:border-red-500 border-2 " id="Email" />
        
        <p className="mt-[20px]">Enter your Password</p>
        <Input type={dot ? "password" : "text"} placeholder="Enter your Password" className="invalid:text-red-500
         invalid:border-red-500 border-2 " id="Password" /> 
         <Eye  className="absolute right-8 cursor-pointer bottom-[8rem]" onClick={()=>{
          setDot(!dot)
         }} />
        
        <Button onClick={SignUP} className="w-full bg-green-700 group-hover:bg-green-600 text-zinc-800 mt-[20px] hover:bg-green-600 hover:text-white" >Create Account</Button>
        <p className="textContent text-rose-300" id="textContent"></p>
        </DialogContent>
       </Dialog>
    )
}
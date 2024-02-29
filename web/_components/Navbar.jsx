import { LoginForm } from "@/components/dialog/login-form"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

const Navbar = () => {
    return(
        <>
        <div className="w-full pb-[20px] bg-transparent sticky dark:bg-[#0c0c0c] 
        text-white text-md flex flex-1 justify-start items-center navbar">
            <div className="p-[30px] cursor-pointer">
                Home
            </div>
            <div className="p-[30px] cursor-pointer">About us</div>
            <div className="p-[30px] cursor-pointer">Roadmap</div>
            <div className="p-[30px] cursor-pointer">Help</div>
            <div className=""><ModeToggle/></div>
            <div className="">
                <LoginForm/>
            </div>
        </div>
        </>
    )
}
export {Navbar}
import { LoginForm } from "@/components/dialog/login-form"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import Link from "next/link"
const Navbar = ({showlogin , big}) => {
    return(
        <>
        <div className={cn("w-full  sticky dark:bg-[#0c0c0c] dark:text-white text-gray-800  bg-[#c7c7c7] flex flex-1 justify-start items-center navbar" ,
        big ? "text-2xl py-6" : "text-md py-2"
    )}>
            <Link href={"/"}>
            <div className="ml-[20px] cursor-pointer">
                Home
            </div>
            </Link>
            <div className="p-[15px] cursor-pointer ">About us</div>
            <div className="p-[5px] cursor-pointer">Roadmap</div>
            <div className="p-[5px] cursor-pointer">Help</div>
            <div className="">{big && <ModeToggle/>}</div>
            <div className="">
                {showlogin && <LoginForm />}
            </div>
        </div>
        </>
    )
}
export {Navbar}
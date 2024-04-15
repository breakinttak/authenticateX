import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewApp(){
    return(
        <>
        <Dialog  >
            <DialogTrigger>
                <Button>
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
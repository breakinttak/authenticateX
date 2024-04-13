import { HeroHighlight } from "../_components/hero-high"
import { ScrollArea } from "@/components/ui/scroll-area"
export default function Page(){
    return(
        <>
        <HeroHighlight>
        <main className="h-full w-full flex flex-1/3 items-center justify-center">
            <section className="ml-0 right-0 w-[25px] flex top-0 p-4 "> 
                <ScrollArea className="h-6" >
                    <div>Apple</div>
                    <div>Bsab</div>
                    <div>sbsb</div>
                    <div>bssb</div>
                    <div>bsbs</div>
                    <div>vsvsv</div>
                </ScrollArea>
            </section>
            <section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem beatae aperiam reprehenderit modi aliquid eum fugiat ducimus molestias ratione voluptatibus vel illum officia eligendi, sint laboriosam nemo dolor expedita!
                Sed dolorum ullam saepe, nisi recusandae facilis quis reiciendis dolorem accusantium iusto, quaerat ipsum optio distinctio perferendis porro impedit error ipsa, et numquam! Consequuntur reiciendis quae expedita, reprehenderit ex sequi.
                Voluptas a ad quas facere, dignissimos eaque facilis rerum alias maiores provident, rem totam dolor officiis cum dolorem maxime eos sed animi. Nobis aspernatur, non voluptate quidem tempora quas soluta!
                Quis, facere doloribus officiis reiciendis excepturi error incidunt perspiciatis asperiores delectus distinctio velit aliquid, molestiae sit aut optio corrupti temporibus, sapiente rerum hic blanditiis perferendis eveniet? Quia, necessitatibus! Consequatur, facilis.
                At deserunt non tempore. Odio repudiandae, quaerat minima dolor ea illo molestiae cumque omnis. Pariatur qui, deleniti rem in dicta deserunt explicabo. Totam in suscipit quasi sit, blanditiis tempora vero?
            </section>
        </main>
        </HeroHighlight>
        </>
    )
}
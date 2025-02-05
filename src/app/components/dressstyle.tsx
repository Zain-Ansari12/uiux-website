import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
  import { FaGreaterThan } from "react-icons/fa6";
  import { MdArrowRight } from "react-icons/md";
  
  export function Dressstyle() {
    return (
<div className="p-5">
    <div className="flex justify-between items-center">
    <h1 className="font-bold text-xl">Dress Style</h1>
    
    <div className="h-full">
    <MdArrowRight/>
    </div>
    </div>
<Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Party</AccordionTrigger>
          <AccordionContent>
            Yes. It&aposs animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Gym</AccordionTrigger>
          <AccordionContent>
            Yes. It&aposs animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-center items-start pt-3">
        <Button className="w-[90%] ">Apply Filter</Button>
      </div>
</div>
    )
  }
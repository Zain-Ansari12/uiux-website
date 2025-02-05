import { AccordionDemo } from "../components/accordion";
import { CheckboxDemo } from "../components/checkbox";
import { Dressstyle } from "../components/dressstyle";
import Outfits from "../components/outfits";
import Size from "../components/size";
import { SliderDemo } from "../components/slider";






export default function Casual(){
    return(
        <main className="flex flex-col sm:flex-row justify-center items-center space-x-6">
            {/* Left Div */}
           <div className="h-full w-full md:w-[295px] md:h-[1200px] border rounded-[16px] p-7 pl-3">
              <AccordionDemo />
              <SliderDemo/>
              <CheckboxDemo/>
              <Size/>
              <Dressstyle/>
           </div>
            {/* Right Div */}
           <div className="w-full sm:w-[900px] h-full sm:h-[1200px] pt-0">
            <Outfits/>

           </div>
        </main>
    )
}
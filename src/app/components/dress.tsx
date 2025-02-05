import Image from "next/image"
export default function Dress(){
    return(
        <div >
            <div className="w-full h-full sm:h-[630px] mt-8 bg-[#F0F0F0] flex flex-col justify-start items-center pt-8 max-w-screen-2xl mx-auto">
            {/* {Top Div} */}
            <div className="mt-2">
                <h1 className="text-3xl font-extrabold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
            </div>
            {/* {Bottom Div} */}
            <div className=" w-[90%] h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center">
                <div className="w-[350px] h-[260px]  m-1 relative">
                    <Image src={"/style1.svg"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="style1"></Image>
                    
                </div>
                <div className="w-[580px] h-[260px]  m-1 relative">
                    <Image src={"/style2.svg"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="style1"></Image>
                    <span></span>
                </div>
                <div className="w-[580px] h-[260px]  m-1 relative">
                    <Image src={"/style3.svg"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="style1"></Image>
                    <span></span>
                </div>
                <div className="w-[350px] h-[260px] m-1 relative">
                    <Image src={"/style4.svg"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="style1"></Image>
                    <span></span>
                </div>
                </div>
        </div>
        </div>

    )
}
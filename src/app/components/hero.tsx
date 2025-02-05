import Image from "next/image";

export default function Hero(){
    return(
        <main className=" max-w-screen-2xl mx-auto w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">
         {/* left */}
         <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
            <h1 className="text-2xl md:text-5xl font-extrabold ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-sm md:mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black py-2 px-8 rounded-[16px] mt-4 text-sm text-white">Shop Now</button>
         </div>
         {/* right */}
         <div className="relative ">
            <Image src={"/profile.png"} className="w-[500px] h-[500px] mr-4" width={200} height={200} alt="profile"></Image>
            {/* star */}
            <Image src={"/star.png"} className="w-[56px] h-[56px] absolute top-[170px] left-[0px]" width={200} height={200} alt="profile"></Image>
            <Image src={"/star.png"} className="w-[70px] md:w-[104px] h-[70px] md:h-[104px] absolute top-[15px] md:top-[50px] right-[30px]" width={200} height={200} alt="profile"></Image>
            
         </div>
        </main>
    )
}
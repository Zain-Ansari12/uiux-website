"use client"
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";


import { BreadcrumbDemo } from "@/app/components/breadcrumb";
import Review from "@/app/components/reviews";
import Items from "@/app/components/items";

let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
  ];

interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string,
    img1:string,
    img2:string,
    img3:string
}

let product:Iproducts[] = [

    {
        title:"T-shirt With Tape Details",
        id:1,
        price:"$120",
        img_url:"/product1.svg",
        img1:"/product1.svg",
        img2:"/product1.svg",
        img3:"/product1.svg",
    },
    {
        title:"Skinny Fit Jeans",
        id:2,
        price:"$240",
        img_url:"/product2.svg",
        old_price:"$260",
        img1:"/product2.svg",
        img2:"/product2.svg",
        img3:"/product2.svg",
    },
    {
        title:"Checkered Shirt",
        id:3,
        price:"$180",
        img_url:"/product3.svg",
        img1:"/product3.svg",
        img2:"/product3.svg",
        img3:"/product3.svg",
    },
    {
        title:"Sleeve Striped T-shirt",
        id:4,
        price:"$130",
        img_url:"/product4.svg",
        old_price:"$160",
        img1:"/product4.svg",
        img2:"/product4.svg",
        img3:"/product4.svg",
    },
    {
        title:"Vertical Striped Shirt",
        id:5,
        price:"$212",
        img_url:"/product5.svg",
        old_price:"$232",
        img1:"/product5.svg",
        img2:"/product5.svg",
        img3:"/product5.svg",
    },
    {
        title:"Courage Graphic T-shirt",
        id:6,
        price:"$145",
        img_url:"/product6.svg",
        img1:"/product6.svg",
        img2:"/product6.svg",
        img3:"/product6.svg",
        
    },
    {
        title:"Loose Fit Bermuda Shorts",
        id:7,
        price:"$80",
        img_url:"/product7.svg",
        img1:"/product7.svg",
        img2:"/product7.svg",
        img3:"/product7.svg",
    },
    {
        title:"Faded Skinny Jeans",
        id:8,
        price:"$210",
        img_url:"/product8.svg",
        img1:"/product8.svg",
        img2:"/product8.svg",
        img3:"/product8.svg",
        
    },
   
]

export default function Pro_Detail(){
    const params = useParams();
    const id = params.id 
    const items = product.find((items)=> items.id === Number(id))
    if(!items){
        return <h1>Product Not Found</h1>
    }
    return(
        
        <>
        <BreadcrumbDemo/>
        <div className="flex flex-col md:flex-row justify-between sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">
            {/* Left */}
            <div className=" w-full sm:flex-col justify-between  items-center sm:w-[152px] flex order-2 sm:order-1 ">
                {/* Images */}
                <Image src={items.img1} className="w-[100px] sm:w-full h-[150px]" alt={"productdetail"} width={100} height={100}></Image>
                <Image src={items.img2} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt={"productdetail"} width={100} height={100}></Image>
                <Image src={items.img3} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt={"productdetail"} width={100} height={100}></Image>
            </div>
            {/* mid div */}
            <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0  order-1 sm:order-2">
            <Image src={items.img_url} alt={"productdetail"} className="w-full h-[95%]" width={100} height={100}></Image>
            </div>
            {/* Right div */}
            
            <div className="w-full sm:w-[600px] h-[500-px] mt-3 order-3">
            <div>
            <h1 className="text-2xl md:text-2xl font-bold">{items.id==1 ? "T-Shirt With Tape Details" : ""}</h1>
            <h1 className="text-2xl md:text-2xl font-bold">{items.id==2 ? "Skinny Fit Jeans" : ""}</h1>
            <h1 className="text-2xl md:text-2xl font-bold">{items.id==3 ? "Checkered Shirt" : ""}</h1>
            <h1 className="text-2xl md:text-2xl font-bold">{items.id==4 ? "Sleeve Striped T-shirt" : ""}</h1>
            <h1 className="text-2xl md:text-2xl font-bold">{items.id==5 ? "Vertical Striped T-shirt" : ""}</h1>
            <h1 className="text-2xl md:text-2xl font-bold">{items.id==6 ? "Courage Graphic T-shirt" : ""}</h1>
            <h1 className="text-2xl md:text-2xl font-bold">{items.id==7 ? "Loose Fit Bermuda Shorts" : ""}</h1>
            <h1 className="text-2xl md:text-2xl font-bold">{items.id==8 ? "Faded Skinny Jeans" : ""}</h1>
            
                <div className="flex pt-2 text-yellow-500">
                    {star}
                </div>
                <p className="font-bold mt-2">{items.id===1 ? "$120" : ""} </p>
                <p className="font-bold mt-2">{items.id===2 ? "$240" : ""} <span className="line-through text-gray-400">{items.id===2 ? "$260" : ""}</span></p>
                <p className="font-bold mt-2">{items.id===3 ? "$180" : ""} </p>
                <p className="font-bold mt-2">{items.id===4 ? "$240" : ""} <span className="line-through text-gray-400">{items.id===4 ? "$160" : ""}</span></p>
                <p className="font-bold mt-2">{items.id===5 ? "$212" : ""} <span className="line-through text-gray-400">{items.id===5 ? "$232" : ""}</span></p>
                <p className="font-bold mt-2">{items.id===6 ? "$145" : ""} </p>
                <p className="font-bold mt-2">{items.id===7 ? "$80" : ""} </p>
                <p className="font-bold mt-2">{items.id===8 ? "$210" : ""} </p>

                <p className="">{items.id===1 ? "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style." : ""}</p>
                <p className="">{items.id===2 ? "Our premium blue jeans combine durability, comfort, and style, crafted from high-quality denim to suit every trend." : ""}</p>
                <p className="">{items.id===3 ? "Our checkered shirts blend classic style with premium fabric, offering comfort and versatility for every occasion." : ""}</p>
                <p className="">{items.id===4 ? "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style." : ""}</p>
                <p className="">{items.id===5 ? "Our vertical striped shirts offer a sleek, elongating look with premium fabric, perfect for both casual and formal wear." : ""}</p>
                <p className="">{items.id===6 ? "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style." : ""}</p>
                <p className="">{items.id===7 ? "Our loose-fit Bermuda shorts provide the perfect balance of comfort and style, crafted from high-quality fabric for a relaxed yet trendy look." : ""}</p>
                <p className="">{items.id===8 ? "Our faded skinny black jeans offer a stylish, modern edge with a perfect slim fit, crafted from high-quality stretch denim for all-day comfort." : ""}</p>

            </div>
            
                {/* select color */}
                <div className=" mt-5">
                    <p className="text-gray-500">Select Colors</p>
                    <div className="flex space-x-3 mt-2">
                    <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    
                    </div>

                    
                </div>
            
                {/* choose size */}
                <div className="mt-4">
                    <p className="text-gray-500">Choose Size</p>
                    <div className="flex space-x-3 mt-3">
                    <div className="w-[80px] flex justify-center items-center h-[40px] bg-[#F0F0F0] rounded-[62px] text-gray-400">Small</div>    
                    <div className="w-[90px] flex justify-center items-center h-[40px] bg-[#F0F0F0] rounded-[62px] text-gray-400">Medium</div>
                    <div className="w-[80px] flex justify-center items-center h-[40px] bg-[#F0F0F0] rounded-[62px] text-gray-400">Large</div>
                    <div className="w-[90px] flex justify-center items-center h-[40px] bg-[#F0F0F0] rounded-[62px] text-gray-400">X-Large</div>
                    </div>

                </div>
                {/* Btns */}
                <div className="flex justify-start items-center mt-7 space-x-4">
            <div className="w-[100px] flex justify-between p-3 items-center h-[40px] bg-[#F0F0F0] rounded-[62px] text-gray-400">
            <Plus/> 1 <Minus/>
            </div>
           
            <Button className="bg-black text-white w-[300px]">Add To Cart</Button>
            </div>
             

            </div>

            
              
            <div>
            
        
            </div>
            

        
        </div>
        
        <Review/>
        <Items/>
        </>
    )
}
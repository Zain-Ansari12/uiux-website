import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string
}

let product:Iproducts[] = [
    {
        title:"Vertical Striped Shirt",
        id:5,
        price:"$212",
        img_url:"/product5.svg",
        old_price:"$232"
    },
    {
        title:"Courage Graphic T-shirt",
        id:6,
        price:"$145",
        img_url:"/product6.svg",
        
    },
    {
        title:"Loose Fit Bermuda Shorts",
        id:7,
        price:"$80",
        img_url:"/product7.svg"
    },
    {
        title:"Faded Skinny Jeans",
        id:8,
        price:"$210",
        img_url:"/product8.svg",
        
    },
   
]

let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
  ];

export default function Top_sell(){
    return(
        <div className="w-full h-full sm:h-[500px] max-w-screen-2xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-extrabold text-center mt-[80px]">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                            <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                <Image src={data.img_url} alt={data.title} 
                                className="w-full h-full rounded-[20px]" width={100} height={100 }></Image>
                                </div>
                                </Link>
                            <div>
                               <p className="text-lg mt-5 font-bold">{data.title}</p>
                               <p className="flex text-yellow-400 ">{star}</p>
                               <p className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>
                               </div>

                            </div>
                        )
                    })
                }
            </div>
        

        </div>
    )
}
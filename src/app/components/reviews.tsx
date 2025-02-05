import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa";


const Reviews = [
    {
      name: "Sarah M.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
      rating: 5,
      verified: true,
      date:"Posted on August 16, 2023",
    },
    {
      name: "John D.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      rating: 5,
      verified: true,
      date:"Posted on August 17, 2023",
    },
    {
      name: "Emma L.",
      feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
      date:"Posted on August 18, 2023",
    },
    {
      name: "Michael B.",
      feedback:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      rating: 5,
      verified: true,
      date:"Posted on August 19, 2023",
    },
    {
      name: "Sophia K.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 20, 2023",
    },
    {
        name: "Fahad Khan",
        feedback:
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        rating: 5,
        verified: true,
        date:"Posted on August 20, 2023",
      },
  ];
  let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
  ];

export default function Review(){
    return(
        <main className="max-w-screen-2xl mx-auto">
            {/* Top Div */}
            <h1 className="px-5 pt-8 pb-5 pl-8 text-xl md:text-2xl font-bold flex justify-between">
                All Reviews(32)
            <div className="space-x-3 flex">
            <Button variant={"outline"} className="hidden md:block">Latest</Button>
            <Button>Write a Review</Button>
            </div>
            </h1>
            {/* Container */
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-3 md:mt-0">
                    {
                        Reviews.map((data,i)=>{
                            return(
                                <div className="border p-5 rounded-[20px]" key={i}>
                                    <p className="flex text-yellow-500">{star}</p>
                                    <h2 className="font-bold mt-1 flex text-xl">{data.name} <Check className="bg-green-400 rounded-full text-white"/></h2>
                                    <p className="text-sm">{data.feedback}</p>
                                    <p className="mt-5 text-gary-400">{data.date}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>}
        </main>
    )
}
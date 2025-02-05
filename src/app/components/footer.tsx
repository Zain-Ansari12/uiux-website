

import { FaFacebook, FaGithub, FaTwitter  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Image from "next/image";
import Offers from "./deals";

export default function Footer(){
    return(
        <main className="bg-[#F0F0F0] w-full h-full md:h-[400px] relative mt-32 max-w-screen-2xl mx-auto">
            {/*  */}
            <span className="absolute top-[-80px]">
                <Offers/>
            </span>
            {/* Container */}
            <div className="flex h-full flex-col md:flex-row md:h-[300px] justify-between items-start p-5 pt-[160px] sm:pt-32 ">
            {/* Top Div */}
            <div className="flex flex-col justify-center items-center w-[200px] pt-3">
                <ul>
                    <h2 className="text-2xl sm:text-3xl font-extrabold">SHOP.CO</h2>
                    <p className="text-sm mt-3">We have clothes that suits your style and which you&aposre proud to wear.From women to men.</p>
                    {/* icon */}
                    <div className="flex items-center space-x-3 mt-2">
                        <FaInstagram className="text-xl"/>
                        <FaFacebook className="text-xl"/>
                        <FaGithub className="text-xl"/>
                        <FaTwitter className="text-xl"/>
                    </div>
                </ul>
            </div>
            {/* Mid Div */}
            <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4  place-items-center space-y-4">
                {/* Box 1 */}
                <ul className="space-y-3 ">
                    <h2 className="text-sm sm:text-2xl sm:pr-0 pr-12 sm:pt-0 pt-1">COMPANY</h2>
                    <li className="text-sm">About</li>
                    <li className="text-sm">Features</li>
                    <li className="text-sm">Works</li>
                    <li className="text-sm">Career</li>
                </ul>
                {/* Box 2 */}
                <ul className="space-y-3 pb-3">
                    <h2 className="text-sm sm:text-2xl">HELP</h2>
                    <li className="text-sm">Customer Support</li>
                    <li className="text-sm">Delivery Details</li>
                    <li className="text-sm">Terms And Conditions</li>
                    <li className="text-sm">Privacy Policy</li>
                </ul>
                {/* Box 3 */}
                <ul className="space-y-3 pb-3">
                    <h2 className="text-sm sm:text-2xl">FAQ</h2>
                    <li className="text-sm">Account</li>
                    <li className="text-sm">Manage Deliveries</li>
                    <li className="text-sm">Orders</li>
                    <li className="text-sm">Payments</li>
                </ul>
                {/* Box 4 */}
                <ul className="space-y-3 pb-3">
                    <h2 className="text-sm sm:text-2xl">RESOURCES</h2>
                    <li className="text-sm">Free eBooks</li>
                    <li className="text-sm">Development Tutorial</li>
                    <li className="text-sm">How to -Blog</li>
                    <li className="text-sm">Youtube Playlist</li>
                </ul>
                {/* Complete Boxes */}

            </div>

            </div>
            {/* Bottom Div */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-10 pl-5">
            <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex items-center">
            <Image src={"/font1.png"} width={100} className="w-[50px]" height={100} alt="pic"></Image>
            <Image src={"/font2.png"} width={100} className="w-[50px]" height={100} alt="pic"></Image>
            <Image src={"/font3.png"} width={100} className="w-[50px]" height={100} alt="pic"></Image>
            <Image src={"/font4.png"} width={100} className="w-[50px]" height={100} alt="pic"></Image>
            <Image src={"/font5.png"} width={100} className="w-[50px]" height={100} alt="pic"></Image>
            </div>
            </div>
        </main>
    )
}
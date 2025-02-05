import Image from "next/image";
import Announce from "./components/announcement";
import Header from "./components/header";
import Hero from "./components/hero";
import Fonts from "./components/fonts";

import Top_Sell from "./products/sell";
import Products from "./products/page";
import CustomerCarousel from "./components/carousell";
import Dress from "./components/dress";



export default function Home() {
  return (
  <div>
     <Hero/>
     <Fonts/>
     <Products/>
     <Top_Sell/>
     <Dress/>
  <CustomerCarousel/>
  </div>
  );
}

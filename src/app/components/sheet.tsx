"use client"

import { Button } from "@/components/ui/button"
import { TiThMenu } from "react-icons/ti";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./NavigationMenu";
import { NavigationMenu } from "@/components/ui/navigation-menu";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="">
              <TiThMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.co</SheetTitle>
  
            </SheetHeader>
            {/* navbar */}
            <ul className="">
              <li className="grid grid-cols-1 gap-y-4">
              <Link href={"/"}><NavigationMenu/></Link>
              <Link href={"/"}>On Sale</Link>
              <Link href={"/products"}>New Arrivals</Link>
              <Link href={"/"}>Brands</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

import { Button } from "@/components/ui/button";
import { getMainProduct } from "@/services/product";
import Image from "next/image";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

export default async function Hero() {
  const mainProduct = await getMainProduct();
  return (
    <div className="md:h-[70vh] border-b mt-12">
      <div className="w-full h-full md:grid md:grid-cols-2">
        <div className="relative w-full md:h-full h-[400px] flex justify-center items-center">
          <Image
            src={mainProduct.image}
            className="object-contain p-12"
            alt="Main Product Image"
            fill
          />
        </div>
        <div className="h-full flex flex-col justify-center space-y-2 border-l border-l-zinc-300 md:pl-12 p-12">
        <p className="font-semibold">DISCOVER THE NEW</p>
        <p className="text-4xl font-black p-4 border border-black w-fit" style={{ color: mainProduct.color }}>{mainProduct.title}</p>
        <p className="text-7xl font-black uppercase">
          for only{" "}
          <span className="px-4 text-white" style={{ background: mainProduct.color }}>
              {mainProduct.price}$
          </span>
        </p>
        <Button size="lg" className="w-fit flex items-center gap-2">
          <span>Buy now</span><IoArrowForward />
        </Button>
        </div>
      </div>
    </div>
  );
}

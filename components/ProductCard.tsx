"use client"
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { useCart } from "@/stores/cart";
type Props = {
  product: Product;
  small?: boolean;
  averagePurchases?: number;
};
export default function ProductCard(props: Props) {
  const { product, small, averagePurchases } = props;
  const admin = !!averagePurchases;
  const isAboveAverage = product.purcheses > (averagePurchases || 0);
  const { addToCart } = useCart()
  return (
    <Link
      target={admin ? "_blank" : "_self"}
      href={`/product/${product._id}`}
      className="space-y-3 group"
    >
      <div
        className={`group relative w-full ${small ? "h-[200px]" : "h-[400px]"} flex justify-center items-center bg-secondary`}
      >
        {admin ? null : (
          <TbShoppingBagPlus className="absolute right-8 top-8 opacity-0 transition-all group-hover:opacity-100 z-[1] text-xl" onClick={() => addToCart({ ...product, count: 1  })} />
        )}
        <Image
          src={product.image}
          alt="Image"
          fill
          className="object-contain p-10 group-hover:opacity-65 transition-all"
        />
      </div>
      {admin ? (
        <div className="flex items-center gap-1.5 border-b pb-3 border-b-zinc-200">
          <div className="flex items-center gap-1">
            {isAboveAverage ? (
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-green-500" />
                <GoArrowUpRight />
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-red-500" />
                <GoArrowDownRight />
              </div>
            )}
          </div>
          <span className="font-semibold">{product.purcheses}</span>
          <span className="font-semibold text-zinc-700">
            {isAboveAverage ? "above" : "below"} Avarage{" "}
            {`(${averagePurchases})`}
          </span>
        </div>
      ) : null}
      <p className="font-bold text-primary/80">{product.title}</p>
      <p>{product.price}$</p>
    </Link>
  );
}

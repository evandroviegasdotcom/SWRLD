"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { RiShoppingBagLine } from 'react-icons/ri'
import { useCart } from '@/stores/cart'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { handlePurchase } from '@/services/stripe'
export default function Cart() {
  const { length, products, decProduct, total } = useCart()
  return (
    <Sheet>
        <SheetTrigger>
            <div className='relative'>
            <RiShoppingBagLine className='text-3xl text-zinc-800' />
            <div className='text-white  absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 bg-primary rounded-full text-wrap w-4 h-4 text-center text-sm flex items-center justify-center'>
            {length}
            </div>
            </div>
        </SheetTrigger>
        <SheetContent className='py-20 px-8 flex flex-col justify-between'>
            <div className='flex flex-col gap-12 max-h-[90%] overflow-y-auto'>
              {products.map(product => (
                <Link href={`/product/${product._id}`} className='flex gap-8 pb-6 border-b border-b-zinc-200' key={product._id}>
                  <Image src={product.image} width={60} height={60} className='object-contain' alt='Product Image' />
                  <div className='flex flex-col'>
                <span className='font-semibold'>{product.title}</span>
                <span>{`${product.price}$ x ${product.count} = ${product.price * product.count}`}</span>
                <span className='text-xs mt-3 underline text-red-700' onClick={() => decProduct(product._id)}>Remove</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className='flex flex-col'>
              <span className='font-semibold'>Total: {total}$</span>
              <Button size="lg" onClick={() => handlePurchase(products)}>Continue</Button>
            </div>
        </SheetContent>
    </Sheet>
  )
}

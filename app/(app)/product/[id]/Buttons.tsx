"use client"
import { Button } from '@/components/ui/button'
import { useCart } from '@/stores/cart'
import { handlePurchase } from '@/services/stripe'
import { Product } from '@/types/product'
import React from 'react'

export default function Buttons({ product }: { product: Product }) {
    const { addToCart } = useCart()
  return (
    <div className="flex">
    <Button
      size="lg"
      className="text-[17px] py-8 w-full bg-white hover:bg-zinc-100 border shadow-none text-zinc-700"
    onClick={() => addToCart(product)}
   >
      Add to cart
    </Button>
    <Button size="lg" className="text-[17px] py-8 w-full" onClick={() => handlePurchase({ ...product, count: 1 }, location.origin)}>
      Buy now
    </Button>
  </div>
  )
}

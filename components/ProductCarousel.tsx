"use client"
import { Product } from '@/types/product'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import ProductCard from './ProductCard'
import Autoplay from "embla-carousel-autoplay"

export default function ProductCarousel({ relatedProducts }: { relatedProducts: Product[] }) {
  return (
    <Carousel plugins={[
        Autoplay({ delay: 1000 })
    ]}>  
        <CarouselContent>
            {relatedProducts.map(product => (
                <CarouselItem key={product._id} className='md:basis-1/3 basis-1/2'>
                        <ProductCard small product={product} />
                </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
  )
}

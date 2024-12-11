"use server"
import stripe from "@/lib/stripe";
import { CartProduct } from "@/stores/cart";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

const sk = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || ""

export async function handlePurchase(items: CartProduct[] | CartProduct) {
    const products = Array.isArray(items) ? items : [items]
    const line_items = products.map(product => ({
        quantity: product.count,
        price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
            product_data: {
                name: product.title,
                images: [product.image]
            }
        }
    }))

    const token = await jwt.sign({ products }, sk)
    await cookies().set("purchase_products", token)

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000"
    })
    if(!session.url) return
    redirect(session.url)
}
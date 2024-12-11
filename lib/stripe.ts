import Stripe from "stripe"
const sKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || ""
const stripe = new Stripe(sKey)
export default stripe
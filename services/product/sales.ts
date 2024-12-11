"use server"
import { sanity } from "@/sanity/lib/client"

export async function getSalesInfo() {
    const revenueQuery = `math::sum(*[_type=="product"]{
    "revenue": coalesce(purchases * price, 0)
    }.revenue)`
    const revenue = await sanity.fetch(revenueQuery)

    const salesCountQuery = `math::sum(*[_type=="product"]{
    "purchases": coalesce(purchases, 0)
    }.purchases)`
    const salesCount = await sanity.fetch(salesCountQuery)

    return { revenue, salesCount, revenuePerSale: Math.round(revenue / salesCount) }
}

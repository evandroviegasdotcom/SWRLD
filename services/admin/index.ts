"use server"

import { sanity } from "@/sanity/lib/client"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

const sk = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || ""
export type Admin = { email: string, password: string }
export async function handleLoggin(admin: Admin) {
    const token = jwt.sign(admin, sk)
    cookies().set("admin_token", token)
    redirect("/admin")
}

export async function handleIsAdmin(admin: Admin) {
    const query = `*[_type=="admin" && password=="${admin.password}" && email=="${admin.email}"][0]`
    const res = await sanity.fetch(query)
    return !!res as boolean
}
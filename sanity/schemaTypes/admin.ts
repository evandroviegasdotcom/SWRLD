import {  defineField, defineType } from "sanity";

export const admin = defineType({
    name: "admin",
    title: "Admin",
    type: "document",
    fields: [
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "password",
            title: "Password",
            type: "string",
        }),
    ]
})
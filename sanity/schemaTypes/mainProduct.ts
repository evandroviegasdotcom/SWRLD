import {  defineField, defineType } from "sanity";

export const mainProduct = defineType({
    name: "main_product",
    title: "Main Product",
    type: "document",
    fields: [
        defineField({
            name: "product",
            title: "Product",
            type: "reference",
            to: [{ type: "product" }]
        })
    ]
})
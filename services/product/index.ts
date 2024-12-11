import { sanity } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";



export async function getMainProduct() {
  const query = `*[_type=='main_product'][0]{
        product->
    }`;
  const mainProduct = await sanity.fetch(query);
  return prepareProduct(mainProduct.product);
}

export async function getLatestProducts() {
  const query = `*[_type=="product"][0...6] | order(_createdAt desc)`;
  const products = (await sanity.fetch(query)) as [];
  return products.map((product) => prepareProduct(product));
}

export async function getProduct(id: string) {
  const query = `*[_type=="product" && _id=="${id}"][0]`;
  const product = await sanity.fetch(query);
  return prepareProduct(product);
}

export async function getRelatedProducts(id: string) {
  const query = `*[_type=="product" && _id!="${id}"]`;
  const product = (await sanity.fetch(query)) as [];
  return product.map((pr) => prepareProduct(pr));
}

export async function getProducts() {
  const query = `*[_type=="product"]`;
  const products = (await sanity.fetch(query)) as [];
  return products.map((product) => prepareProduct(product));
}

export async function getBestSellingProducts() {
  const query = `*[_type=="product"]{
    ...,
    "purchases": coalesce(purchases, 0)
  } | order(purchases desc)`
   const products = await sanity.fetch(query) as []
   return products.map(p => prepareProduct(p))
}

function prepareProduct(product: Product) {
  return { ...product, image: urlFor(product.image).url() } as Product;
}

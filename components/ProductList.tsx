import { Product } from "@/types/product";
import React from "react";
import NoResults from "./NoResults";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
  averagePurchases?: number
};
export default function ProductList({ products, averagePurchases }: Props) {
  const admin = !!averagePurchases
  return (
    <div className={`md:grid ${admin ? 'md:grid-cols-4' : 'md:grid-cols-3'} flex flex-col gap-4 w-full`}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} averagePurchases={averagePurchases} />
        ))
      ) : (
        <NoResults />
      )}
    </div>
  );
}

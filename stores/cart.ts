import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export type CartProduct = Product & { count: number };
type Store = {
  length: number;
  total: number;
  addToCart: (p: Product) => void;
  decProduct: (id: string) => void;
  products: CartProduct[];
};

export const useCart = create<Store>()(
  persist<Store>(
    (set) => ({
      products: [],
      total: 0,
      length: 0,
      addToCart: (product) =>
        set((state) => {
          const alrExists = state.products.some((p) => p._id === product._id);
          let nProducts;
          if (alrExists) {
            nProducts = state.products.map((p) => {
              if (p._id === product._id) {
                return {
                  ...p,
                  count: p.count + 1,
                };
              } else return p;
            }) as CartProduct[];
          } else {
            const nProduct = { ...product, count: 1 } as CartProduct;
            nProducts = [...state.products, nProduct];
          }
          return { products: nProducts, length: nProducts?.length, total: calculateTotal(nProducts) };
        }),
      decProduct: (id) => set((state) => {
        const nProducts = [] as CartProduct[]
        state.products.forEach((p) => {
            if(p._id === id) {
                if(p.count > 1) {
                    nProducts.push({ ...p, count: p.count - 1 })
                }
            } else {
                nProducts.push(p)
            }
        })
        return { products: nProducts, length: nProducts.length, total: calculateTotal(nProducts) }

      }),
    }),
    { name: "swrld-cart" }
  )
);


function calculateTotal(products: CartProduct[]) {
    let tot = 0
    products.forEach(product => {
        tot = tot + (product.count * product.price)
    })
    return tot
}
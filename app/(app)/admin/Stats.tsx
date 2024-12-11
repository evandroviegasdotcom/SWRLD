import { getSalesInfo } from "@/services/product/sales";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export default async function Stats() {
  const { revenue, revenuePerSale, salesCount } = await getSalesInfo();
  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-2">
      <Card label="Revenue Made" value={`${revenue}$`} />
      <Card label="Sales Count" value={`${salesCount}`} />
      <Card label="Avrg Revenue per sale" value={`${revenuePerSale}$`} />
    </div>
  );
}

function Card({ value, label }: { value: number | string, label: string  }) {
    return(
        <div className="flex justify-center items-center gap-2 p-12 border">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded bg-green-500" />
            <span className="block font-bold text-4xl">{value}</span>
          </div>
          <span className="text-zinc-600 text-xl">{label}</span>
        </div>
        <MdOutlineArrowOutward className="text-5xl text-zinc-700" />
      </div>
    )
}

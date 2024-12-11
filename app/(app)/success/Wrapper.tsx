"use client";
import { Button } from "@/components/ui/button";
import { updatePurchases } from "@/services/product/purchases";
import React, { useEffect, useRef } from "react";
import Confetti from "react-confetti-boom";
export default function Wrapper() {
  const called = useRef(false);
  useEffect(() => {
    if (called.current === false) {
      called.current = true;
      updatePurchases();
    }
  }, []);
  return (
    <div className="h-screen overflow-hidden flex flex-col gap-1 justify-center items-center font-black text-6xl">
      <Confetti
        mode="fall"
        particleCount={500}
        colors={["#ff577f", "#ff884b"]}
      />
      <span>PAYMENT COMPLETED!</span>
      <Button>GO TO HOME PAGE!</Button>
    </div>
  );
}

"use client"

import { useCartStore } from "@/lib/cart-store";
import { useEffect, useState } from "react";

export default function CountCartItem() {
    const totalItems = useCartStore((state) => state.totalItems);
    const [isMounted, setMounted] = useState(false);

    useEffect (() => {
        setMounted(true)
    }, [])
    if (!isMounted) return null;
  return (
    <main>
      <span>{totalItems()}</span>
    </main>
  );
}
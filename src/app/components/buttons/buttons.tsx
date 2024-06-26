"use client";
import { useShoppingCart } from "@/app/context/shop-context";
import Link from "next/link";
import React, { useContext } from "react";

type Props = {
  itemid: number;
};
export const Buttons = ({ itemid }: Props) => {
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(itemid);
  return (
    <div className="flex items-center justify-between gap-2 ">
      <Link
        href="/"
        className="border border-solid border-zinc-800 p-3 rounded-lg"
      >
        continue Shopping
      </Link>
      {quantity > 0 ? (
        <div className="flex gap-2 justify-center items-center p-[5px_0]">
          <button
            className="addToCartBttn"
            onClick={() => increaseCartQuantity(itemid)}
          >
            +
          </button>
          <p className="text-xl">{quantity}</p>
          <button
            onClick={() => decreaseCartQuantity(itemid)}
            className="addToCartBttn"
          >
            -
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => increaseCartQuantity(itemid)}
            className="p-3 m-1 border-zinc-800 rounded-lg border-solid border"
          >
            add to cart
          </button>
        </div>
      )}
    </div>
  );
};

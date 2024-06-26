"use client";
import React, { useContext, useEffect, useState } from "react";
import { useShoppingCart } from "../context/shop-context";
import Image from "next/image";
import "./cart.css";
import { getProduct } from "../services/api";
import { Products } from "../type/type";
type CartItemProps = {
  id: number;
  quantity: number;
};
export const CartItem = ({ id, quantity }: CartItemProps) => {
  const [Products, setProducts] = useState<Products>();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProducts(data);
    });
  }, []);

  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <div className="cartItem flex-col sm:flex-row sm:justify-end justify-center">
      <Image src={Products?.image} alt="/" width={0} height={0} />
      <div className="description gap-3 p-3 text-[30px]">
        <div className=" flex-col gap-5">
          <p>
            <b>{Products?.title}</b>
          </p>
          <p> Price: ${Products?.price}</p>
        </div>
        <div className="countHandler justify-center sm:justify-start ">
          <button
            className="addToCartBttnCart"
            onClick={() => decreaseCartQuantity(id)}
          >
            -
          </button>
          <span className="p-1">{quantity}</span>
          <button
            className="addToCartBttnCart"
            onClick={() => increaseCartQuantity(id)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeFromCart(id)}
          className="text-[22px] border m-auto sm:m-0 block bg-black p-1 text-white rounded-lg"
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

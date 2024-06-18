import React, { useContext } from "react";
import { Context, ShopContext } from "../context/shop-context";
import Image from "next/image";
import "./cart.css";

export const CartItem = ({ id, price, title, image }: any) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    DeleteFromCart,
  } = useContext(ShopContext) as Context;

  return (
    <div className="cartItem flex-col sm:flex-row sm:justify-end justify-center">
      <Image src={image} alt="/" width={0} height={0} />
      <div className="description gap-3 p-3 text-[30px]">
        <div className=" flex-col gap-5">
          <p>
            <b>{title}</b>
          </p>
          <p> Price: ${price}</p>
        </div>
        <div className="countHandler justify-center sm:justify-start ">
          <button
            className="addToCartBttnCart"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="addToCartBttnCart" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
        <button
          onClick={() => DeleteFromCart(id)}
          className="text-[22px] border m-auto sm:m-0 block bg-black p-1 text-white rounded-lg"
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

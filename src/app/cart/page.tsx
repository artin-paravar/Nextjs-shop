"use client";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Context, ShopContext } from "../context/shop-context";

import { useRouter } from "next/navigation";
import { CartItem } from "./cart-item";
import "./cart.css";
import axios from "axios";

export default function Cart() {
  const [Products, setProducts] = useState([]);

  const { cartItems, getTotalCartAmount, checkout } = useContext(
    ShopContext
  ) as Context;
  const navigate = useRouter();
  const totalAmount = getTotalCartAmount();

  async function Fetch() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Fetch();
  }, []);

  return (
    <div className="cart p-5">
      {Products.map(({ id, price, title, image }: any) => {
        if (cartItems[id] !== 0) {
          return (
            <CartItem
              key={id}
              id={id}
              price={price}
              title={title}
              image={image}
            />
          );
        }
      })}

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="text-[25px]"> Subtotal: ${totalAmount} </p>
          <div className="flex gap-4 flex-row">
            <button onClick={() => navigate.push("/")}>
              Continue Shopping
            </button>
            <button
              onClick={() => {
                checkout();
                navigate.push("/");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="h-[90vh] flex items-center justify-center">
          Your Shopping Cart is Empty
        </h1>
      )}
    </div>
  );
}

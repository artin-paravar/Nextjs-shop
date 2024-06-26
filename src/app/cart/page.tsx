"use client";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/shop-context";

import { useRouter } from "next/navigation";
import { CartItem } from "./cart-item";
import "./cart.css";

import { getProducts } from "../services/api";
import { formatCurrency } from "../utilitites/formatcurrency";

export default function Cart() {
  const [Products, setProducts] = useState<any>([]);
  const { cartItems, cartQuantity } = useShoppingCart();
  const navigate = useRouter();
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div className="cart p-5">
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} quantity={item.quantity} />;
      })}

      {cartQuantity ? (
        <div className="checkout">
          <p className="text-[25px]">
            Subtotal:
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = Products.find(
                  (item: any) => item.id == cartItem.id
                );

                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </p>
          <div className="flex gap-4 flex-row">
            <button onClick={() => navigate.push("/")}>
              Continue Shopping
            </button>
            <button
              onClick={() => {
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

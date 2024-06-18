"use client";
import React, { createContext, useEffect, useState } from "react";
import { Navbar } from "../components/navbar/navbar";
import axios from "axios";

export type Context = {
  getTotalCartAmount: () => number;
  gettotalCartItems: () => number;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (itemId: number, newAmount: number) => void;
  checkout: () => void;
  DeleteFromCart: (itemId: number) => void;
  cartItems: any;
  category: string;
  setcategory: React.Dispatch<React.SetStateAction<string>>;
};
type Children = {
  children: React.ReactNode;
};
export const ShopContext = createContext<Context | null>(null);
////////////////////
export const ShopContextProvider = ({ children }: Children) => {
  const [category, setcategory] = useState<string>("All");
  const [Products, setProducts] = useState([]);

  async function Fetch() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  function getDefaultCart() {
    let cart: any = {};
    for (let i = 1; i < 20 + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  }

  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    Fetch();
  }, []);

  //////////////

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo: any = Products.find(
          (product: any) => product.id === Number(item)
        )!;
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return Math.round(totalAmount);
  };
  //
  const gettotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const addToCart = (itemId: number) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems({ ...cartItems, [itemId]: newAmount });
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };
  const DeleteFromCart = (itemId: number) => {
    setCartItems({ ...cartItems, [itemId]: 0 });
  };

  const contextValue: Context = {
    cartItems,
    addToCart,
    DeleteFromCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    gettotalCartItems,
    category,
    setcategory,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      <Navbar />
      {children}
    </ShopContext.Provider>
  );
};

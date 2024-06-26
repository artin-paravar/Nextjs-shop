import Link from "next/link";
import { PiShoppingCartThin } from "react-icons/pi";

import "./navbar.css";
import { useContext, useEffect, useState } from "react";
import { useShoppingCart } from "@/app/context/shop-context";
import { getProduct } from "@/app/services/api";

export const Navbar = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link href={"/"}> Shop </Link>
          <Link href={"/login"}>login</Link>
          <Link href={"/cart"} className="relative ">
            <span className="absolute top-0 right-0 z-0 text-[12px] translate-x-1 bg-orange-500 rounded-[50%] w-[16px] h-[16px] items-center flex justify-center">
              {cartQuantity}
            </span>
            <PiShoppingCartThin size={32} />
          </Link>
        </div>
      </div>
    </>
  );
};

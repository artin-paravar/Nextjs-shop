import Link from "next/link";
import { PiShoppingCartThin } from "react-icons/pi";

import "./navbar.css";
import { useContext } from "react";
import { Context, ShopContext } from "@/app/context/shop-context";

export const Navbar = () => {
  const { gettotalCartItems } = useContext(ShopContext) as Context;

  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link href={"/"}> Shop </Link>
          <Link href={"/login"}>login</Link>
          <Link href={"/cart"} className="relative ">
            <span className="absolute top-0 right-0 z-0 text-[12px] translate-x-1 bg-orange-500 rounded-[50%] w-[16px] h-[16px] items-center flex justify-center">
              {gettotalCartItems()}
            </span>
            <PiShoppingCartThin size={32} />
          </Link>
        </div>
      </div>
    </>
  );
};

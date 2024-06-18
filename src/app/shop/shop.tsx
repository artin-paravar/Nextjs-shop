"use client";
import React, { useEffect, useState } from "react";
import { Product } from "./product";
import "./shop.css";
import { FilterItem } from "../components/filter/filter";

import axios from "axios";

import { SkeletonPage } from "../skeleton";

export function Shop() {
  const [Category, setcategory] = useState<string>("All");
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  async function Fetch() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);

      return res.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  }
  useEffect(() => {
    Fetch();
  }, []);
  function getItem() {
    let item: any = [];
    for (let i = 0; i < 20; i++) {
      item[i] = i;
    }
    return item;
  }

  return (
    <div className="shop">
      <FilterItem category={Category} setcategory={setcategory} />

      <div className="w-full sm:p-0 p-4">
        <h1 className="shopTitle mb-4">Shop</h1>
        <div className="pb-5 flex flex-wrap justify-center  items-center gap-10">
          {Loading &&
            Products.map(
              ({ category, id, price, title, image, description }: any) => {
                if (Category === "All" || category === Category) {
                  return (
                    <Product
                      key={id}
                      id={id}
                      price={price}
                      description={description}
                      title={title}
                      image={image}
                      category={category}
                    />
                  );
                }
              }
            )}
          {!Loading &&
            getItem().map(({ n }: any) => {
              return <SkeletonPage key={n} />;
            })}
        </div>
      </div>
    </div>
  );
}

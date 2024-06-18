import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Product = ({ id, title, price, description, image }: any) => {
  const router = useRouter();

  function onclick() {
    router.push(`/shop/${id}`);
  }
  return (
    <div className="product  flex items-center justify-between max-w-[250px] sm:max-w-[320px] cursor-pointer rounded-lg flex-col object-contain">
      <div className="w-full sm:h-[430px] ">
        <Image src={image} alt="/" height={0} width={0} />
      </div>
      <div className="description">
        <p>
          <b>{title.slice(0, 20)}..</b>
        </p>
        <p> ${price}</p>
      </div>

      <button
        onClick={() => onclick()}
        className="p-2 m-1 border-zinc-500 rounded-md border-solid border"
      >
        view details
      </button>
    </div>
  );
};

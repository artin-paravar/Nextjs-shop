import Image from "next/image";
import { Buttons } from "@/app/components/buttons/buttons";
export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data.map((product: any) => ({
    id: product.id.toString(),
  }));
}
async function getProduct(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
}
export default async function Photopage({
  params: { id },
}: {
  params: { id: number };
}) {
  const product = await getProduct(id);
  return (
    <div className=" p-[50px_10px] flex items-center justify-center flex-col gap-3">
      <div className="flex lg:flex-row flex-col justify-center items-center ">
        <Image
          src={product.image}
          alt="/"
          height={0}
          width={0}
          className="max-w-[500px] max-h-[500px] object-contain w-full"
        />
        <div className=" gap-7 sm:text-[20px] text-[17px] flex flex-col justify-evenly max-w-[800px] h-[500px] p-[0_30px] sm:p-[0_20px]">
          <h1 className="flex  items-start gap-2 flex-col lg:flex-row">
            <b>name:</b> <p>{product.title}</p>
          </h1>
          <h1 className="flex items-start gap-2 flex-col lg:flex-row">
            <b>description:</b> <p>{product.description}</p>
          </h1>
          <h1>
            <b>price:</b> ${product.price}
          </h1>
          <Buttons itemid={id} />
        </div>
      </div>
    </div>
  );
}

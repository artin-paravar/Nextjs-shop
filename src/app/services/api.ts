import axios from "axios";

const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});
export async function getProducts() {
  const { data } = await client("/products");
  return data;
}
export async function getProduct(id: number) {
  const { data } = await client(`/products/${id}`);
  return data;
}

import axiosConfig from "@/configurations/axiosConfig";
import { Product } from "@/types/product";

async function getProducts() {
  const response = await axiosConfig.axiosInstance.get("/product");
  return response.data as Product[];
}

async function updateProduct(payload: Product) {
  const response = await axiosConfig.axiosInstance.put(
    `/product/${payload.id!}`,
    payload,
  );

  console.log(response);
}

async function createProduct(payload: Product) {
  const response = await axiosConfig.axiosInstance.post("/product", payload);
  console.log(response);
}

async function deleteProduct(id: number) {
  const response = await axiosConfig.axiosInstance.delete(`/product/${id}`);
  console.log(response);
}

export default { deleteProduct, getProducts, createProduct, updateProduct };

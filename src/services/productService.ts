import axiosConfig from "@/configurations/axiosConfig";
import { Product } from "@/types/product";

async function getProducts() {
  const response = await axiosConfig.axiosInstance.get("/product");
  return response.data as Product[];
}

async function updateProduct() {}

async function createProduct() {}

async function deleteProduct() {}

export default { getProducts };

import { useContext } from "react";
import { ProductsContext } from "../context/DataProduct";

export default function useProducts() {
  return useContext(ProductsContext);
}

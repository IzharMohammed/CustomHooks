import { useState } from "react";
import { useEffect } from "react";
export const useProductList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const getProducts = await fetch("https://fakestoreapi.com/products");
    const data = await getProducts.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return products;
};

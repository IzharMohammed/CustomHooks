import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ProductCard } from "./ProductCard";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const getProducts = await fetch("https://fakestoreapi.com/products");
    const data = await getProducts.json();
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="productList">
      {products.map((product) => (
        <ProductCard
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};
export default ProductList;

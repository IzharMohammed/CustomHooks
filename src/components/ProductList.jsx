import React from "react";
import "../App.css";
import { ProductCard } from "./ProductCard";
import { useProductList } from "../hooks/useProductList";
const ProductList = () => {
  const products = useProductList(); //Calling custom hook
  return (
    <div className="productList">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};
export default ProductList;

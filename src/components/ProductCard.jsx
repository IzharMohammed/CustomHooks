import React from "react";

export const ProductCard = ({ image, title, price }) => {
  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

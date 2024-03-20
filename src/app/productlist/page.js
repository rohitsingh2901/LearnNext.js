"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const getProductList = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    setAllProducts(data.products);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {allProducts.map((product) => (
        <div key={product.id}>
        <p>Name: {product.title}</p>
        <p>Price: {product.price}</p><br/>
        </div>
      ))}
    </div>
  );
}

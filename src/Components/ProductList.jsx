import React, { useEffect, useState } from "react";
import Product from "./Product";
import assets from "../assets";
import productsData from '../products.json';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Map the product data to include the resolved image source
    const resolvedData = productsData.map(product => ({
      ...product,
      imgSrc: assets[product.imgSrc] || 'thumbnail-1.png'
    }));
    setProducts(resolvedData);
  }, []);

  return (
    <section className="products">
      {products.map((product, index) => (
        <Product
          key={index}
          imgSrc={product.imgSrc}
          alt={product.alt}
          name={product.name}
          price={product.price}
          details={product.details}
        />
      ))}
    </section>
  );
};

export default ProductList;

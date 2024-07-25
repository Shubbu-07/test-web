import React from 'react'

const Product = ({imgSrc, alt, name, price, details}) => {
  return (
    <div className="card">
      <div className="product-card">
        <img src={imgSrc} alt={alt} />
      </div>
      <div className="product-detals">
        <h2>{name}</h2>
        <p>Price - {price}</p>
        <p>{details}</p>
      </div>
    </div>
  )
};

export default Product

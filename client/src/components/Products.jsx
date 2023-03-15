import React, { useEffect, useState } from "react";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  const handleClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <div className="products-container">
      {products
        ? products.map((product) => {
            return (
              <div key={product.id} className="product-item">
                <div className="title-img" onClick={() => handleClick(product)}>
                  <h3>{product.title}</h3>
                  <img src={product.image} alt="" />
                </div>
                <h4>{product.price}$</h4>
              </div>
            );
          })
        : ""}
      {open && (
        <div className="product-box-container">
          <div className="product-box">
            <p className="p-title">{selectedProduct.title}</p>
            <p>{selectedProduct.description}</p>
            <button className="pro-btn" onClick={() => setOpen(false)}>
              Exit info
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

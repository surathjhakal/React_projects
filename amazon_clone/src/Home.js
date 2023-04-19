import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import db from "./firebase";
import { TopCardsLineOne, TopCardsLineTwo } from "./TopCards";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];
      snapshot.docs.map((doc) => {
        tempProducts.push({
          id: doc.id,
          product: doc.data(),
        });
      });
      setProducts(tempProducts);
    });
  }, []);

  // console.log(products);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-banner"></div>
      </div>
      <div className="home-content">
        <div className="home-row">
          {products.slice(0, 2).map((item) => (
            <Product
              id={item.id}
              key={item.id}
              title={item.product.title}
              price={item.product.price}
              rating={item.product.rating}
              image={item.product.image}
            />
          ))}
        </div>
        <div className="home-row">
          {products.slice(2, 5).map((item) => (
            <Product
              id={item.id}
              key={item.id}
              title={item.product.title}
              price={item.product.price}
              rating={item.product.rating}
              image={item.product.image}
            />
          ))}
        </div>
        <div className="home-row">
          <TopCardsLineOne />
        </div>
        <div className="home-row">
          <TopCardsLineTwo />
        </div>
      </div>
    </div>
  );
};

export default Home;

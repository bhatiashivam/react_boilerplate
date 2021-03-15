import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=5");
    const items = await data.json();

    // console.log(items);
    setItems(items);

    // fetch("https://fakestoreapi.com/products?limit=5")
    //   .then((res) => res.json())
    // json() returns another promise. To catch this, we need to use .then again to use this data
    //   .then((data) => console.log(data));
  };

  return (
    <div className="shop-page">
      <h1>Shop page</h1>
      <div>
        {items.map((item) => (
          <h3 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Shop;

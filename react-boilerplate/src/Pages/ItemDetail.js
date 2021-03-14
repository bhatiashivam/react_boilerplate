import React, { useState, useEffect } from "react";

const ItemDetail = ({ match }) => {
  // access to 'match' is given by <Link> from App.js 'route' tag
  //   console.log(match);

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );

    const item = await data.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={"product"} style={{ height: "40vh" }}></img>
    </div>
  );
};

export default ItemDetail;

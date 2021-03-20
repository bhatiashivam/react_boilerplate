import React, { useState, useEffect } from 'react';

const ItemDetail = ({ match }) => {
  // access to 'match' is given by <Link> from App.jsx 'route' tag
  //   console.log(match);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );

    const product = await data.json();
    setItem(product);
    console.log(item);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt="product" style={{ height: '40vh' }} />
    </div>
  );
};

export default ItemDetail;

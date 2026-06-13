import React from "react";
import "./products.css"
const Products = ({ addToCart }) => {
  const dumProducts = [
    {
      id: 1,
      name: "Premium Whey Protein Isolate",
      price: 54.99,
      image: "/protein.png",
    },
    {
      id: 2,
      name: "Micronized Creatine Monohydrate",
      price: 24.99,
      image: "/protein.png",
    },
    {
      id: 3,
      name: "Pre-Workout Energy Blast",
      price: 39.99,
      image: "/protein.png",
    },
    {
      id: 4,
      name: "Heavy-Duty Lifting Straps (Pair)",
      price: 14.99,
      image: "/protein.png",
    },
    {
      id: 5,
      name: "Insulated Stainless Steel Shaker",
      price: 19.99,
      image: "/protein.png",
    },
  ];

 
  return <div className="products-container">
    <div className="header">
      <h1>Products we offer</h1>
</div>
    <div className="cards-container">
      
        {dumProducts.map((item)=>(
          <div className="card" key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.price} USD</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        ))}
      
</div>
  </div>;
};

export default Products;

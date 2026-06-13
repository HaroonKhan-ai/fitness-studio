import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";




const App = () => {
  const [cart, setcart] = useState(() => {
    const savedCart = localStorage.getItem("fitnessCart");
    return savedCart ? JSON.parse(savedCart) : []; 
  });

  useEffect(() => {
    localStorage.setItem("fitnessCart", JSON.stringify(cart));
  }, [cart]);

  function removeFromCart(id) {
    setcart(cart.filter((item) => item.id !== id));
  }
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    alert("added to cart");
    if (existingItem) {
      setcart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  };
  function decrease(product) {
    if (product.quantity <= 1) {
      return setcart(cart.filter((item) => item.id !== product.id));
    }

    setcart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* Pass your cart functions into your core app pages */}
        <Route path="/products" element={<ProtectedRoute>
      <Products addToCart={addToCart} />
    </ProtectedRoute>} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              decrease={decrease}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import "./cart.css";
const Cart = ({ cart, removeFromCart, decrease }) => {
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <div className="cartContainer">
      <h2>Your Shopping Cart</h2>
      
      <div className="cartItemsList">
        {cart.map((item) => (
          <div key={item.id} className="cartCard">
            <div className="itemInfo">
              <h3>{item.name}</h3>
              <p className="itemPrice">${Number(item.price).toFixed(2)} USD</p>
            </div>
            
            <div className="quantityControl">
              <button className="btn-decrease" onClick={() => decrease(item)}>-</button>
              <span className="quantityValue">{item.quantity}</span>
            </div>

            <button className="btn-delete" onClick={() => removeFromCart(item.id)} title="Remove item">
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Structured summary block */}
      <div className="cartSummary">
        {totalAmount > 0 ? (
          <div className="totalBlock">
            <span>Total Amount:</span>
            <span className="totalPrice">${totalAmount.toFixed(2)}</span>
          </div>
        ) : (
          <p className="emptyMessage">Your cart is empty. Go add some fitness gear!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

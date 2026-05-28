import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice";

function CartItem({ setPage }) {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <a href="#" onClick={() => setPage("home")}>Home</a>
        <a href="#" onClick={() => setPage("plants")}>Plants</a>
        <a href="#" onClick={() => setPage("cart")}>Cart 🛒 {totalItems}</a>
      </nav>

      <div className="products">
        <h1>Shopping Cart</h1>
        <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

        {cartItems.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Cost: ${calculateItemTotal(item)}</p>

              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                Increase
              </button>

              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                Decrease
              </button>

              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Delete
              </button>
            </div>
          ))
        )}

        <button onClick={() => alert("Coming Soon")}>Checkout</button>

        <button onClick={() => setPage("plants")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartItem;

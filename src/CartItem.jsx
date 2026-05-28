import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./CartSlice";

export default function CartItem({ setPage }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <nav className="navbar">
        <a onClick={() => setPage("home")}>Home</a>
        <a onClick={() => setPage("plants")}>Plants</a>
        <a onClick={() => setPage("cart")}>Cart 🛒 {totalItems}</a>
      </nav>

      <div className="products">
        <h1>Shopping Cart</h1>
        <h2>Total Amount: ${totalAmount}</h2>

        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        ))}

        <button onClick={() => alert("Coming Soon")}>Checkout</button>
        <button onClick={() => setPage("plants")}>Continue Shopping</button>
      </div>
    </div>
  );
}

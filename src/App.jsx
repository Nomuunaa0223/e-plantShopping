import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <div className="landing">
          <h1>Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful houseplants.</p>
          <button onClick={() => setPage("plants")}>Get Started</button>
          <AboutUs />
        </div>
      )}

      {page === "plants" && <ProductList setPage={setPage} />}
      {page === "cart" && <CartItem setPage={setPage} />}
    </>
  );
}

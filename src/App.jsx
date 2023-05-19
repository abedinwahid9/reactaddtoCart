import Cart from "./components/cart2/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContextData from "./components/cart2/context/ContextData";
import CartContext from "./components/cart2/context/CartContext";

function App() {
  return (
    <Router>
      <div>
        <ContextData>
          <CartContext>
            <Cart />
          </CartContext>
        </ContextData>
      </div>
    </Router>
  );
}

export default App;

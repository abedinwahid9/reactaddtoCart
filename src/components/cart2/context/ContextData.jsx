import React, { createContext } from "react";
import { products } from "../products/Products";

export const itemContext = createContext();

export default function ContextData({ children }) {
  return (
    <itemContext.Provider value={products}>{children}</itemContext.Provider>
  );
}

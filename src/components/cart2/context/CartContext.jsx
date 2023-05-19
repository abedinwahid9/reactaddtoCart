import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../useReducer/useReducer";

export const CreateCartContext = createContext();

const initialState = {
  cart: [],
  total_Item: 0,
  total_amonut: 0,
  shipping_fee: 5000,
};

export default function CartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addtoCart = (value) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: value,
    });
  };

  const incrementItem = (id) => {
    dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrementItem = (id) => {
    dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE-ITEM",
      payload: id,
    });
  };

  const removeAll = () => {
    dispatch({
      type: "REMOVE-ALL",
    });
  };

  // GET total by useEffect

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [state.cart]);

  return (
    <CreateCartContext.Provider
      value={{
        ...state,
        addtoCart,
        incrementItem,
        decrementItem,
        removeItem,
        removeAll,
      }}
    >
      {children}
    </CreateCartContext.Provider>
  );
}

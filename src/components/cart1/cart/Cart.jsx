import { createContext, useEffect, useReducer } from "react";
import "./cart.css";
import { products } from "../products/Products";
import Cartcontext from "../../cartContext/Cartcontext";
import { reducer } from "./Reducer";

export const itemContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

export default function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const removeAll = () => {
    return dispatch({
      type: "REMOVE-ALL",
    });
  };

  const incrementItem = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrementItem = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use useEffect to updata the data

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [state.item]);

  return (
    <>
      <itemContext.Provider
        value={{
          ...state,
          removeItem,
          removeAll,
          incrementItem,
          decrementItem,
        }}
      >
        <Cartcontext />
      </itemContext.Provider>
    </>
  );
}

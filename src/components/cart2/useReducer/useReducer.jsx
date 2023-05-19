export default function useCartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }

  if (action.type === "INCREMENT") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return { ...state, cart: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return { ...state, cart: updatedCart };
  }

  if (action.type === "REMOVE-ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => {
        return item.id !== action.payload;
      }),
    };
  }

  if (action.type === "REMOVE-ALL") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "GET_TOTAL") {
    let { total_Item, total_amonut } = state.cart.reduce(
      (accum, curVal) => {
        let { quantity, price } = curVal;

        const updatePrice = parseInt(price) * quantity;
        accum.total_Item += quantity;

        accum.total_amonut += updatePrice;
        return accum;
      },
      { total_Item: 0, total_amonut: 0 }
    );
    return { ...state, total_Item, total_amonut };
  }

  return state;
}

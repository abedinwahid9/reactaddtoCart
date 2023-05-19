export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  if (action.type === "REMOVE-ALL") {
    return {
      ...state,
      item: [],
    };
  }

  if (action.type === "INCREMENT") {
    let updateItem = state.item.map((curItem) => {
      if (curItem.id === action.payload) {
        return { ...curItem, quantity: curItem.quantity + 1 };
      }
      return curItem;
    });
    return { ...state, item: updateItem };
  }

  if (action.type === "DECREMENT") {
    let updateItem = state.item
      .map((curItem) => {
        if (curItem.id === action.payload) {
          return { ...curItem, quantity: curItem.quantity - 1 };
        }
        return curItem;
      })
      .filter((curItem) => curItem.quantity !== 0);

    return { ...state, item: updateItem };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { quantity, price } = curVal;
        const updatePrice = parseInt(price) * quantity;
        accum.totalItem += quantity;
        accum.totalAmount += updatePrice;
        return accum;
      },
      { totalItem: 0, totalAmount: 0 }
    );

    return { ...state, totalItem, totalAmount };
  }
  return state;
};

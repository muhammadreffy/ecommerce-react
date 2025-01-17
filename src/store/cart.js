const DEFAULT_STATE = {
  items: [],
};

export const cartReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === "CART_GET") {
    const duplicateState = { ...state };

    duplicateState.items = action.payload;

    return duplicateState;
  }

  return state;
};

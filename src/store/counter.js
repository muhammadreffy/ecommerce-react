const DEFAULT_STATE = {
  count: 0,
};

export const counterReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === "INCREMENT") {
    const duplicateCount = { ...state };

    duplicateCount.count += 1;

    return duplicateCount;
  } else if (action.type === "DECREMENT") {
    const duplicateCount = { ...state };

    duplicateCount.count -= 1;

    return duplicateCount;
  } else if (action.type === "SET_COUNT") {
    const duplicateCount = { ...state };

    duplicateCount.count = action.payload.newCount;

    return duplicateCount;
  }

  return state;
};

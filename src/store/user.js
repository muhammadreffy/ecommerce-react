const DEFAULT_STATE = {
  id: "",
  email: "",
  username: "",
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === "USER_LOGIN") {
    const duplicateState = { ...state };

    duplicateState.id = action.payload.id;
    duplicateState.email = action.payload.email;
    duplicateState.username = action.payload.username;

    return duplicateState;
  }

  return state;
};

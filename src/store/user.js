const DEFAULT_STATE = {
  id: "",
  email: "",
  username: "",
  role: "",
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === "USER_LOGIN") {
    const duplicateState = { ...state };

    duplicateState.id = action.payload.id;
    duplicateState.email = action.payload.email;
    duplicateState.username = action.payload.username;
    duplicateState.role = action.payload.role;

    return duplicateState;
  } else if (action.type === "USER_LOGOUT") {
    return DEFAULT_STATE;
  }

  return state;
};

import * as types from "./actionTypes";

const initialState = {
  registerSuccess: false,
  registerLoading: false,
  registerError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_REGISTER_REQUEST:
      return { ...oldState, registerLoading: true };
    case types.USER_REGISTER_SUCCESS:
      return { ...oldState, registerLoading: false, registerSuccess: true };
    case types.USER_REGISTER_ERROR:
      return {
        ...oldState,
        registerLoading: false,
        registerSuccess: false,
        registerError: true,
      };
    default:
      return oldState;
  }
};

export { reducer };

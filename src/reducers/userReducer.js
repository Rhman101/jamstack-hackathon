const DEFAULT_STATE = {};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.user;
    case "UPDATE_USER":
      return { ...state, ...action.updates };
    case "CLEAR_USER":
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default userReducer;

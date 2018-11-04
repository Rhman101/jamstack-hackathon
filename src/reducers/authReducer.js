const DEFAULT_STATE = { authUser: null };

const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return { authUser: action.authUser };
    default:
      return state;
  }
};

export default authReducer;

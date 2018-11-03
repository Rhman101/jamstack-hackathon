const userReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.user;
    case "UPDATE_USER":
      return { ...state, ...action.updates };
    case "CLEAR_USER":
      return null;
    default:
      return state;
  }
};

export default userReducer;

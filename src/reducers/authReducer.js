const DEFAULT_STATE = null;

const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return { uid: action.id };
    default:
      return state;
  }
};

export default authReducer;

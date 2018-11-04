const DEFAULT_STATE = null;

const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { uid: action.id };
    case "LOG_OUT":
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default authReducer;

const currentGameReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_CURRENT_GAME":
      return action.currentGame;
    case "UPDATE_CURRENT_GAME":
      return { ...state, ...action.updates };
    case "CLEAR_CURRENT_GAME":
      return null;
    default:
      return state;
  }
};

export default currentGameReducer;

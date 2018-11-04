const DEFAULT_STATE = {
  addition: {},
  subtraction: {},
  multiplication: {},
  division: {}
};

const gamesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GET_GAMES":
      return action.games;
    case "SAVE_GAME":
      return { ...state, [action.area]: { ...action.game } };
    case "CLEAR_GAME":
      return { ...state, [action.area]: {} };
    default:
      return state;
  }
};

export default gamesReducer;

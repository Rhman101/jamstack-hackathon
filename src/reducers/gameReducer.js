const DEFAULT_STATE = {
  area: "",
  level: 1,
  charHealth: 100,
  monsterHealth: 100,
  questionNumber: 1
};

const gamesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GET_GAME":
      return action.game;
    case "CLEAR_GAME":
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default gamesReducer;

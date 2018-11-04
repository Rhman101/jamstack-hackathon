const DEFAULT_AREA_STATE = {
  level: 1,
  charHealth: 100,
  monsterHealth: 100,
  questionNumber: 1
};

const DEFAULT_STATE = {
  addition: { ...DEFAULT_AREA_STATE },
  subtraction: { ...DEFAULT_AREA_STATE },
  multiplication: { ...DEFAULT_AREA_STATE },
  division: { ...DEFAULT_AREA_STATE }
};

const gamesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GET_GAMES":
      return { ...state, ...action.games };
    case "SAVE_GAME":
      return { ...state, [action.area]: { ...action.game } };
    case "CLEAR_GAME":
      return { ...state, [action.area]: { ...DEFAULT_AREA_STATE } };
    default:
      return state;
  }
};

export default gamesReducer;

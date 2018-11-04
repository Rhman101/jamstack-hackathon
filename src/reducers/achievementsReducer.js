const DEFAULT_STATE = {
  completedAddition: false,
  completedSubtraction: false,
  completedMultiplication: false,
  completedDivision: false,
  perfectHealthCount: 0,
  speedyCount: 0
};

const achievementsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GET_ACHIEVEMENTS":
      return action.achievements;
    case "UPDATE_ACHIEVEMENT":
      return { ...state, ...action.achievement };
    default:
      return state;
  }
};

export default achievementsReducer;

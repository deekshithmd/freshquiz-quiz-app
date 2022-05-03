export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_QUIZ":
      return { ...state, allQuiz: action.payload };
    case "CATEGORIES":
      return { ...state, categories: action.payload };
    case "SELECTED_QUIZ":
      return { ...state, selectedQuiz: action.payload };
    default:
      return state;
  }
};

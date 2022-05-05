export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_QUIZ":
      return { ...state, allQuiz: action.payload };
    case "CATEGORIES":
      return { ...state, categories: action.payload };
    case "SELECTED_QUIZ":
      localStorage.setItem("singleQuiz", JSON.stringify(action.payload));
      return { ...state, selectedQuiz: action.payload };
    case "MARKED_ANSWER":
      return {
        ...state,
        markedAnswers: [...state.markedAnswers, action.payload],
      };
    case "CORRECT_ANSWER":
      return {
        ...state,
        correctAnswers: [...state.correctAnswers, action.payload],
      };
    default:
      return state;
  }
};

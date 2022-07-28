import React from "react";
import { actionType, initialStateType } from "./DataReducer.type";

export const DataReducer: React.Reducer<initialStateType, actionType> = (
  state,
  action
) => {
  switch (action.type) {
    case "ALL_QUIZ":
      return { ...state, allQuiz: action.payload };
    case "CATEGORIES":
      return { ...state, categories: action.payload };
    case "SELECTED_QUIZ":
      sessionStorage.setItem("singleQuiz", JSON.stringify(action.payload));
      return { ...state, selectedQuiz: action.payload };
    case "MARKED_ANSWER":
      return typeof action.payload === "object"
        ? {
            ...state,
            markedAnswers: [],
          }
        : {
            ...state,
            markedAnswers: [...state.markedAnswers, action.payload],
          };
    case "CORRECT_ANSWER":
      return typeof action.payload === "object"
        ? {
            ...state,
            correctAnswers: [],
          }
        : {
            ...state,
            correctAnswers: [...state.correctAnswers, action.payload],
          };
    default:
      return state;
  }
};

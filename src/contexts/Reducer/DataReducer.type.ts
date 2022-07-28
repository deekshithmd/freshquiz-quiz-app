import { quizType, answerType } from "types/Quiz.type";
import { categoryType } from "types/Category.type";

export const initialState = {
  allQuiz: [],
  categories: [],
  selectedQuiz: [],
  markedAnswers: [],
  correctAnswers: [],
};

export type initialStateType = {
  allQuiz: quizType[];
  categories: categoryType[];
  selectedQuiz: quizType[];
  markedAnswers: answerType[];
  correctAnswers: answerType[];
};

export type actionType =
  | {
      type: "ALL_QUIZ";
      payload: quizType[];
    }
  | {
      type: "CATEGORIES";
      payload: categoryType[];
    }
  | {
      type: "SELECTED_QUIZ";
      payload: quizType;
    }
  | {
      type: "MARKED_ANSWER";
      payload: answerType;
    }
  | {
      type: "CORRECT_ANSWER";
      payload: answerType;
    };

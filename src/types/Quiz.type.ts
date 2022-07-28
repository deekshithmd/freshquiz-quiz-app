export type optionType = string[];

export type questionType = {
  _id: string;
  question: string;
  options: optionType;
  answer: string;
};

// export type questionsType=questionType[]

export type quizType = {
  _id: string;
  id: string;
  title: string;
  totalScore: number;
  categoryName: string;
  mcqs: questionType[];
};

export type answerType = string | object;

import axios from "axios";

type idType = {
  quizId?: string;
  categoryId?: string;
};

const getQuiz = () => axios.get("/api/quizzes");

const getSingleQuiz = ({ quizId }: idType) =>
  axios.get(`/api/quizzes/${quizId}`);

const getCategories = () => axios.get("/api/categories");

const getSingleCategory = ({ categoryId }: idType) =>
  axios.get(`/api/categories/${categoryId}`);

export { getQuiz, getSingleQuiz, getCategories, getSingleCategory };

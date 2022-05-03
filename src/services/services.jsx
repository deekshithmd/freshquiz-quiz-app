import axios from "axios";

const getQuiz = () => axios.get("/api/quizzes");

const getSingleQuiz = ({ quizId }) => axios.get(`/api/quizzes/${quizId}`);

const getCategories = () => axios.get("/api/categories");

const getSingleCategory = ({ categoryId }) =>
  axios.get(`/api/categories/${categoryId}`);

export { getQuiz, getSingleQuiz, getCategories, getSingleCategory };

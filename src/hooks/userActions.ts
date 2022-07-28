import { getCategories, getQuiz, getSingleQuiz } from "services";
import { useData } from "contexts";

export const useUserActions = () => {
  const { dispatch, setLoading } = useData();

  const getQuizData = async () => {
    setLoading(true);
    const quizResponse = await getQuiz();
    dispatch({ type: "ALL_QUIZ", payload: quizResponse.data.quizes });
    setLoading(false);
  };

  const getQuizCategories = async () => {
    setLoading(true);
    const categoryResponse = await getCategories();
    dispatch({ type: "CATEGORIES", payload: categoryResponse.data.categories });
    setLoading(false);
  };

  const getSelectedQuiz = async (quizId: string) => {
    setLoading(true);
    const singleQuiz = await getSingleQuiz({ quizId });
    dispatch({ type: "SELECTED_QUIZ", payload: singleQuiz.data });
    setLoading(false);
  };

  return {
    getQuizData,
    getQuizCategories,
    getSelectedQuiz,
  };
};

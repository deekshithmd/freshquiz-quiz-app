import { getCategories, getQuiz,getSingleQuiz } from "../services";
import { useData } from "../contexts";
export const useUserActions = () => {
  const { dispatch } = useData();

  const getQuizData = async () => {
    const q = await getQuiz();
    dispatch({ type: "ALL_QUIZ", payload: q.data.quizes });
  };

  const getQuizCategories = async () => {
    const c = await getCategories();
    dispatch({ type: "CATEGORIES", payload: c.data.categories });
  };

  const getSelectedQuiz=async(quizId)=>{
    const q=await getSingleQuiz({quizId})
    dispatch({type:"SELECTED_QUIZ",payload:q.data})
  }

  return {
    getQuizData,
    getQuizCategories,
    getSelectedQuiz
  };
};

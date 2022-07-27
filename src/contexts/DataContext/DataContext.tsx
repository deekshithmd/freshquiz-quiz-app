import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../Reducer/DataReducer";
import { useState, useEffect } from "react";
import { getQuiz, getCategories } from "services";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, dispatch] = useReducer(DataReducer, {
    allQuiz: [],
    categories: [],
    selectedQuiz: [],
    markedAnswers: [],
    correctAnswers: [],
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      const q = await getQuiz();
      dispatch({ type: "ALL_QUIZ", payload: q.data.quizes });
      const c = await getCategories();
      dispatch({ type: "CATEGORIES", payload: c.data.categories });
      const single = JSON.parse(sessionStorage.getItem("singleQuiz"));
      dispatch({
        type: "SELECTED_QUIZ",
        payload: single,
      });
      const marked = JSON.parse(sessionStorage.getItem("marked_answers"));
      const correct = JSON.parse(sessionStorage.getItem("correct_answers"));
      marked?.map((ans) => {
        dispatch({ type: "MARKED_ANSWER", payload: ans });
      });
      correct?.map((ans) => {
        dispatch({ type: "CORRECT_ANSWER", payload: ans });
      });
      setLoading(false);
    })();
  }, []);

  return (
    <DataContext.Provider value={{ data, dispatch, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };

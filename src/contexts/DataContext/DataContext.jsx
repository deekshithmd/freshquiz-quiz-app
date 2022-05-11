import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../Reducer/DataReducer";
import { useState, useEffect } from "react";
import { getQuiz, getCategories } from "../../services";
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
      dispatch({ type: "SELECTED_QUIZ", payload: [] });
      dispatch({ type: "MARKED_ANSWER", payload: [] });
      dispatch({ type: "CORRECT_ANSWER", payload: [] });
      localStorage.removeItem("singleQuiz");

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

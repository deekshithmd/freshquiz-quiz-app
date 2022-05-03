import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../Reducer/DataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(DataReducer, {
    allQuiz: [],
    categories: [],
    selectedQuiz: [],
  });

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };

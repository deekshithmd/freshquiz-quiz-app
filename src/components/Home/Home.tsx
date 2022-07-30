import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useData } from "contexts";
export const Home = () => {
  const { dispatch } = useData();

  //Clearing all previous data

  useEffect(() => {
    (() => {
      sessionStorage.removeItem("singleQuiz");
      sessionStorage.removeItem("marked_answers");
      sessionStorage.removeItem("correct_answers");
      dispatch({ type: "SELECTED_QUIZ", payload: [] });
      dispatch({ type: "MARKED_ANSWER", payload: [] });
      dispatch({ type: "CORRECT_ANSWER", payload: [] });
    })();
  }, []);
  return (
    <div className="main">
      <div className="heading">Do you know well about Farming Practices?</div>
      <div className="sub-heading">
        Then try this quiz to test and increase your knowledge about farming
        practices
      </div>
      <Link
        to="./category"
        className="btn btn-solid-primary link-style-none start-btn text-xl"
      >
        Let's Start...
      </Link>
    </div>
  );
};

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUserActions } from "../../hooks";
export const Home = () => {
  const { getQuizData, getQuizCategories } = useUserActions();
  useEffect(() => {
    getQuizData();
    getQuizCategories();
  }, []);
  return (
    <div className="main">
      <div className="heading">how much you know about Farming?</div>
      <div className="sub-heading">
        Do you know well about it? Then check your knowledge level here...
      </div>
      <Link to="./category" className="btn btn-solid-primary link-style-none">
        Let's start...
      </Link>
    </div>
  );
};

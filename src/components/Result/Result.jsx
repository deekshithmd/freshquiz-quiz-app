import "./result.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts";
import { useState, useEffect } from "react";
export const Result = () => {
  const { data } = useData();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  //const [p,setP]=useState(0)
  // console.log("marked", data.markedAnswers);
  // console.log("correct", data.correctAnswers);
  useEffect(() => {
    for (let i = 0; i < data.correctAnswers.length; i++) {
      if (data.markedAnswers[i] === data.correctAnswers[i]) {
        setScore((p) => p + 1);
      }
    }
  }, []);
  const percentage = ((score / data.correctAnswers.length) * 100).toFixed(2);
  console.log("percentage", percentage);
  return (
    <div className="main">
      <div className="result margin-b">
        <h2>Your knowledge score is here...</h2>
        <h3>
          Final Score: <span className="score">{score * 5}</span>/
          {data.correctAnswers.length * 5}
        </h3>
        {percentage ? (
          percentage > 70 ? (
            <p className="text-lg pass">
              Congratulations you have cleared quiz with {percentage}%
            </p>
          ) : (
            <p className="text-lg pass">Aww you have not cleared quiz </p>
          )
        ) : null}
        <button
          className="btn btn-solid-primary"
          onClick={() => navigate("/answers")}
        >
          Check Answers...
        </button>
      </div>
    </div>
  );
};

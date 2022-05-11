import "./result.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts";
import { useState, useEffect } from "react";

export const Result = () => {
  const { data } = useData();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const percentage = (
    (score / data.selectedQuiz?.quiz?.mcqs.length) *
    100
  ).toFixed(2);

  useEffect(() => {
    for (let i = 0; i < data.correctAnswers.length; i++) {
      if (data.markedAnswers[i] === data.correctAnswers[i]) {
        setScore((p) => p + 1);
      }
    }
  }, []);

  return (
    <div className="main">
      <div className="result margin-b">
        <h2>Your knowledge score is here...</h2>
        <h3>
          Final Score: <span className="score">{score * 5}</span>/
          {data.selectedQuiz?.quiz?.mcqs.length * 5}
        </h3>
        {percentage ? (
          percentage > 70 ? (
            <p className="text-2xl text-bold pass">
              Congratulations!!! you have cleared quiz with {percentage}%
            </p>
          ) : (
            <p className="text-2xl text-bold fail">
              Aww you have not cleared quiz{" "}
            </p>
          )
        ) : null}
        <button
          className="btn btn-solid-primary"
          onClick={() => {
            setScore(0);
            navigate("/answers");
          }}
        >
          Check Answers...
        </button>
      </div>
    </div>
  );
};

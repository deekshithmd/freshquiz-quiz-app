import "./answers.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts";
import { useState, useEffect } from "react";
export const Answers = () => {
  const navigate = useNavigate();
  const { data } = useData();
  const [incorrectAns, setIncorrectAns] = useState([]);
  let counter = 0;
  
  useEffect(() => {
    for (let i = 0; i < data.correctAnswers.length; i++) {
      if (data.correctAnswers[i] !== data.markedAnswers[i]) {
        setIncorrectAns((a) => [...a, data.markedAnswers[i]]);
      }
    }
  }, []);

  return (
    <div className="main">
      <h2>Answers</h2>
      {data.selectedQuiz?.quiz?.mcqs?.map((q) => {
        return (
          <div className="question-container margin-b" key={q._id}>
            <section className="question-header margin-b">
              <h4>
                Question: <span className="question-no">{++counter}/5</span>
              </h4>
            </section>
            <p className="text-lg">{q.question}</p>
            <div className="option-container">
              {q?.options?.map((o, index) => {
                return (
                  <div
                    className={`${
                      incorrectAns.indexOf(o) !== -1
                        ? "option incorrect"
                        : "option"
                    } ${
                      data.correctAnswers?.indexOf(o) !== -1
                        ? "correct"
                        : null
                    }`}
                    key={index}
                  >
                    <label className="text-md">{o}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <button
        className="btn btn-solid-primary margin-t"
        onClick={() => navigate("/")}
      >
        Goto Homepage
      </button>
    </div>
  );
};

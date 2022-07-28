import "./answers.css";
import { useNavigate } from "react-router-dom";
import { useData } from "contexts";
import { useState, useEffect } from "react";
import { questionType, answerType } from "types/Quiz.type";

export const Answers = () => {
  const navigate = useNavigate();
  const { data } = useData();
  const [incorrectAns, setIncorrectAns] = useState([]);
  let counter: number = 0;

  //Extract incorrect answers
  useEffect(() => {
    for (let i = 0; i < data.correctAnswers.length; i++) {
      if (data.correctAnswers[i] !== data.markedAnswers[i]) {
        setIncorrectAns((a) => [...a, data.markedAnswers[i]]);
      }
    }
  }, []);

  return (
    <div className="main">
      <h2 className="answer-heading">Answers for your quiz Questions</h2>
      {data?.selectedQuiz?.quiz?.mcqs?.map((q: questionType) => {
        return (
          <div className="question-container margin-b" key={q._id}>
            <section className="question-header margin-b">
              <h4 className="text-lg">
                Question: <span className="question-no">{++counter}/5</span>
              </h4>
            </section>
            <p className="text-lg">{q.question}</p>
            <div className="option-container">
              {q?.options?.map((option: string, index: number) => {
                return (
                  <div
                    className={`${
                      incorrectAns?.indexOf(option) !== -1
                        ? "option incorrect"
                        : "option"
                    } ${
                      data?.correctAnswers?.indexOf(option) !== -1
                        ? "correct"
                        : null
                    }`}
                    key={index}
                  >
                    <label className="text-md">{option}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <button
        className="btn btn-solid-primary margin-t"
        onClick={() => {
          navigate("/");
        }}
      >
        Goto Homepage
      </button>
    </div>
  );
};

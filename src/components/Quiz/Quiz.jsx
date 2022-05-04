import "./quiz.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useData } from "../../contexts";
export const Quiz = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data, dispatch } = useData();
  const [quizLength, setQuizLength] = useState(0);
  const [count, setCount] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState(
    data.selectedQuiz?.quiz?.mcqs?.[count]
  );
  const [anser, setAnser] = useState("");

  useEffect(() => {
    nextQuestion();
  }, [count]);

  const nextQuestion = () => {
    setCurrentQuestion(data.selectedQuiz?.quiz?.mcqs[count]);
  };
  return (
    <div className="main">
      <h2>{data.selectedQuiz?.quiz?.title}</h2>
      {!currentQuestion ? (
        <div
          className="start text-2xl text-bold"
          onClick={() => {
            setCount((p) => p + 1);
            setQuizLength(data.selectedQuiz?.quiz?.mcqs.length);
          }}
        >
          Start
        </div>
      ) : (
        <div className="question-container margin-t" key={currentQuestion._id}>
          <section className="question-header margin-b">
            <h3>
              Question: <span className="question-no">{count + 1}/5</span>
            </h3>
            <h4>
              <button
                className="btn btn-solid-primary"
                onClick={() => navigate("/")}
              >
                Quit
              </button>
            </h4>
          </section>
          <p className="text-lg text-bold">{currentQuestion.question}</p>
          <div className="option-container">
            {currentQuestion.options.map((o, index) => {
              return (
                <div className="option option-hover" key={index}>
                  <label className="text-md ">
                    <input
                      type="radio"
                      value={o}
                      name="option"
                      className="margin-r"
                      onClick={(e) => setAnser(e.target.value)}
                    />
                    {o}
                  </label>
                </div>
              );
            })}
            <div className="button-container">
              {count === 0 ? (
                <button
                  className="btn btn-solid-primary"
                  onClick={() => navigate(`/rules/${categoryId}`)}
                >
                  Rules
                </button>
              ) : (
                <button
                  className="btn btn-solid-primary"
                  onClick={() => setCount((p) => p - 1)}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              )}
              {count < quizLength - 1 ? (
                <button
                  className="btn btn-solid-primary"
                  onClick={() => {
                    setCount((p) => p + 1);
                    dispatch({ type: "MARKED_ANSWER", payload: anser });
                    dispatch({
                      type: "CORRECT_ANSWER",
                      payload: currentQuestion.answer,
                    });
                  }}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              ) : (
                <button
                  className="btn btn-solid-primary"
                  onClick={() => {
                    navigate("/result");
                    dispatch({ type: "MARKED_ANSWER", payload: anser });
                    dispatch({
                      type: "CORRECT_ANSWER",
                      payload: currentQuestion.answer,
                    });
                  }}
                >
                  Result
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

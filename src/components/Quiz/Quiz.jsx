import "./quiz.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useData } from "../../contexts";
import { Loader, Toast } from "..";
import { useToast } from "../../hooks";

export const Quiz = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data, dispatch, loading } = useData();
  const [quizLength, setQuizLength] = useState(0);
  const [count, setCount] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [anser, setAnser] = useState("");
  const [minute, setMinute] = useState(5);
  const [second, setSecond] = useState(0);
  const { successToast } = useToast();

  useEffect(() => {
    const id = setInterval(() => {
      if (second > 0) {
        setSecond((s) => s - 1);
      }

      if (second === 0) {
        if (minute === 0) {
          clearInterval(id);
          navigate("/result");
        } else {
          setMinute((m) => m - 1);
          setSecond(59);
        }
      }
    }, 1000);
    return () => clearInterval(id);
  });

  useEffect(() => {
    dispatch({
      type: "SELECTED_QUIZ",
      payload: JSON.parse(localStorage.getItem("singleQuiz")),
    });
  }, []);

  useEffect(() => {
    nextQuestion();
  }, [count]);

  const nextQuestion = () => {
    setCurrentQuestion(data.selectedQuiz?.quiz?.mcqs[count]);
  };

  const handleQuit = () => {
    dispatch({ type: "MARKED_ANSWER", payload: [] });
    dispatch({ type: "CORRECT_ANSWER", payload: [] });
    setCount(-1);
    localStorage.removeItem("singleQuiz");
    navigate("/");
  };

  return (
    <div className="main">
      <h2>{data.selectedQuiz?.quiz?.title}</h2>
      <h2>
        Time Left : {minute}:{second}
      </h2>
      {!loading ? (
        <>
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
            <div
              className="question-container margin-t"
              key={currentQuestion._id}
            >
              <section className="question-header margin-b">
                <h3>
                  Question: <span className="question-no">{count + 1}/5</span>
                </h3>
                <h4>
                  <button
                    className="btn btn-solid-primary"
                    onClick={handleQuit}
                  >
                    Quit
                  </button>
                </h4>
              </section>
              <p className="text-lg text-bold">{currentQuestion.question}</p>
              <div className="option-container">
                {currentQuestion.options.map((o, index) => {
                  return (
                    <label className="option option-hover" key={index}>
                      <input
                        type="radio"
                        value={o}
                        name="option"
                        className="margin-r"
                        onClick={(e) => setAnser(e.target.value)}
                      />
                      {o}
                    </label>
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
                        successToast(`Answered ${count + 1} Question`);
                      }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  ) : (
                    <button
                      className="btn btn-solid-primary"
                      onClick={() => {
                        dispatch({ type: "MARKED_ANSWER", payload: anser });
                        dispatch({
                          type: "CORRECT_ANSWER",
                          payload: currentQuestion.answer,
                        });
                        navigate("/result");
                        successToast("Answered all 5 Questions");
                      }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Loader text="Loading..." />
      )}
    </div>
  );
};

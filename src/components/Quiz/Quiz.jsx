import "./quiz.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useUserActions } from "../../hooks";
import { useData } from "../../contexts";
export const Quiz = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { getSelectedQuiz } = useUserActions();
  const { data } = useData();
  useEffect(() => {
    data.allQuiz &&
      data.allQuiz.map((quiz) => {
        if (quiz.id === categoryId) {
          getSelectedQuiz(quiz._id);
        }
      });
  }, []);
  if (data.selectedQuiz.length == 0) console.log("empty");
  else console.log("single", data.selectedQuiz.quiz.mcqs);
  return (
    <div className="main">
      <h2>Poultry Farming</h2>
      {data.selectedQuiz.length == 0
        ? null
        : data.selectedQuiz.quiz.mcqs.map((q) => {
            return (
              <div className="question-container margin-t">
                <section className="question-header margin-b">
                  <h3>
                    Question: <span className="question-no">1/5</span>
                  </h3>
                  <h4>
                    <button className="btn btn-solid-primary">Quit</button>
                  </h4>
                </section>
                <p className="text-lg text-bold">{q.question}</p>
                <div className="option-container">
                  <div className="option option-hover">
                    <label className="text-md ">
                      <input
                        type="radio"
                        value="option1"
                        name="option"
                        className="margin-r"
                      />
                      Earth
                    </label>
                  </div>
                  <div className="option option-hover">
                    <label className="text-md">
                      <input
                        type="radio"
                        value="option2"
                        name="option"
                        className="margin-r"
                      />
                      Earth
                    </label>
                  </div>
                  <div className="option option-hover">
                    <label className="text-md">
                      <input
                        type="radio"
                        value="option3"
                        name="option"
                        className="margin-r"
                      />
                      Earth
                    </label>
                  </div>
                  <div className="option option-hover">
                    <label className="text-md">
                      <input
                        type="radio"
                        value="option4"
                        name="option"
                        className="margin-r"
                      />
                      Earth
                    </label>
                  </div>
                  <div className="button-container">
                    <button
                      className="btn btn-solid-primary"
                      onClick={() => navigate("/rules")}
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button
                      className="btn btn-solid-primary"
                      onClick={() => navigate("/result")}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

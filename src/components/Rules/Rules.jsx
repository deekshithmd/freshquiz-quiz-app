import "./rules.css";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../contexts";
import { useUserActions } from "../../hooks";
export const Rules = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data } = useData();
  const { getSelectedQuiz } = useUserActions();
  const loadQuiz = () => {
    data.allQuiz &&
      data.allQuiz.map((quiz) => {
        if (quiz.id === categoryId) {
          getSelectedQuiz(quiz._id);
        }
      });
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <div className="main">
      {data.categories &&
        data.categories.map((category) => {
          return (
            categoryId === category.id && (
              <div key={category._id}>
                <h2>
                  You have choosen to test knowledge on {category.categoryName}
                  ...
                </h2>
                <div className="rules-container">
                  <h3>
                    Before starting quiz read the instructions carefully and
                    proceed...
                  </h3>
                  <ol className="text-lg list rules text-left">
                    <li className="list-item">5 Questions to answer</li>
                    <li className="list-item">5 points for correct answer</li>
                    <li className="list-item">No negative marking</li>
                    <li className="list-item">
                      70% score required to clear quiz
                    </li>
                  </ol>
                </div>
                <button
                  className="btn btn-solid-primary"
                  onClick={() => loadQuiz()}
                >
                  Let's begin the Quiz...
                </button>
              </div>
            )
          );
        })}
    </div>
  );
};

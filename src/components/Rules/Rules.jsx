import "./rules.css";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "contexts";
import { useUserActions, useToast } from "hooks";
import { Loader } from "components";

export const Rules = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data, loading } = useData();
  const { getSelectedQuiz } = useUserActions();
  const { successToast } = useToast();

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
      {!loading ? (
        <>
          {data.categories &&
            data.categories.map((category) => {
              return (
                categoryId === category.id && (
                  <div key={category._id} className="flex">
                    <h2 className="header">
                      You have choosen to test knowledge on{" "}
                      {category.categoryName}
                      ...
                    </h2>
                    <div className="rules-container">
                      <h3>
                        Before starting quiz read the instructions carefully and
                        proceed...
                      </h3>
                      <ol className="text-lg list rules text-left">
                        <li className="list-item">5 Questions to answer</li>
                        <li className="list-item">
                          5 points for correct answer
                        </li>
                        <li className="list-item">No negative marking</li>
                        <li className="list-item">
                          70% score required to clear quiz
                        </li>
                        <li className="list-item">
                          5 Minutes to Answer Questions
                        </li>
                      </ol>
                    </div>
                    <button
                      className="btn btn-solid-primary"
                      onClick={() => {
                        loadQuiz();
                        successToast("Best of Luck...");
                      }}
                    >
                      Let's begin the Quiz...
                    </button>
                  </div>
                )
              );
            })}
        </>
      ) : (
        <Loader text="Loading" />
      )}
    </div>
  );
};

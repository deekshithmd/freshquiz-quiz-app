import "./rules.css";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../contexts";
export const Rules = () => {
  const { categoryId } = useParams();
  const { data } = useData();
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
                <Link to={`/quiz/${categoryId}`}>
                  <button className="btn btn-solid-primary">
                    Let's begin the Quiz...
                  </button>
                </Link>
              </div>
            )
          );
        })}
    </div>
  );
};

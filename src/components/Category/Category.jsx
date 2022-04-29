import { Link } from "react-router-dom";
import "./category.css";
export const Category = () => {
  return (
    <div className="main">
      <div className="quiz-category-container">
        <Link to="/" className="link-style-none margin-r">
          <div className="quiz-category">
            <div className="quiz-image">
              <img src="https://i.postimg.cc/9QfpFNvW/water.jpg" alt="water" />
            </div>
            <div className="quiz-info">
              <h3>Quiz on Water</h3>
              <p>Attend the quiz on water</p>
              <h3>5 Questions</h3>
            </div>
          </div>
        </Link>
        <Link to="/" className="link-style-none margin-r">
          <div className="quiz-category">
            <div className="quiz-image">
              <img src="https://i.postimg.cc/x1FPk32L/soil.jpg" alt="water" />
            </div>
            <div className="quiz-info">
              <h3>Quiz on Air</h3>
              <p>Attend the quiz on air</p>
              <h3>5 Questions</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import "./category.css";
export const Category = () => {
  return (
    <div className="main">
      <h1>Select your category</h1>
      <div className="quiz-category-container">
        <Link to="/rules" className="category-card link-style-none">
          <div className="category-image">
            <img src="https://i.postimg.cc/9QfpFNvW/water.jpg" alt="water" />
          </div>
          <div className="category-info">
            <h3 className="l-h-0">Poultry Farming Quiz</h3>
            <span className="text-md text-left">
              Play this quiz if you know well about poultry farming
            </span>
            <h3 className="l-h-0">5 Questions</h3>
          </div>
        </Link>
        <Link to="/rules" className="category-card link-style-none">
          <div className="category-image">
            <img src="https://i.postimg.cc/9QfpFNvW/water.jpg" alt="water" />
          </div>
          <div className="category-info">
            <h3 className="l-h-0">Poultry Farming Quiz</h3>
            <span className="text-md text-left">
              Play this quiz if you know well about poultry farming
            </span>
            <h3 className="l-h-0">5 Questions</h3>
          </div>
        </Link>
        <Link to="/rules" className="category-card link-style-none">
          <div className="category-image">
            <img src="https://i.postimg.cc/9QfpFNvW/water.jpg" alt="water" />
          </div>
          <div className="category-info">
            <h3 className="l-h-0">Poultry Farming Quiz</h3>
            <span className="text-md text-left">
              Play this quiz if you know well about poultry farming
            </span>
            <h3 className="l-h-0">5 Questions</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

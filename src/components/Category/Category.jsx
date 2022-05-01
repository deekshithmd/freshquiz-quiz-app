import { Link } from "react-router-dom";
import "./category.css";
export const Category = () => {
  return (
    <div className="main">
      <h1>Select your category</h1>
      <div className="quiz-category-container">
        <Link to="/rules" className="category-card link-style-none">
          <div className="category-image">
            <img src="https://agridata.ec.europa.eu/extensions/CommonImages/eggs-poultry.png" alt="water" />
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
            <img src="https://static9.depositphotos.com/1052036/1116/v/600/depositphotos_11165090-stock-illustration-dairy-farm.jpg" alt="water" />
          </div>
          <div className="category-info">
            <h3 className="l-h-0">Dairy Farming Quiz</h3>
            <span className="text-md text-left">
              Play this quiz if you know well about dairy farming
            </span>
            <h3 className="l-h-0">5 Questions</h3>
          </div>
        </Link>
        <Link to="/rules" className="category-card link-style-none">
          <div className="category-image">
            <img src="https://us.123rf.com/450wm/ylivdesign/ylivdesign2006/ylivdesign200602338/149522148-fish-farm-pool-icon-isometric-style.jpg?ver=6" alt="water" />
          </div>
          <div className="category-info">
            <h3 className="l-h-0">Fish Farming Quiz</h3>
            <span className="text-md text-left">
              Play this quiz if you know well about fish farming
            </span>
            <h3 className="l-h-0">5 Questions</h3>
          </div>
        </Link>
        <Link to="/rules" className="category-card link-style-none">
          <div className="category-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII5LHxegkQBPq_LQE4ABmmyWeHNukKb1lrA&usqp=CAU" alt="water" />
          </div>
          <div className="category-info">
            <h3 className="l-h-0">Forest Farming Quiz</h3>
            <span className="text-md text-left">
              Play this quiz if you know well about forest farming
            </span>
            <h3 className="l-h-0">5 Questions</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

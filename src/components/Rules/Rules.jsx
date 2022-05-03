import "./rules.css";
import { Link } from "react-router-dom";
export const Rules = () => {
  return (
    <div className="main">
     <h2>You have choosen to test knowledge on poultry farming...</h2>
      <div className="rules-container">
      <h3>Before starting quiz read the instructions carefully and proceed...</h3>
        <ol className="text-lg list rules text-left">
          <li className="list-item">5 Questions to answer</li>
          <li className="list-item">5 points for correct answer</li>
          <li className="list-item">No negative marking</li>
          <li className="list-item">70% score required to clear quiz</li>
        </ol>
      </div>
      <Link to="/quiz">
        <button className="btn btn-solid-primary">Let's begin the Quiz...</button>
      </Link>
    </div>
  );
};

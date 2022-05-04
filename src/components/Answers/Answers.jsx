import "./answers.css";
import { useNavigate } from "react-router-dom";
export const Answers = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <h2>Answers</h2>
      <div className="question-container">
        <section className="question-header margin-b">
          <h4>
            Question: <span className="question-no">1/5</span>
          </h4>
        </section>
        <p className="text-lg">First point on earth</p>
        <div className="option-container">
          <div className="option correct">
            <label className="text-md">Earth</label>
          </div>
          <div className="option">
            <label className="text-md">Earth</label>
          </div>
          <div className="option incorrect">
            <label className="text-md">Earth</label>
          </div>
          <div className="option">
            <label className="text-md">Earth</label>
          </div>
        </div>
      </div>
      <button
        className="btn btn-solid-primary margin-t"
        onClick={() => navigate("/")}
      >
        Goto Homepage
      </button>
    </div>
  );
};
import "./result.css";
import { useNavigate } from "react-router-dom";
export const Result = () => {
  const navigate = useNavigate();
  return (
    <div class="main">
      <div class="result margin-b">
        <h2>Your knowledge score is here...</h2>
        <h3>
          Final Score: <span class="score">30</span>/50
        </h3>
        <p class="text-lg pass">
          Congratulations you have cleared quiz with 80%
        </p>
        <button
          className="btn btn-solid-primary"
          onClick={() => navigate("/answers")}
        >
          Check Answers...
        </button>
      </div>
    </div>
  );
};

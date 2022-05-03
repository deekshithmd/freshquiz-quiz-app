import "./answers.css";
import { useNavigate } from "react-router-dom";
export const Answers = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <h2>Answers</h2>
      <div class="question-container">
        <section class="question-header margin-b">
          <h4>
            Question: <span class="question-no">1/5</span>
          </h4>
        </section>
        <p class="text-lg">First point on earth</p>
        <div class="option-container">
          <div class="option correct">
            <label for="option1" class="text-md">
              Earth
            </label>
          </div>
          <div class="option">
            <label for="option2" class="text-md">
              Earth
            </label>
          </div>
          <div class="option incorrect">
            <label for="option3" class="text-md">
              Earth
            </label>
          </div>
          <div class="option">
            <label for="option4" class="text-md">
              Earth
            </label>
          </div>
        </div>
      </div>
      <div class="question-container margin-t">
        <section class="question-header margin-b">
          <h4>
            Question: <span class="question-no">2/5</span>
          </h4>
        </section>
        <p class="text-lg">First point on earth</p>
        <div class="option-container">
          <div class="option">
            <label for="option1" class="text-md">
              Earth
            </label>
          </div>
          <div class="option correct">
            <label for="option2" class="text-md">
              Earth
            </label>
          </div>
          <div class="option ">
            <label for="option3" class="text-md">
              Earth
            </label>
          </div>
          <div class="option incorrect">
            <label for="option4" class="text-md">
              Earth
            </label>
          </div>
        </div>
      </div>
      <div class="question-container margin-t">
        <section class="question-header margin-b">
          <h4>
            Question: <span class="question-no">3/5</span>
          </h4>
        </section>
        <p class="text-lg">First point on earth</p>
        <div class="option-container">
          <div class="option incorrect">
            <label for="option1" class="text-md">
              Earth
            </label>
          </div>
          <div class="option">
            <label for="option2" class="text-md">
              Earth
            </label>
          </div>
          <div class="option correct">
            <label for="option3" class="text-md">
              Earth
            </label>
          </div>
          <div class="option">
            <label for="option4" class="text-md">
              Earth
            </label>
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

import "./quiz.css";
import {useNavigate} from "react-router-dom"
export const Quiz = () => {
  const navigate=useNavigate()
  return (
    <div className="main">
      <h2>Poultry Farming</h2>
      <div className="question-container margin-t">
        <section className="question-header margin-b">
          <h3>
            Question: <span className="question-no">1/5</span>
          </h3>
          <h4>
            <button className="btn btn-solid-primary">Quit</button>
          </h4>
        </section>
        <p className="text-lg text-bold">First point on earth</p>
        <div className="option-container">
          <div className="option option-hover">
            <label for="option1" className="text-md">
              <input type="radio" value="option1" name="option" />
              Earth
            </label>
          </div>
          <div className="option option-hover">
            <label for="option2" className="text-md">
              <input type="radio" value="option2" name="option" />
              Earth
            </label>
          </div>
          <div className="option option-hover">
            <label for="option3" className="text-md">
              <input type="radio" value="option3" name="option" />
              Earth
            </label>
          </div>
          <div className="option option-hover">
            <label for="option4" className="text-md">
              <input type="radio" value="option4" name="option" />
              Earth
            </label>
          </div>
          <div className="button-container">
            <button className="btn btn-solid-primary" onClick={()=>navigate("/rules")}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="btn btn-solid-primary" onClick={()=>navigate("/result")}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import "./navigation.css";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className="navigation-bar">
      <section className="brand logo">
        <Link to="/">
          <img
            src="https://i.postimg.cc/wBkfnyzT/freshquiz.png"
            className="fresh-logo"
            alt="logo"
          />
        </Link>
        <span className="brand-text">FreshQuiz</span>
      </section>
      <ul className="list-style-none account-data">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="burger-menu">
          <i className="fa-solid fa-bars"></i>
        </label>
      </ul>
    </nav>
  );
};

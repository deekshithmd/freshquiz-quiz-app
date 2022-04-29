import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="main">
      <div className="heading">Are you passionate about our Earth?</div>
      <div className="sub-heading">
        Then let's check your knowledge about earth by solving some quiz
        questions...
      </div>
      <Link
        to="./category"
        className="btn btn-solid-primary link-style-none"
      >
        Let's start...
      </Link>
    </div>
  );
};

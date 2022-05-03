import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="main">
      <div className="heading">how much you know about Farming?</div>
      <div className="sub-heading">
        Do you know well about it? Then check your knowledge level here...
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

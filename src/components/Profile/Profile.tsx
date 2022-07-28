import "./profile.css";
import { useAuth } from "contexts";
import { useNavigate } from "react-router-dom";
import { useToast } from "hooks";

export const Profile = () => {
  const { userData, setIsLoggedin } = useAuth();
  const navigate = useNavigate();
  const { successToast } = useToast();

  const logoutHandler = () => {
    setIsLoggedin(false);
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    successToast("Succefully Logged Out...");
    navigate("/");
  };

  return (
    <div className="main">
      <div className="profile-card">
        <h2 className="text-center l-h-0">Profile Details</h2>
        <div className="profile-info">
          <span className="field-heading text-lg text-bold">Full Name </span>
          <span className="field-info text-md text-bold">
            : {`${userData?.firstName} ${userData?.lastName}`}
          </span>
        </div>
        <div className="profile-info">
          <span className="field-heading text-lg text-bold">Email </span>
          <span className="field-info text-md text-bold">
            : {userData?.email}
          </span>
        </div>
        <button
          className="btn btn-solid-primary logout"
          onClick={logoutHandler}
        >
          Logout
          <i className="fa fa-sign-out margin-l"></i>
        </button>
      </div>
    </div>
  );
};

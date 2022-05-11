import "./navigation.css";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../contexts";
import { Toast } from "..";
export const Navigation = () => {
  const { isLoggedin } = useAuth();
  const { theme, toggleTheme } = useTheme();
  return (
    <>
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
          {!isLoggedin && (
            <li className="list-inline-item">
              <Link to="/login" className="btn btn-solid-primary link-btn">
                Login
              </Link>
            </li>
          )}

          {isLoggedin && (
            <>
              <Link to="/profile">
                <li className="list-inline-item profile">
                  <div className="avatar avatar-xs">
                    <img
                      className="img-responsive img-round"
                      src="https://i.postimg.cc/28Zcgq1j/avatar.png"
                      alt="Avatar"
                    />
                  </div>
                </li>
              </Link>
            </>
          )}
          <li className="list-inline-item">
            <span className="nav-icon-link link-style-none">
              <i
                className={
                  theme === "light"
                    ? "fas fa-moon nav-icon"
                    : "fas fa-sun nav-icon"
                }
                onClick={() => toggleTheme()}
              ></i>
            </span>
          </li>
        </ul>
      </nav>
      <Toast />
    </>
  );
};

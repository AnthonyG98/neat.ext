import { Link, useNavigate } from "react-router-dom";
export function Login() {
  return (
    <div className="login-container">
      <div className="login-entry-container">
        <div className="login-entry">
          <input
            type="text"
            className="login-input"
            placeholder="username"
            onChange={(e) => {
              enterUsername(e.target.value);
            }}
          />
          <input
            type="password"
            className="login-input"
            placeholder="password"
            onChange={(e) => {
              enterPassword(e.target.value);
            }}
          />
          <button className="login-btn" onClick={() => getLoggedInUser()}>
            LOGIN
          </button>
          <p className="sign-up-text">
            Are you a new user?{" "}
            <Link to="/signup" className="link-text">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

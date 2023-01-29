import LoginForm from "./LoginForm";
import { useState } from "react";
import SignupForm from "./SignupForm";

function Login({ onLogin, handleAddUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <h1 className="heading-primary login-greeting">
            Welcome to Red Star Thai
          </h1>
          <LoginForm onLogin={onLogin} />

          <div className="signup-container">
            <p className="signup-cta-text">Don't have an account?</p>
            <button className="btn" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="heading-primary login-greeting">
            Welcome to Red Star Thai
          </h1>
          <SignupForm onLogin={onLogin} handleAddUser={handleAddUser} />
          <div className="login-container">
            <p className="signup-cta-text">Already have an account?</p>
            <button className="btn" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;

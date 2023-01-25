import LoginForm from "./LoginForm";
import { useState } from "react";
import SignupForm from "./SignupForm";

function Login({ onLogin, handleAddUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />

          <p>
            Don't have an account? &nbsp;
            <button className="btn" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} handleAddUser={handleAddUser} />
          <p>
            Already have an account? &nbsp;
            <button className="btn" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;

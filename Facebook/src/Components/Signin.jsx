import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigninUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login Successful:", userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div>
      <div>
        
        <h1>
          Login
        </h1>

        <form onSubmit={SigninUser}>
          
          <div>
            <label>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
          >
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link
            to="/signup"
          >
            Create Account
          </Link>
        </p>
        <Link to="/forget">Forget Password</Link>
      </div>
    </div>
  );
};

export default Signin;
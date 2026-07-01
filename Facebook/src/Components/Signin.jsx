import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
const Signin = () => {
  const auth = getAuth();

  const GoogleProvider = new GoogleAuthProvider();

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

  const LoginWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

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
<br />

        <button onClick={LoginWithGoogle}>Login With Google</button>
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
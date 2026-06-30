import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Forget = () => {

    const auth = getAuth();

    const [email , setEmail] = useState("")

    const ForgetPassword = (e) => {
        sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    console.log("Check your inbox for the reset link.");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error: ", errorMessage);
  });

    }
  return (
    <div>
      <h1>Forget Password</h1>
      <form onSubmit={ForgetPassword}>
        <label htmlFor="">
            Email : <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </label>
        <br />
        <button>Send Reset Email</button>
      </form>
    </div>
  )
}

export default Forget

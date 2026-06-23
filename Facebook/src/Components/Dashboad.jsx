import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const Dashboad = () => {

    const auth = getAuth();

  const Logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Welcome to Dashboad</h1>
              <button
          onClick={Logout}
        >
          Logout
        </button>

    </div>
  )
}

export default Dashboad

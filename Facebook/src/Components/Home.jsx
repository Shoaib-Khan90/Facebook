import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { Link } from 'react-router-dom';

const Home = () => {
  
    const auth = getAuth();

  const Logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Home</h1>

               <button
          onClick={Logout}
        >
          Logout
        </button>

        <Link to="/Dashboad">Dashboad</Link>
    </div>
  )
}

export default Home

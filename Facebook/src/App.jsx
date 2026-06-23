import { useEffect, useState } from "react";
import Signin from "./Pages/Signin.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Dashboad from "./Components/Dashboad.jsx";
import { Navigate, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
const firebaseConfig = {
  apiKey: "AIzaSyBIBVVl1-qah5qPAns6ULaO8QmjfcnugiA",
  authDomain: "ecommerce-7f1e2.firebaseapp.com",
  databaseURL: "https://ecommerce-7f1e2-default-rtdb.firebaseio.com",
  projectId: "ecommerce-7f1e2",
  storageBucket: "ecommerce-7f1e2.firebasestorage.app",
  messagingSenderId: "1090647740235",
  appId: "1:1090647740235:web:1b29f9d339839f1a7022ce",
  measurementId: "G-EZ1CQ43M7C"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [isUserLogedin, setIsUserLogedin] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLogedin(true);
        console.log(user);
      } else {
        setIsUserLogedin(false);
        console.log(user);
      }
    });
  }, []);

  return (
    <div className="App">
      {isUserLogedin == null ? (
        <div>Loading...</div>
      ) : isUserLogedin ? (
        <>
          <Routes>
            <Route path="/" element={<Dashboad />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;